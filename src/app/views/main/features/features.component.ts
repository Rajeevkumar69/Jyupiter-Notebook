import { Component, OnInit } from '@angular/core';

@Component({
     selector: 'app-features',
     templateUrl: './features.component.html',
     styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
     public clipBoard: string = "'far fa-clipboard'";

     // prettier-ignore
     constructor(){}
     ngOnInit(): void {}
}
