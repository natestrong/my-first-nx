import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as TweetsActions from './tweets.actions';
import { TweetsEntity } from './tweets.models';

export const TWEETS_FEATURE_KEY = 'tweets';

export interface State extends EntityState<TweetsEntity> {
  selectedId?: string | number; // which Tweets record has been selected
  loaded: boolean; // has the Tweets list been loaded
  error?: string | null; // last none error (if any)
}

export interface TweetsPartialState {
  readonly [TWEETS_FEATURE_KEY]: State;
}

export const tweetsAdapter: EntityAdapter<TweetsEntity> = createEntityAdapter<
  TweetsEntity
>();

export const initialState: State = tweetsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const tweetsReducer = createReducer(
  initialState,
  on(TweetsActions.loadTweets, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(TweetsActions.loadTweetsSuccess, (state, { tweets }) =>
    tweetsAdapter.addAll(tweets, { ...state, loaded: true })
  ),
  on(TweetsActions.loadTweetsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return tweetsReducer(state, action);
}
