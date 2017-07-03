import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from './services/youtubeSearch'
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const YOUTUBE_API_KEY = 'AIzaSyA0sVM0KJKU_zMyUUMRHBKFRyP45cperMU';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch("foo fighters")
    }

    videoSearch(term){
        YoutubeSearch({
            key: YOUTUBE_API_KEY,
            term: term
        }, (videos) => {
            this.setState({videos: videos, selectedVideo: videos[0]})
        });
    }

    render() {
        let videoSearch = _.debounce( (term) => {this.videoSearch(term)}, 500 )
        return (
            <div>
                <SearchBar onSearchTermChange={term => videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.querySelector('.batman'));