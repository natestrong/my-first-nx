import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromTweets from './tweets.reducer';
import * as TweetsActions from './tweets.actions';

@Injectable()
export class TweetsEffects {
  loadTweets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TweetsActions.loadTweets),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return TweetsActions.loadTweetsSuccess({ tweets: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return TweetsActions.loadTweetsFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
