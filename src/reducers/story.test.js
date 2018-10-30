import deepFreeze from 'deep-freeze';
import storyReducer from './story';

describe('story reducer', () => {
    it('adds stories to the story state', () => {
        const stories = ['a', 'b', 'c'];

        const action = {
            type: 'STORIES_ADD',
            stories,
        };

        const previousState = {
            stories: [],
            error: null
        };
        const expectedNewState = {
            stories,
            error: null
        };
        deepFreeze(previousState);
        const newState = storyReducer(previousState, action);

        expect(newState).toEqual(expectedNewState);
    });


    it('sets an error object when an error occurs', () => {
        const error = 'ERROR';
        const action = {
            type: 'STORIES_FETCH_ERROR',
            error: error
        };
        const previousState = {
            stories: [],
            error: null
        };
        const expectedNewState = {
            stories: [],
            error: error
        };

        deepFreeze(previousState);
        const newState = storyReducer(previousState, action);

        expect(newState).toEqual(expectedNewState);
    });

    it('clears an error object when stories fetch successfully', () => {
        const error = 'ERROR';
        const stories = ['a', 'b', 'c'];

        const action = {
            type: 'STORIES_ADD',
            stories,
        };

        const previousState = {
            stories: [],
            error: error
        };
        const expectedNewState = {
            stories: stories,
            error: null
        };

        deepFreeze(previousState);
        const newState = storyReducer(previousState, action);

        expect(newState).toEqual(expectedNewState);
    });
});
