import _isArray from 'lodash/isArray';
import _mergeWith from 'lodash/mergeWith';

/**
 * Data adapter controller
 */
class DataAdapter {
  /**
   * Correct merge objects that contains array values
   *
   * @param {object} object
   * @param {object} sources
   */
  static merge(object, ...sources) {
    return _mergeWith(object, ...sources, (objValue, srcValue) =>
      _isArray(objValue) ? objValue.concat(srcValue) : undefined
    );
  }
}

export default DataAdapter;
