import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectCounterState = createFeatureSelector<number>('counter');

export const selectCount = createSelector(selectCounterState, (state) => state);
