import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DireccionQuery, DireccionState} from './direccion';
import {filter} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AkitaNgFormsManager} from '@datorama/akita-ng-forms-manager';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css']
})
export class StepThreeComponent implements OnInit {
  direccion$: Observable<DireccionState>;
  form: FormGroup;

  constructor(private direccionQuery: DireccionQuery, private builder: FormBuilder,
              private formsManager: AkitaNgFormsManager<any>) {
  }

  ngOnInit() {
    this.form = this.builder.group({
      street: ['', Validators.required]
    });
    this.formsManager.upsert('stepThree', this.form);
    this.direccion$ = this.direccionQuery.getDireccion()
      .pipe(
        filter(Boolean)
      );

    this.direccion$.subscribe((direccion: DireccionState) => {
      this.form = this.builder.group({
        key: [direccion.key, Validators.required]
      });
      this.formsManager.upsert('stepThree', this.form);
    });
  }

}
