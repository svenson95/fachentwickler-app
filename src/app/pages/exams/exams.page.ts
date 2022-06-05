import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import {
  MatCalendar,
  MatCalendarCellCssClasses,
} from '@angular/material/datepicker';
import { ExamDate } from '../../models/exam-date';
import { DataService } from '../../services/data/data.service';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'fe-exams',
  templateUrl: './exams.page.html',
  styleUrls: ['./exams.page.scss'],
})
export class ExamsPage implements OnInit, AfterViewInit {
  @ViewChild('calendar') public calendar: MatCalendar<Date>;

  public allExams: ExamDate[];

  public calendarDate = new Date();

  public minDate = new Date(2019, 8, 1);

  public maxDate = new Date(2022, 9, 30);

  public get monthExams(): ExamDate[] {
    return this.allExams?.filter((exam) => {
      const date = new Date(exam.date);
      return (
        date.getFullYear() === this.calendarDate.getFullYear() &&
        date.getMonth() === this.calendarDate.getMonth()
      );
    });
  }

  constructor(
    private headerService: HeaderService,
    private dataService: DataService,
    private renderer: Renderer2,
    private dateAdapter: DateAdapter<Date>,
    private elementRef: ElementRef,
  ) {
    this.headerService.setPageTitle('Klausuren');
    this.dateAdapter.getFirstDayOfWeek = (): number => 1;
  }

  public ngOnInit(): void {
    this.fetchData();
  }

  public ngAfterViewInit(): void {
    this.initializeCalendarButtons();
  }

  private fetchData(): void {
    this.dataService.getAllExamDates().subscribe(
      (response) => {
        response.sort((a, b) => {
          if (a.date > b.date) {
            return 1;
          }
          if (a.date < b.date) {
            return -1;
          }
          return 0;
        });
        this.allExams = response;
      },
      () => {
        this.allExams = null;
      },
    );
  }

  private initializeCalendarButtons(): void {
    const BACK_BUTTON = this.elementRef.nativeElement.querySelector(
      '.mat-calendar-previous-button',
    );
    const FORWARD_BUTTON = this.elementRef.nativeElement.querySelector(
      '.mat-calendar-next-button',
    );
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
  }

  public dateClass(): (date: Date) => MatCalendarCellCssClasses {
    return (date: Date): MatCalendarCellCssClasses => {
      const highlightDate = this.allExams
        ?.map((strDate) => new Date(strDate.date))
        .some(
          (d) =>
            d.getDate() === date.getDate() &&
            d.getMonth() === date.getMonth() &&
            d.getFullYear() === date.getFullYear(),
        );
      if (highlightDate) {
        return 'highlighted';
      }
      return '';
    };
  }

  // eslint-disable-next-line class-methods-use-this
  public disableWeekend(d: Date): boolean {
    if (d.getDay() !== 0 && d.getDay() !== 6) {
      return true;
    }
    return false;
  }
}
