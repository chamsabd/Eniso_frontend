import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';

import { takeWhile } from 'rxjs/operators' ;


interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
  number:number
}
@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {

  private alive = true;
   //statusCards =[{title:"Students Number",iconClass:"people-outline",number:"500"},{title:"Profs Number",iconClass:"people-outline",number:"200"},{title:"Admins Number",iconClass:"people-outline",number:"10"},{title:"Subjects Number",iconClass:"book-outline",number:"300"}]

 
  lightCard: CardSettings = {
    title: 'Students Number',
    iconClass: 'people-outline',
    type: 'primary',
    number: 500
  };
  rollerShadesCard: CardSettings = {
    title: 'Profs Number',
    iconClass: 'people-outline',
    type: 'success',
    number: 200
  };
  wirelessAudioCard: CardSettings = {
    title: 'Admins Number',
    iconClass: 'people-outline',
    type: 'info',
    number:10
  };
  coffeeMakerCard: CardSettings = {
    title: 'Subjects Number',
    iconClass: 'book-outline',
    type: 'warning',
    number:300
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.lightCard,
    this.rollerShadesCard,
    this.wirelessAudioCard,
    this.coffeeMakerCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.lightCard,
        type: 'warning',
      },
      {
        ...this.rollerShadesCard,
        type: 'primary',
      },
      {
        ...this.wirelessAudioCard,
        type: 'danger',
      },
      {
        ...this.coffeeMakerCard,
        type: 'info',
      },
    ],
    dark: this.commonStatusCardsSet,
  };


   
  constructor(private themeService: NbThemeService
    ) {
      this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
    });


}
  ngOnDestroy() {
    this.alive = false;
  }
}
