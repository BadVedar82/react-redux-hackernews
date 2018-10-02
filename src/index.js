import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store';
import { getReadableStories } from './selectors/story';
import { STORY_ARCHIVE } from './constants/actionTypes';
import './index.css';
//import registerServiceWorker from './registerServiceWorker';

const stories = [
    {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];

ReactDOM.render(
    <App stories={getReadableStories(store.getState())} onArchive={id =>
        store.dispatch({ type: STORY_ARCHIVE, id })}
    />,
    document.getElementById('root')
);

//registerServiceWorker();
