import {Component, OnInit, OnDestroy} from '@angular/core';
import {AkitaNgFormsManager} from '@datorama/akita-ng-forms-manager';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit, OnDestroy {
  form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private formsManager: AkitaNgFormsManager<any>) {
  }

  ngOnInit() {
    this.form = this.builder.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.formsManager.upsert('stepOne', this.form).store;
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe();
  }

}
