import {Injectable} from '@angular/core';
import {DireccionStore} from './direccion.store';
import {DireccionQuery} from './direccion.query';

@Injectable({ providedIn: 'root' })
export class DireccionService {
  constructor(private direccionStore: DireccionStore, private direccionQuery: DireccionQuery) {
  }
}
