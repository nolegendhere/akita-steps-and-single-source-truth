import {Injectable} from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface DireccionState {
  key: string;
}

export function createInitialState(): DireccionState {
  return {
    key: 'first address'
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'direccion' })
export class DireccionStore extends Store<DireccionState> {

  constructor() {
    super(createInitialState());
  }

}

