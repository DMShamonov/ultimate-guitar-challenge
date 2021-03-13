import Axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

import DataAdapter from 'adapters/DataAdapter';
import { Methods, OptionsType } from './RestApi.types';

/**
 * Rest API controller
 */
class RestApi<ResponseData extends {} = {}> {
  private axios: AxiosInstance;
  private readonly endpoint: string;
  private readonly callbacks: {
    onsuccess(response: AxiosResponse<ResponseData>): void;
    onerror(error: AxiosError): void;
  };

  constructor(settings = {}) {
    const defaultSettings = {
      type: '',
      callbacks: {
        onsuccess: () => {},
        onerror: () => {},
      },
    };

    const { callbacks, endpoint, ...options } = DataAdapter.merge(
      defaultSettings,
      settings
    );

    this.callbacks = callbacks;
    this.endpoint = endpoint;

    this.axios = Axios.create(
      DataAdapter.merge(
        {},
        {
          baseURL: `/api/${this.endpoint}/`,
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
  public sendPost<TData extends Record<string, any> = {}>(
    url: string,
    data: TData
  ) {
    return this.request(url, Methods.POST, { data });
  }

  /**
   * Send GET request
   *
   * @param {String} url
   * @param {Object} options
   * @return {Promise}
   */
  public sendGet(url: string, options: OptionsType = {}) {
    return this.request(url, Methods.GET, options);
  }

  /**
   * Send PATCH request
   *
   * @param {String} url
   * @param {Object} data
   * @param {Object} options
   * @return {Promise}
   */
  public sendPatch<TData extends Record<string, any> = {}>(
    url: string,
    data: TData,
    options: OptionsType = {}
  ) {
    return this.request(url, Methods.PATCH, { data, ...options });
  }

  /**
   * Send DELETE request
   *
   * @param {String} url
   * @param {Object} options
   * @return {Promise}
   */
  sendDelete(url: string, options: OptionsType = {}) {
    return this.request(url, Methods.DELETE, options);
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
  private request(url: string, method: Methods, options: OptionsType = {}) {
    return this.axios
      .request<ResponseData>({ url, method, ...options })
      .then((response) => {
        this.callbacks.onsuccess(response);

        return response;
      })
      .catch((error) => {
        this.callbacks.onerror(error);

        return Promise.reject(error);
      });
  }
}

export default RestApi;
