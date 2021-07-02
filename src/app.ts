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

    const payload = { label: input.value, complete: false };

    store.dispatch({
      type: 'ADD_TODO',
      payload
    });

    input.value = '';
  },
  false
);

const unsubscribe = store.subscribe((state: State) => {
  renderTodos(state.todos.data);
});

destroy.addEventListener('click', unsubscribe);

input.addEventListener('keydown', (e) => {if (e.key == 'Enter') button.click();});

todoList.addEventListener('click', function(event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    console.log(target);
  }
});


store.subscribe((state: State) => console.log('STATE:', state));
