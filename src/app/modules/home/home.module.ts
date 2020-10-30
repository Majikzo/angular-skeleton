import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { Effects, Reducer } from '@home/store';
import { EffectsModule } from '@ngrx/effects';
import { PAGES } from '@home/pages';
import { COMPONENTS } from '@home/components';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('home', Reducer),
    EffectsModule.forFeature([Effects]),
  ],
  declarations: [...PAGES, ...COMPONENTS],
})
export class HomeModule {}
