import { Component, OnInit } from '@angular/core';
import { keyBoardShortCuts } from 'src/app/shared/constants/constants';
@Component({
     selector: 'app-features',
     templateUrl: './features.component.html',
     styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
     public clipBoard: string = "'far fa-clipboard'";
     public keyShortCuts: any = [];
     // prettier-ignore
     constructor(){
          this.keyShortCuts = keyBoardShortCuts;
     }
     ngOnInit(): void {}
}
