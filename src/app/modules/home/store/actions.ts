import { createAction } from '@ngrx/store';
import { LoadActionSuccessPayload } from './action.types';
import { payloadProps } from '@store/common.action.creators';

export const LoadAction = createAction('LOAD_ACTION');

export const LoadActionSuccess = createAction(
  'LOAD_ACTION_SUCCESS',
  payloadProps<LoadActionSuccessPayload>()
);

export const LoadActionFail = createAction('LOAD_ACTION_FAIL');
