import { CHANGE } from './actions'
import { 
    RED,
    YELLOW,
    GREEN
} from './colors';
export function trafficLight(state, action) {
    switch(action.type) {
        case CHANGE:
            // We could also have used an if/else
            switch(state) {
                case YELLOW:
                    return RED;
                case GREEN:
                    return YELLOW;
                case RED:
                    return GREEN;
                default:
                    return state;
            }
        default:
            return state;            
    }
}