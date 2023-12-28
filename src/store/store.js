import logger from 'redux-logger'
import { legacy_createStore , applyMiddleware } from 'redux'
import { reducers } from "./reducers/index"


const middleware = applyMiddleware(logger);

export const store = legacy_createStore(reducers, middleware);