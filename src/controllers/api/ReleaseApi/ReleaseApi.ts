import RestApi from '../RestApi';
import { ReleaseType } from 'types/release.types';

/**
 * Release API controller
 */
class ReleaseApi extends RestApi<ReleaseType> {
  constructor() {
    super({ endpoint: 'release' });
  }

  /**
   * Get release
   *
   * @return {Promise}
   */
  get(id: string) {
    return this.sendGet(id, { params: { fmt: 'json' } });
  }
}

export default ReleaseApi;
