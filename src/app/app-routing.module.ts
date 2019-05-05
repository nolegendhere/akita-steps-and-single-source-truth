import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StepOneComponent} from './step-one/step-one.component';
import {StepTwoComponent} from './step-two/step-two.component';
import {StepThreeComponent} from './step-three/step-three.component';
import {BuyComponent} from './buy/buy.component';
import {EditInfoComponent} from './edit-info/edit-info.component';
import { DatePickerTrialComponent } from './date-picker-trial/date-picker-trial.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'date-picker-example',
    pathMatch: 'full'
  },
  {
    path: 'edit-info',
    component: EditInfoComponent
  },
  {
    path: 'buy',
    component: BuyComponent,
    children: [
      {
        path: 'step-one',
        component: StepOneComponent
      },
      {
        path: 'step-two',
        component: StepTwoComponent
      },
      {
        path: 'step-three',
        component: StepThreeComponent
      }
    ]
  },
  {
    path: 'date-picker-example',
    component: DatePickerTrialComponent
  },
  {path: '**', component: DatePickerTrialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
