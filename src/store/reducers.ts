//in a real-life example the reducer would get the initial state for the store
export const initialState = {
    loaded: false,// not used in the simple demo (according to Todd Motto)
    loading: false,// not used in the simple demo (according to Todd Motto)
    data: [{ label: 'Eat pizza', complete: false }]
};

export function reducer(state = initialState, action: { type: string, payload: any }) {
    switch(action.type) {
        case 'ADD_TODO': {
            const todo = action.payload;
            const data = [...state.data, todo];
            return {
                ...state,
                data
            }
        }
    }

    return state;
}