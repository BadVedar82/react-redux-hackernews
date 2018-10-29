import { STORIES_ADD } from '../constants/actionTypes';

const INITIAL_STATE = [];

const applyAddStories = (state, action) => action.stories;

function storyReducer(state = INITIAL_STATE, action) {
    console.log('storyReducer');
    switch(action.type) {
        case STORIES_ADD: {
            return applyAddStories(state, action);
        }
        default: return state;
    }
}

export default storyReducer;
