/**
 * manages subscribers, application state, and reducers.
 */
export class Store {
    private subscribers: Function[] = [];
    private state: { [key: string]: any };

    /**
     * 
     * @param initalState in real-world examples this might be useful for things like server-side rendering
     * @param reducers ?
     */
    constructor(initalState = {}, private reducers: { [key: string]: Function } = {}) {
        this.state = initalState;
    }

    /**
     * The current application state
     */
    get value() {
        return this.state;
    }

    dispatch(action: { type: string, payload: any }) {
        //TODO: use reducer to actually handle action appropriately!
        this.state = {
            ...this.state,
            todos: [...this.state.todos, action.payload]
        };
        console.log(this.state);
    }
}