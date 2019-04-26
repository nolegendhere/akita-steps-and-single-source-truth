import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StepOneComponent} from './step-one/step-one.component';
import {StepTwoComponent} from './step-two/step-two.component';
import {StepThreeComponent} from './step-three/step-three.component';
import {BuyComponent} from './buy/buy.component';
import {EditInfoComponent} from './edit-info/edit-info.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/buy/step-one',
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
  {path: '**', component: BuyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
