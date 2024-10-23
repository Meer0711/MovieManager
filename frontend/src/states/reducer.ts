import { Actions, StateType } from "../types/state";
import { ActionType } from "../types/state";



// eslint-disable-next-line
export default (state: StateType , action: ActionType) => {
    switch (action.type) {
        case Actions.AddActor:
            return {
                ...state,
                actors: [...state.actors, action.payload], 
            };

        case Actions.AddCategory:
            return {
                ...state,
                categories: [...state.categories, action.payload], 
            };

        case Actions.AddSeries:
            return {
                ...state,
                series: [...state.series, action.payload], 
            };

        case Actions.AddStudio:
            return {
                ...state,
                studios: [...state.studios, action.payload], 
            };

        default:
            return state;
    }
};
