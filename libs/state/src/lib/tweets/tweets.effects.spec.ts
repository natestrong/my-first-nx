import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { TweetsEffects } from './tweets.effects';
import * as TweetsActions from './tweets.actions';

describe('TweetsEffects', () => {
  let actions: Observable<any>;
  let effects: TweetsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        TweetsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(TweetsEffects);
  });

  describe('loadTweets$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: TweetsActions.loadTweets() });

      const expected = hot('-a-|', {
        a: TweetsActions.loadTweetsSuccess({ tweets: [] }),
      });

      expect(effects.loadTweets$).toBeObservable(expected);
    });
  });
});
