import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ZipCodeReducer, ZipcodeState } from './zip-codes.reducer';

export interface State {
  zipcodes: ZipcodeState;
}

export const reducers: ActionReducerMap<State> = {
  zipcodes: ZipCodeReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
