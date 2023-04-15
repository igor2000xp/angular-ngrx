import { Action } from '@ngrx/store';

export enum ZipcodeActionTypes {
  AddZipcode = '[Zipcode] Add Zipcode',
  RemoveZipcodes = '[Zipcode] Remove Zipcodes',
}

export class AddZipcode implements Action {
  readonly type = ZipcodeActionTypes.AddZipcode;

  constructor(public zipcode: string) {};
}

export class RemoveZipcode implements Action {
  readonly type = ZipcodeActionTypes.RemoveZipcodes;

  constructor(public zipcode: string) {};
}

export type ZipcodeActions = AddZipcode | RemoveZipcode;
