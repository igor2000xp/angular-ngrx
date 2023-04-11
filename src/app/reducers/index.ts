import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ZipCodeReducer, ZipCodesState } from './zip-codes.reducer';

export interface State {
  zipcodes: ZipCodesState;
}

export const reducers: ActionReducerMap<State> = {
  zipcodes: ZipCodeReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
