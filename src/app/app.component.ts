import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NinjaGold';
  totalGold: number;
  activities: string[];
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getHomeFromService();
    this.totalGold = 0;
    this.activities = [];
  }

  getHomeFromService() {
    const homePage = this._httpService.getHomePage();
    homePage.subscribe(data => console.log('hello'));
  }

  onClickCasino() {
    const random = Math.round(Math.random() * 50);
    const sign = Math.round(Math.random());
    if (sign) {
      this.totalGold += random;
      this.activities.push(`Earned ${random} golds from the Casino!`);
    } else {
      this.totalGold -= random;
      this.activities.push(`Lost ${random} golds from the Casino!`);
    }
  }

  onClickFarm() {
    const random = Math.round(Math.random() * 10 + 10);
    this.totalGold += random;
    this.activities.push(`Earned ${random} golds from the Farm!`);
  }

  onClickHouse() {
    const random = Math.round(Math.random() * 2 + 3);
    this.totalGold += random;
    this.activities.push(`Earned ${random} golds from the House!`);
  }

  onClickCave() {
    const random = Math.round(Math.random() * 5 + 5);
    this.totalGold += random;
    this.activities.push(`Earned ${random} golds from the Cave!`);
  }
}
