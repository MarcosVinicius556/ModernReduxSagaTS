/* eslint-disable @typescript-eslint/no-explicit-any */
import { loadSuccess, loadFailure } from "./repoActions";
import { IRepo } from "./repoTypes";
import apiService from "../../service/apiService";
import { call, put } from "redux-saga/effects";

const loadReposByName = async (payload: { repoName: string }) => {
    const { data } = await apiService.get<IRepo>(`/${payload.repoName}/repos`);
    
    return data;
}

export function* loadReposSaga(action: any) {
    try {
        const response: IRepo[] = yield call(loadReposByName, { repoName: action.payload.value.repoName })

        yield put(loadSuccess({
            repos: response
        }))
    } catch (error: any) {
        yield put(loadFailure({
            error: error.message
        }))
    }
}