import * as fromStore from './store';//import everything from store folder at once
import { State } from './store';

import { renderTodos } from './utils';

const input = document.querySelector('input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;

//only 1 reducer is responsible for changes of each part of the state?
const reducers = {
  todos: fromStore.reducer
};

const store = new fromStore.Store({}, reducers);

button.addEventListener(
  'click',
  () => {
    if (!input.value.trim()) return;

    const todo = { label: input.value, complete: false };

    store.dispatch(new fromStore.AddTodo(todo));

    input.value = '';
  },
  false
);

const unsubscribe = store.subscribe((state: State) => {
  renderTodos(state.todos.data);
});

destroy.addEventListener('click', unsubscribe);

input.addEventListener('keydown', (e) => {if (e.key == 'Enter') button.click();});

todoList.addEventListener('click', ev => {
  const target = ev.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    //in Angular, the todo would of course be referenced somewhere
    const todo = JSON.parse(target.getAttribute('data-todo') as any);
    store.dispatch(new fromStore.RemoveTodo(todo));
  }
})

store.subscribe((state: State) => console.log('STATE:', state));
