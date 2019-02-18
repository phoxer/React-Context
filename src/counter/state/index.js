import { fromJS } from 'immutable';

export const counterState = fromJS({
    counter:{
        nums: 0,
        clicks: 0
    }
});

export const counterReducers = {
    ADD : (state) =>{
        return state.updateIn(['counter','nums'],value=>value+1);
    },
    REST: (state) =>{
        return state.updateIn(['counter','nums'],value=>value-1);
    },
    ADD_FIVE: (state,action) =>{
        return state.updateIn(['counter','nums'],value=>value+action.nums);
    }
};