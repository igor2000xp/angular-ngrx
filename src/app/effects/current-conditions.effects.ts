import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import { mergeMap, catchError, map } from 'rxjs/operators';
import {AddZipcode, ZipcodeActionTypes} from '../actions/zipcode.actions';
import {WeatherService} from '../weather.service';
import {
  CurrentConditionsActions,
  CurrentConditionsLoaded,
  CurrentConditionsLoadFailed
} from '../actions/current-conditions.actions';


@Injectable()
export class CurrentConditionsEffects {

  constructor(private actions$: Actions<AddZipcode>, private weatherService: WeatherService) {}

    @Effect()
    loadCurrentConditions$: Observable<CurrentConditionsActions> = this.actions$.pipe(
        ofType(ZipcodeActionTypes.AddZipcode),
        mergeMap(action =>
            this.weatherService.loadCurrentConditions(action['zipcode']).pipe(
                // If successful, dispatch success action with result
                map(data => new CurrentConditionsLoaded(action['zipcode'], data)),
                // If request fails, dispatch failed action
                catchError((err) => of(new CurrentConditionsLoadFailed(action['zipcode'], err)))
            )
        )
    );
}
