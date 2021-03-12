/**
 * Controller for working with window.localStorage object
 */
class LocalStorage {
  constructor() {
    this.storage = localStorage;
  }

  /**
   * Get value from local storage
   *
   * @param {String} key Local storage item name
   * @return {*}
   */
  getItem(key) {
    return this.storage.getItem(key);
  }

  /**
   * Save value in local storage
   *
   * @param {String} key Local storage item name
   * @param {String} value Value for save
   * @return {*}
   */
  setItem(key, value) {
    return this.storage.setItem(key, value);
  }
}

export default LocalStorage;
