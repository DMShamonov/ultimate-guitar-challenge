import { Dispatch } from 'redux';

import type { ReleaseType } from 'types/release.types';

export interface ReleasesPagePropsType {
  dispatch: Dispatch;
  releases: ReleaseType[];
}

export interface ReleasesPageStateType {
  search?: string;
}
