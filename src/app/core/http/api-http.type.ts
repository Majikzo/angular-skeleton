import { HttpHeaders } from '@angular/common/http';

export interface HttpOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  params?: {
    [param: string]: string | string[];
  };
}
