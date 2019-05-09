// State
// import { combineReducers } from "redux";

const catsInitial = {
    cats: {
        1: [{
            name: 'Oakley',
            activity: 'napping'
        }],
        2: [{
            name: 'Milla',
            activity: 'drooling'
        }]
    }
}

const initialState = {
    ...catsInitial // This spreads the 'cats': [...] into this spot in initial state
};

console.log(initialState);
// ==========================================================================================================
// Actions + Action Creators
const ACTION_NAP = 'napping';
const ACTION_EAT = 'eating';
const ACTION_PLAY = 'playing';
// const ACTION_NAME = 'name';
// const ACTION_ACTIVITY = 'activity';


export function startNap(id, activity) {
    return {
        type: ACTION_NAP,
        payload: {
            id,
            activity,
        }
    };
}

function getFood(id, activity) {
    return {
        type: ACTION_EAT,
        payload: {
            id,
            activity,
        }
    };
}

function play(id, activity) {
    return {
        type: ACTION_PLAY,
        payload: {
            id,
            activity,
        }
    };
}
window.startNap = startNap;
window.getFood = getFood;
window.play = play;

// ==========================================================================================================
// Reducer

function cats(state=initialState.cats, action = {
    type: ''
}) {
    switch (action.type) {
        case ACTION_NAP:
            console.log(`cats got called with ${action.payload.id}`);
            const newState = state.map(cat => {
                if (cat.id === action.payload.id) {
                    return {
                        ...cat,
                        activity: 'napping'
                    }
                } else {
                    return cat;
                }
            });
            return newState;
            break;
        default:
            return state;
            break;
    }
}

// function activity(state=initialState.activity, action={type: ''}) {
//     console.log(action.type);
//     switch(action.type) {
//         case ACTION_EAT:
//         const newState = () => {
//             if (action.type === )
//         }
//             return 
//     }
// }
console.log(cats);
export const rootReducer = cats;