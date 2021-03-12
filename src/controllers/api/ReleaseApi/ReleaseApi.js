import RestApi from '../RestApi';

/**
 * Release API controller
 */
class ReleaseApi extends RestApi {
  constructor(options) {
    super(options);

    this._endpoint = 'release';
  }

  /**
   * Get release
   *
   * @return {Promise}
   */
  get(id) {
    return this.sendGet(`${this._endpoint}/${id}`, { params: { fmt: 'json' } });
  }
}

export default ReleaseApi;
