import { Action } from '@ngrx/store';
import { ZipcodeActions, ZipcodeActionTypes } from '../actions/zipcode.actions';


export interface ZipcodeState {
  zipcodes: string[];
}

export const initialState: ZipcodeState = {
  zipcodes: [],
};

export function ZipCodeReducer(state = initialState, action: ZipcodeActions): ZipcodeState {
  switch (action.type) {
    case ZipcodeActionTypes.AddZipcode:
      return { ...state, zipcodes: [...state.zipcodes, action.zipcode] };

    case ZipcodeActionTypes.RemoveZipcodes:
      return { ...state, zipcodes: state.zipcodes.filter(zip => zip !== action.zipcode) };

    default:
      return state;
  }
}
