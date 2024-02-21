import { action } from "typesafe-actions";
import { RepoTypes } from "./repoActionTypes";
import { LoadReposPayload, 
         LoadReposSuccessPayload, 
         LoadReposFailurePayload
} from "./repoTypes";

export const loadRequest = (payload: LoadReposPayload) => action(RepoTypes.LOAD_REQUEST, payload);

export const loadSuccess = (payload: LoadReposSuccessPayload) => action(RepoTypes.LOAD_SUCCESS, payload);

export const loadFailure = (payload: LoadReposFailurePayload) => action(RepoTypes.LOAD_FAILURE, payload);

