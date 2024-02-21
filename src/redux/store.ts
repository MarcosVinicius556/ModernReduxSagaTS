import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import logger from "redux-logger";


import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const applicationStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware, logger)
});

sagaMiddleware.run(rootSaga);

export default applicationStore;
