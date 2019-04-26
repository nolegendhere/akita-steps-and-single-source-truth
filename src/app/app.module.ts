import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {AkitaNgRouterStoreModule} from '@datorama/akita-ng-router-store';
import {environment} from '../environments/environment';
import {StepOneComponent} from './step-one/step-one.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {StepTwoComponent} from './step-two/step-two.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StepThreeComponent } from './step-three/step-three.component';
import { BuyComponent } from './buy/buy.component';
import { EditInfoComponent } from './edit-info/edit-info.component';

@NgModule({
  declarations: [
    AppComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    BuyComponent,
    EditInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    environment.production ?
      [] :
      [AkitaNgDevtools.forRoot(), AkitaNgRouterStoreModule.forRoot()]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
