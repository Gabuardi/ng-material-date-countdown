import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-material-date-countdown';
  currentDate = new Date();
  startDate = new Date().setMinutes(this.currentDate.getMinutes() - 1);
  endDate = new Date().setMinutes(this.currentDate.getMinutes() + 1);

}
