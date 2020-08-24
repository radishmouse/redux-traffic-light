import { store } from './store';
import { actionChange } from './actions';
store.subscribe(() => {
  console.log('The light has changed to: ' + store.getState());
});
window.store = store;
window.actionChange = actionChange;