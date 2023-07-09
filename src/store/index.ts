import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import repositoriesSlice from "./repositories/repositoriesSlice";
import repositoriesSaga from "./sagas/repositoriesSaga";

let sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    repositories: repositoriesSlice.reducer,
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(repositoriesSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
