import { Action } from '@ngrx/store';

export enum ZipcodeActionTypes {
  AddZipcodes = '[Zipcode] Add Zipcodes',
  RemoveZipcodes = '[Zipcode] Remove Zipcodes'
}

export class AddZipcode implements Action {
  readonly type = ZipcodeActionTypes.AddZipcodes;

  constructor(public zipcode: string) {}
}

export class RemoveZipcode implements Action {
  readonly type = ZipcodeActionTypes.RemoveZipcodes;

  constructor(public zipcode: string) {}
}

export type ZipcodeActions = AddZipcode | RemoveZipcode;
