import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * Connect to store decorator
 * Uses connect() react-redux function for subscribe component to store (or specify areas in store)
 * and passed redux dispatch method (or custom actions) to component
 * https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
 *
 * @param {function|null} mapStateToProps
 * @param {function|Object} mapDispatchToProps
 * @return {function(*=)}
 */
const connectToStore = (
  mapStateToProps = (state, ownProps) => ({ state, ownProps }),
  mapDispatchToProps = dispatch => ({ dispatch }),
) => Wrapped => withRouter(connect(mapStateToProps, mapDispatchToProps)(Wrapped));

export default connectToStore;
