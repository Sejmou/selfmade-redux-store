interface Action {
    type?: string,
    payload?: any
}

export interface State {
    [key: string]: any
}

/**
 * manages subscribers, application state, and reducers.
 */
export class Store {
    private subscribers: Function[] = [];
    private state: State;

    /**
     * 
     * @param initalState in real-world examples this might be useful for things like server-side rendering
     * @param reducers ?
     */
    constructor(initalState = {}, private reducers: { [key: string]: Function } = {}) {
        //let reducers override initial state (why?!)
        this.state = this.reduce(initalState, {});
    }

    /**
     * The current application state
     */
    get value() {
        return this.state;
    }

    subscribe(fn: Function) {
        this.subscribers = [...this.subscribers, fn];
        this.notify();
        //return function allowing subscribers to unsubscribe again
        return () => this.subscribers = this.subscribers.filter(s => s !== fn);
    }

    private notify() {
        this.subscribers.forEach(fn => fn(this.value));
    }

    dispatch(action: Action) {
        //TODO: use reducer to actually handle action appropriately!
        this.state = this.reduce(this.state, action);
        this.notify();
    }

    private reduce(state: State, action: Action): State {
        const newState: State = {};
        for (const prop in this.reducers) {
            //pass only part of state that the reducer is allowed to manage
            newState[prop] = this.reducers[prop](state[prop], action);
        }
        return newState;
    }
}