import { Action } from '@ngrx/store';
import { PayloadAction } from '@store/common.action.types';

export function expectAction<T>(
  createAction: (payload?: T) => Action | PayloadAction<T>,
  type: string,
  payload?: T
): void {
  const action = createAction(payload);

  // @ts-ignore
  expect(action.type).toBe(type);
  if (payload) {
    // @ts-ignore
    expect((action as PayloadAction<T>).payload).toBe(payload);
  }
}
