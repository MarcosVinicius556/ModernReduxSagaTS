import { RepoTypes } from "./repoActionTypes";
import { RepoActions, IRepoState } from "./repoTypes";

const initialState: IRepoState = {
    pending: false,
    data: null,
    error: null
}

const repoReducer = (state = initialState, action: RepoActions) => {
    switch(action.type){
        case RepoTypes.LOAD_REQUEST:
            return { ...state, pending: true }
        case RepoTypes.LOAD_SUCCESS:
            return { ...state, pending: false, data: action.payload.repos }
        case RepoTypes.LOAD_FAILURE:
            return { ...state, pending: false, error: action.payload.error }
        default:
            return state;
    }
}

export default repoReducer;