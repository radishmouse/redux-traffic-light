import { createStore } from 'redux';
import { trafficLight } from './reducers';
import { RED } from './colors';
const defaultState = RED;
export const store = createStore(trafficLight, defaultState);