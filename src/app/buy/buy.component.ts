import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {combineLatest, Observable} from 'rxjs';
import {AkitaNgFormsManager} from '@datorama/akita-ng-forms-manager';
import {map, startWith, tap} from 'rxjs/operators';

const steps = ['stepOne', 'stepTwo', 'stepThree'];

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit, OnDestroy {
  form: FormGroup;
  isFormValid$: Observable<boolean>;

  constructor(private formsManager: AkitaNgFormsManager<any>) {
  }

  ngOnInit() {
    const stepsValidity$ = steps.map(step => {
      return this.formsManager
        .selectValid(step)
        .pipe(startWith(false));
    });

    this.isFormValid$ = combineLatest(...stepsValidity$).pipe(
      map((stepsValidity) => stepsValidity.every(Boolean)),
    );
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe();
  }

}
