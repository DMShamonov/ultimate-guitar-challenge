import LocalStorageController from 'controllers/LocalStorage';

const keepStateMiddleware = store => next => async (action) => {
  await next(action);
  new LocalStorageController().setItem('state', JSON.stringify(store.getState()));
};

export default keepStateMiddleware;
