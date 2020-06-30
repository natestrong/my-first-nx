import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetComponent } from './tweet/tweet.component';
import {MaterialModule} from "@my-first-nx/material";

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [TweetComponent],
  exports: [TweetComponent],
})
export class UiModule {}
