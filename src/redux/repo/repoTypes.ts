/* eslint-disable @typescript-eslint/no-explicit-any */
import { RepoTypes } from "./repoActionTypes";

export interface IRepo {
    id: number;
    name: string;
    description: string;
    git_url: string;
    language: string;
    created_at: Date
}

export interface IRepoState {
    pending: boolean;
    data: IRepo[] | null;
    error: string | null;
}

export interface LoadReposPayload {
    value: { repoName: string }
}

export interface LoadReposSuccessPayload {
    repos: IRepo[] | null;
}

export interface LoadReposFailurePayload {
    error: string;
}

export interface LoadRequest {
    type: typeof RepoTypes.LOAD_REQUEST;
    payload: LoadReposPayload
}

export interface LoadSuccess {
    type: typeof RepoTypes.LOAD_SUCCESS;
    payload: LoadReposSuccessPayload
}

export interface LoadFailure {
    type: typeof RepoTypes.LOAD_FAILURE;
    payload: LoadReposFailurePayload
}

export type RepoActions = LoadRequest | LoadSuccess | LoadFailure;