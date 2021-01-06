import { AfterViewInit, Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatCalendar, MatCalendarCellCssClasses } from '@angular/material/datepicker';

import { HeaderService } from '../../services/header.service';
import { DataService } from '../../services/data/data.service';
import { ExamDate } from '../../models/exam-date';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit, AfterViewInit {

  @ViewChild('calendar') calendar: MatCalendar<Date>;

  allExams: ExamDate[];
  calendarDate = new Date();

  /* -- Calendar properties -- */
  minDate = new Date(2019, 8, 1);
  maxDate = new Date(2022, 9, 30);

  get monthExams(): ExamDate[] {
    return this.allExams?.filter(exam => {
      const date = new Date(exam.date);
      return date.getFullYear() === this.calendarDate.getFullYear() && date.getMonth() === this.calendarDate.getMonth();
    });
  }

  constructor(private headerService: HeaderService,
              private dataService: DataService,
              private renderer: Renderer2,
              private dateAdapter: DateAdapter<Date>
  ) {
    this.headerService.setPageTitle('Klausuren');
    this.dateAdapter.getFirstDayOfWeek = () => 1;
  }

  ngOnInit(): void {
    this.fetchData();
  }

  ngAfterViewInit(): void {
    this.initializeCalendarButtons();
  }

  /* -- Initial functions -- */
  fetchData(): void {
    this.dataService.getExamDates().subscribe(
      (response) => {
        response.sort((a, b) => {
          if (a.date > b.date) { return 1; }
          if (a.date < b.date) { return -1; }
          return 0;
        });
        this.allExams = response;
      }, (error) => {
        this.allExams = null;
        console.log('error while GET exam-dates', error);
      }
    );
  }

  initializeCalendarButtons(): void {
    const BACK_BUTTON = document.querySelector('.mat-calendar-previous-button');
    const FORWARD_BUTTON = document.querySelector('.mat-calendar-next-button');
    if (BACK_BUTTON) {
      this.renderer.listen(BACK_BUTTON, 'click', () => {
        const month = this.calendarDate.getMonth() as number;
        if (month === 0) {
          this.calendarDate.setFullYear(this.calendarDate.getFullYear() - 1);
          this.calendarDate.setMonth(11);
        } else {
          this.calendarDate.setMonth(month - 1);
        }
      });
    }
    if (FORWARD_BUTTON) {
      this.renderer.listen(FORWARD_BUTTON, 'click', () => {
        const month = this.calendarDate.getMonth() as number;
        if (month === 11) {
          this.calendarDate.setFullYear(this.calendarDate.getFullYear() + 1);
          this.calendarDate.setMonth(0);
        } else {
          this.calendarDate.setMonth(month + 1);
        }
      });
    }

    const addEventListener = (button) => {
      this.renderer.listen(button, 'click', () => {
        if (button === '.mat-calendar-previous-button' && this.calendarDate.getMonth() === 0) {
          this.calendarDate.setFullYear(this.calendarDate.getFullYear() - 1);
          this.calendarDate.setMonth(11);
        } else {
          this.calendarDate.setMonth(this.calendarDate.getMonth() - 1);
        }
      });
    };
  }

  /* -- Component functions -- */
  dateClass(): (date: Date) => MatCalendarCellCssClasses {
    return (date: Date): MatCalendarCellCssClasses => {
      const highlightDate = this.allExams?.map(strDate => new Date(strDate.date))
        .some(d => d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear());
      if (highlightDate) {
        return 'highlighted';
      } else {
        return '';
      }
    };
  }

  disableWeekend(d: Date): Date {
    if (d.getDay() !== 0 && d.getDay() !== 6) {
      return d;
    }
  }

}
