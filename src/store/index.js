import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMIddleWare from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const logger = createLogger();
const saga = createSagaMIddleWare();

const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(saga, logger)
)

saga.run(rootSaga);

export default store;
