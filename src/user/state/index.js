import { fromJS } from 'immutable';

export const userState = fromJS({
    user:{
        id: 0,
        name: "",
        email: ""
    }
});

export const userReducers = {
    SET_USER_DATA : (state,action) =>{
        return state.mergeIn(['user'],action.user);
    }
};