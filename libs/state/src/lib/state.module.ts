import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTweets from './tweets/tweets.reducer';
import { TweetsEffects } from './tweets/tweets.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTweets.TWEETS_FEATURE_KEY, fromTweets.reducer),
    EffectsModule.forFeature([TweetsEffects]),
  ],
})
export class StateModule {}
