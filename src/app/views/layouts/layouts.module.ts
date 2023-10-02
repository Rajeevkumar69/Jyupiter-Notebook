import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { HomeComponent } from '../main/home/home.component';
import { PartialsModule } from '../main/partials/partials.module';
import { FeaturesComponent } from '../main/features/features.component';

// prettier-ignore
@NgModule({
     declarations: [
          LayoutsComponent,
          HomeComponent,
          FeaturesComponent
     ],
     imports: [
          CommonModule,
          LayoutsRoutingModule,
          PartialsModule,
     ]
})
export class LayoutsModule {}
