import { fromJS } from 'immutable';

export const counterActions = {
    ADD : "ADD",
    REST : "REST",
    ADD_NUM : "ADD_NUM"
}

export const counterState = fromJS({
    counter:{
        nums: 0,
        clicks: 0
    }
});

export const counterReducers = {
    [counterActions.ADD] : (state) =>{
        const nums = state.getIn(['counter','nums']);
        const clicks = state.getIn(['counter','clicks']);
        return state.set('counter',fromJS({nums:nums+1,clicks:clicks+1}));
    },
    [counterActions.REST]: (state) =>{
        const nums = state.getIn(['counter','nums']);
        const clicks = state.getIn(['counter','clicks']);
        return state.set('counter',fromJS({nums:nums-1,clicks:clicks+1}));
    },
    [counterActions.ADD_NUM]: (state,{num}) =>{
        const nums = state.getIn(['counter','nums']);
        const clicks = state.getIn(['counter','clicks']);
        return state.set('counter',fromJS({nums:nums+num,clicks:clicks+1}));
    }
};