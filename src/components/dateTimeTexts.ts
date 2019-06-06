import moment from 'moment';

export class DateTimeTexts {

  public static getInstance(): DateTimeTexts {
    if (!DateTimeTexts.instance) {
      DateTimeTexts.instance = new DateTimeTexts();
    }
    const newLang = moment.locale();
    if (DateTimeTexts.instance.lang !== newLang) {
      DateTimeTexts.instance.lang = moment.locale();
      DateTimeTexts.instance.updateLanguage();
    }
    return DateTimeTexts.instance;
  }

  private static instance: DateTimeTexts;

  public lang: string = 'en';
  public today: string = 'Today';
  public clear: string = 'Clear';
  public close: string = 'Close';
  public selectDate: string = 'Select a date';
  public selectMonth: string = 'Select a month';
  public prevMonth: string = 'Previous month';
  public nextMonth: string = 'next Month';
  public selectYear: string = 'Select a year';
  public prevYear: string = 'Previous year';
  public nextYear: string = 'Next year';
  public selectDecade: string = 'Select a decade';
  public prevDecade: string = 'Previous decade';
  public nextDecade: string = 'Next decade';
  public selectCentury: string = 'Select a century';
  public prevCentury: string = 'Previous century';
  public nextCentury: string = 'Next century';
  public pickHour: string = 'Pick an hour';
  public incrementHour: string = 'Increment hour';
  public decrementHour: string = 'Decrement hour';
  public pickMinute: string = 'Pick a minute';
  public incrementMinute: string = 'Increment minute';
  public decrementMinute: string = 'Decrement minute';
  public pickSecond: string = 'Pick a second';
  public incrementSecond: string = 'Increment second';
  public decrementSecond: string = 'Decrement second';
  public togglePeriod: string = 'Toogle period';
  public selectTime: string = 'Select time';

  private constructor() {
  }
  private updateLanguage() {
    switch (this.lang) {
      case 'en':
        this.today = 'Today';
        this.clear = 'Clear';
        this.close = 'Close';
        this.selectDate = 'Select a date';
        this.selectMonth = 'Select a month';
        this.prevMonth = 'Previous month';
        this.nextMonth = 'Next Month';
        this.selectYear = 'Select a year';
        this.prevYear = 'Previous year';
        this.nextYear = 'Next year';
        this.selectDecade = 'Select a decade';
        this.prevDecade = 'Previous decade';
        this.nextDecade = 'Next decade';
        this.selectCentury = 'Select a century';
        this.prevCentury = 'Previous century';
        this.nextCentury = 'Next century';
        this.pickHour = 'Pick an hour';
        this.incrementHour = 'Increment hour';
        this.decrementHour = 'Decrement hour';
        this.pickMinute = 'Pick a minute';
        this.incrementMinute = 'Increment minute';
        this.decrementMinute = 'Decrement minute';
        this.pickSecond = 'Pick a second';
        this.incrementSecond = 'Increment second';
        this.decrementSecond = 'Decrement second';
        this.togglePeriod = 'Toogle period';
        this.selectTime = 'Select time';
        break;
      case 'fr':
        this.today = 'Aujourd\'hui';
        this.clear = 'Effacer';
        this.close = 'Fermer';
        this.selectDate = 'Choisir une date';
        this.selectMonth = 'Choisir un mois';
        this.prevMonth = 'Mois précédent';
        this.nextMonth = 'Mois suivant';
        this.selectYear = 'Choisir une année';
        this.prevYear = 'Année précédente';
        this.nextYear = 'Année suivant';
        this.selectDecade = 'Choisir une décennie';
        this.prevDecade = 'Décennie précédente';
        this.nextDecade = 'Décennie suivante';
        this.selectCentury = 'Choisir un siècle';
        this.prevCentury = 'Siècle précédent';
        this.nextCentury = 'Siècle suivant';
        this.pickHour = 'Choisir une heure';
        this.incrementHour = 'Incrémenter l\'heure';
        this.decrementHour = 'décrémenter hour';
        this.pickMinute = 'Choisir les minutes';
        this.incrementMinute = 'Incrémenter les minutes';
        this.decrementMinute = 'Décrémenter minute';
        this.pickSecond = 'Choisir les secondes';
        this.incrementSecond = 'Incrémenter les secondes';
        this.decrementSecond = 'Décrémenter les secondes';
        this.togglePeriod = 'Basculer la période';
        this.selectTime = 'Choisir l\'heure';
        break;
    }
  }
}
