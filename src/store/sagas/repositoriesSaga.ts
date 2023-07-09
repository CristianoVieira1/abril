import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import API from "../../services/axios";
import repositoriesSlice from "../repositories/repositoriesSlice";
import { IRepositoriesResponseDTO } from "./repositoriesTypes";

function* fetchRepositories(action: PayloadAction<string>) {
  const filterValue = action.payload;
  try {
    const response: AxiosResponse<IRepositoriesResponseDTO> = yield call(
      API.get,
      `repositories?q=${filterValue}&per_page=10`
    );
    yield put(
      repositoriesSlice.actions.fetchRepositoriesSuccess(response.data)
    );
  } catch (e) {
    yield put(
      repositoriesSlice.actions.fetchRepositoriesFailure(
        "Falha ao carregar repositórios"
      )
    );
  }
}

export default function* repositoriesSaga() {
  yield takeLatest(
    repositoriesSlice.actions.fetchRepositories,
    fetchRepositories
  );
}
