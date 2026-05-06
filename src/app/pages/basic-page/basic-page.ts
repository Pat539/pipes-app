import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import {  Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { availableLocale, Locale } from '../../services/locale';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe,UpperCasePipe,TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage {

  localeService = inject(Locale);
  currentLocale = signal( inject(LOCALE_ID));
  nameLower = signal('patsy');
  nameUpper = signal('PATSY');
  Fullname = signal('PatSY PeLaYo');

  customDate = signal( new Date());

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tik');
    },1000);
    onCleanup(()=> { // esto es para destruir el efecto
      clearInterval(interval);
    });
  });

  changeLocale(locale: availableLocale){
    console.log({ locale });
    this.localeService.changeLocale(locale);
  }

}
