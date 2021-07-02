import * as fromActions from './actions';

//in a real-life example the reducer would get the initial state for the store
export const initialState = {
    loaded: false,// not used in the simple demo (according to Todd Motto)
    loading: false,// not used in the simple demo (according to Todd Motto)
    data: [{ label: 'Eat pizza', complete: false }]
};

export function reducer(state = initialState, action: { type: string, payload: any }) {
    switch(action.type) {
        case fromActions.ADD_TODO: {
            const todo = action.payload;
            const data = [...state.data, todo];
            return {
                ...state,
                data
            }
        }
        case fromActions.REMOVE_TODO: {
            const todo = action.payload;
            //in Angular, the todo would of course be referenced somewhere
            const data = state.data.filter(t => t.label !== todo.label);
            return {
                ...state,
                data
            }
        }
    }

    return state;
}