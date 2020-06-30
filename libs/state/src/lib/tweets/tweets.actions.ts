import { createAction, props } from '@ngrx/store';
import { TweetsEntity } from './tweets.models';

export const loadTweets = createAction('[Tweets] Load Tweets');

export const loadTweetsSuccess = createAction(
  '[Tweets] Load Tweets Success',
  props<{ tweets: TweetsEntity[] }>()
);

export const loadTweetsFailure = createAction(
  '[Tweets] Load Tweets Failure',
  props<{ error: any }>()
);
