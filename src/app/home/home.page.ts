import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  time;

  hourMinute = new Intl.DateTimeFormat('de-DE', {
    hour: '2-digit'
  });
  constructor() {}

  format(date: string) {
    if (date) {
      const options = this.hourMinute.resolvedOptions();
      console.log(options);
      return this.hourMinute.format(new Date(date));
    }
  }
}
