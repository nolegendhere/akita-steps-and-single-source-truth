import {Injectable} from '@angular/core';
import {Query} from '@datorama/akita';
import {DireccionStore, DireccionState} from './direccion.store';

@Injectable({providedIn: 'root'})
export class DireccionQuery extends Query<DireccionState> {

  constructor(protected store: DireccionStore) {
    super(store);
  }

  getDireccion() {
    return this.select();
  }
}
