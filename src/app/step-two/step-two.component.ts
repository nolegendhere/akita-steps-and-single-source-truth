import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AkitaNgFormsManager} from '@datorama/akita-ng-forms-manager';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit, OnDestroy {
  form: FormGroup;

  constructor(private builder: FormBuilder,
              private formsManager: AkitaNgFormsManager<any>) {
  }

  ngOnInit() {
    this.form = this.builder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required]
    });

    this.formsManager.upsert('stepTwo', this.form);
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe();
  }

}
