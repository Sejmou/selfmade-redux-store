//action constants
export const ADD_TODO = '[Todo] Add Todo';
export const REMOVE_TODO = '[Todo] Remove Todo';

//action creators
export class AddTodo {
    readonly type = ADD_TODO;
    constructor(readonly payload: any) {}
}

export class RemoveTodo {
    readonly type = REMOVE_TODO;
    constructor(readonly payload: any) {}
}

console.log()