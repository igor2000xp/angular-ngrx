import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { AddZipcode, ZipcodeActionTypes } from '../actions/zipcode.actions';
import { WeatherService } from '../weather.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CurrentConditionsLoadFailed } from '../actions/current-conditions.actions';


@Injectable()
export class CurrentConditionsEffects {

  @Effect()
  loadCurrentConditions$: Observable<any> = this.actions$.pipe(
    ofType(ZipcodeActionTypes.AddZipcode),
    mergeMap(action =>
      this.weatherService.loadCurrentConditions(action['zipcode']).pipe(
        map(data => new CurrentConditionsLoadFailed(action['zipcode'], data)),
        catchError(err => of(new CurrentConditionsLoadFailed(action['zipcode'], err)))
      )
    ),

  )

  constructor(private actions$: Actions<AddZipcode>, private weatherService: WeatherService) {}
}
