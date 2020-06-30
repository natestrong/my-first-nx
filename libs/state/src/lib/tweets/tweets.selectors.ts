import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  TWEETS_FEATURE_KEY,
  State,
  TweetsPartialState,
  tweetsAdapter,
} from './tweets.reducer';

// Lookup the 'Tweets' feature state managed by NgRx
export const getTweetsState = createFeatureSelector<TweetsPartialState, State>(
  TWEETS_FEATURE_KEY
);

const { selectAll, selectEntities } = tweetsAdapter.getSelectors();

export const getTweetsLoaded = createSelector(
  getTweetsState,
  (state: State) => state.loaded
);

export const getTweetsError = createSelector(
  getTweetsState,
  (state: State) => state.error
);

export const getAllTweets = createSelector(getTweetsState, (state: State) =>
  selectAll(state)
);

export const getTweetsEntities = createSelector(
  getTweetsState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getTweetsState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getTweetsEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
