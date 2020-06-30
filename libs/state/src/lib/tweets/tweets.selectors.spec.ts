import { TweetsEntity } from './tweets.models';
import { State, tweetsAdapter, initialState } from './tweets.reducer';
import * as TweetsSelectors from './tweets.selectors';

describe('Tweets Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getTweetsId = (it) => it['id'];
  const createTweetsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as TweetsEntity);

  let state;

  beforeEach(() => {
    state = {
      tweets: tweetsAdapter.addAll(
        [
          createTweetsEntity('PRODUCT-AAA'),
          createTweetsEntity('PRODUCT-BBB'),
          createTweetsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Tweets Selectors', () => {
    it('getAllTweets() should return the list of Tweets', () => {
      const results = TweetsSelectors.getAllTweets(state);
      const selId = getTweetsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = TweetsSelectors.getSelected(state);
      const selId = getTweetsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getTweetsLoaded() should return the current 'loaded' status", () => {
      const result = TweetsSelectors.getTweetsLoaded(state);

      expect(result).toBe(true);
    });

    it("getTweetsError() should return the current 'error' state", () => {
      const result = TweetsSelectors.getTweetsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
