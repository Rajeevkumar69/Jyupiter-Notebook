import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { HomeComponent } from '../main/home/home.component';
import { FeaturesComponent } from '../main/features/features.component';

const routes: Routes = [
     {
          path: '',
          component: LayoutsComponent,
          children: [
               {
                    path: '',
                    component: HomeComponent,
                    pathMatch: 'full'
               },
               {
                    path: 'home',
                    component: HomeComponent
               },
               {
                    path: 'features',
                    component: FeaturesComponent
               }
          ]
     }
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]
})
export class LayoutsRoutingModule {}
