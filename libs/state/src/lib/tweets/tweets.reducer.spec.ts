import { TweetsEntity } from './tweets.models';
import * as TweetsActions from './tweets.actions';
import { State, initialState, reducer } from './tweets.reducer';

describe('Tweets Reducer', () => {
  const createTweetsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as TweetsEntity);

  beforeEach(() => {});

  describe('valid Tweets actions', () => {
    it('loadTweetsSuccess should return set the list of known Tweets', () => {
      const tweets = [
        createTweetsEntity('PRODUCT-AAA'),
        createTweetsEntity('PRODUCT-zzz'),
      ];
      const action = TweetsActions.loadTweetsSuccess({ tweets });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
