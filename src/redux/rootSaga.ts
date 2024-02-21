/* eslint-disable @typescript-eslint/no-explicit-any */
import { all, takeLatest } from "redux-saga/effects";

//Ações disponiveis
import { RepoTypes } from "./repo/repoActionTypes";

//Funções a serem executadas
import { loadReposSaga } from "./repo/repoSaga";

export default function* rootSaga(): any {
    return yield all([
        takeLatest(RepoTypes.LOAD_REQUEST, loadReposSaga)
    ])
}


