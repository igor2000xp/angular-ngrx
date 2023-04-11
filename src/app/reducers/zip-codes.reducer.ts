import { ZipcodeActions, ZipcodeActionTypes } from '../actions/zipcode.actions';


export interface ZipCodesState {
  zipcodes: string[];
}

export const initialState: ZipCodesState = {
  zipcodes: [],
};

export function ZipCodeReducer(state = initialState, action: ZipcodeActions): ZipCodesState {
  switch (action.type) {
    case ZipcodeActionTypes.AddZipcodes:
      return {
      ...state,
        zipcodes: [...state.zipcodes, action.zipcode],
      };

    case ZipcodeActionTypes.RemoveZipcodes:
      return {
      ...state,
        zipcodes: state.zipcodes.filter(zipcode => zipcode!== action.zipcode),
      };

    default:
      return state;
  }
}
