
export const getWeekday = (date: string) => {
    const dateObj = new Date(date);
    const weekdays = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
    return weekdays[dateObj.getDay() - 1];
};
