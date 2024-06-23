import { createSlice } from "@reduxjs/toolkit";


interface IState {
    themeTrigger: boolean;
};

const initialState: IState = {
    themeTrigger: null
};

const themeTriggerSlice = createSlice({
    name: 'themeTriggerSlice',
    initialState,
    reducers: {
        setThemeTrigger: state => {
            state.themeTrigger = !state.themeTrigger;
        }
    }
});

const { reducer: themeTriggerReducer, actions: themeTriggerActions } = themeTriggerSlice;

export { themeTriggerReducer, themeTriggerActions };