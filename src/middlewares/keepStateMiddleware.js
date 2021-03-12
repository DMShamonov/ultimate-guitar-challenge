import _reduce from 'lodash/reduce';

import LocalStorageController from 'controllers/LocalStorage';

export default function keepStateMiddleware(excludes = []) {
  const localStorage = new LocalStorageController();

  return (store) => (next) => async (action) => {
    await next(action);

    const state = _reduce(
      store.getState(),
      (acc, v, k) =>
        !excludes.includes(k)
          ? {
              ...acc,
              [k]: v,
            }
          : acc,
      {}
    );

    localStorage.setItem('state', JSON.stringify(state));
  };
}
