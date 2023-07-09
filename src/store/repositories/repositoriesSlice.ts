import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRepositoriesResponseDTO } from "../sagas/repositoriesTypes";

interface IState {
  repositories?: IRepositoriesResponseDTO;
  repositoriesLoading?: boolean;
  repositoriesError?: boolean;
}

const initialState: IState = {
  repositoriesLoading: false,
};

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    fetchRepositories: (state, { payload }: PayloadAction<string>) => {
      state.repositoriesLoading = true;
      state.repositoriesError = false;
    },
    fetchRepositoriesSuccess: (
      state,
      { payload }: PayloadAction<IRepositoriesResponseDTO>
    ) => {
      state.repositories = payload;
      state.repositoriesLoading = false;
    },
    fetchRepositoriesFailure: (state, { payload }: PayloadAction<string>) => {
      state.repositoriesLoading = false;
      state.repositoriesError = true;
    },
  },
});

export default repositoriesSlice;
