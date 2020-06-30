import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetComponent } from './tweet/tweet.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TweetComponent],
  exports: [TweetComponent],
})
export class UiModule {}
