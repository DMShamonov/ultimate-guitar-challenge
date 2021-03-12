import axios from 'axios';

import DataAdapter from 'adapters/DataAdapter';

/**
 * Rest API controller
 */
class RestApi {
  constructor(settings = {}) {
    const defaultSettings = {
      type: '',
      callbacks: {
        onsuccess: () => {},
        onerror: () => {},
      },
    };

    const { callbacks, type, ...options } = DataAdapter.merge(
      defaultSettings,
      settings
    );

    this._callbacks = callbacks;
    this._type = type;

    this._axios = axios.create(
      DataAdapter.merge(
        {},
        {
          baseURL: `/api/${this._type}`,
          headers: {
            'Content-Type': 'application/json',
          },
        },
        options
      )
    );
  }

  /**
   * Send POST request
   *
   * @param {String} url
   * @param {Object} data
   * @return {Promise}
   */
  sendPost(url, data = {}) {
    return this._request(url, 'post', { data });
  }

  /**
   * Send GET request
   *
   * @param {String} url
   * @param {Object} options
   * @return {Promise}
   */
  sendGet(url, options = {}) {
    return this._request(url, 'get', options);
  }

  /**
   * Send PATCH request
   *
   * @param {String} url
   * @param {Object} data
   * @param {Object} options
   * @return {Promise}
   */
  sendPatch(url, data, options = {}) {
    return this._request(url, 'patch', { data, ...options });
  }

  /**
   * Send DELETE request
   *
   * @param {String} url
   * @param {Object} options
   * @return {Promise}
   */
  sendDelete(url, options = {}) {
    return this._request(url, 'delete', options);
  }

  /**
   * Send request
   *
   * @param {String} url
   * @param {String} method
   * @param {Object} options
   * @return {Promise}
   * @private
   */
  _request(url, method, options = {}) {
    return this._axios
      .request({ url, method, ...options })
      .then((response) => {
        this._callbacks.onsuccess(response);

        return response;
      })
      .catch((error) => {
        this._callbacks.onerror(error);

        return Promise.reject(error);
      });
  }
}

export default RestApi;
