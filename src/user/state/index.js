import { fromJS } from 'immutable';

export const userActions ={
    SET_USER_DATA : "SET_USER_DATA",
    SET_USER_LOG_OUT: "SET_USER_LOG_OUT"
}

export const userState = fromJS({
    user:{
        id: 0,
        name: "",
        email: ""
    }
});

export const userReducers = {
    [userActions.SET_USER_DATA] : (state,user) =>{
        return state.mergeIn(['user'],user);
    },
    [userActions.SET_USER_LOG_OUT]: (state) =>{
        return state.merge(userState);
    },
};