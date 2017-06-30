import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchBar';

// configs
const YOUTUBE_API_KEY = 'AIzaSyA0sVM0KJKU_zMyUUMRHBKFRyP45cperMU';


// create new component, this should produce some HTML
const App = () => {
    return (
        <div>
            <h1>Hello!</h1>
            <SearchBar />
        </div>
    );
}

// take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.batman'));