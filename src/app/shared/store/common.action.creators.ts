import { props } from '@ngrx/store';
import { Props } from '@ngrx/store/src/models';

export function payloadProps<T>(): Props<{ payload: T }> {
  return props<{ payload: T }>();
}
