import React     from 'react';
import ReactDOM  from 'react-dom';
import SearchBar from './components/SearchBar';
import GifList   from './components/GifList';

class App extends React.Component
{
    constructor (props)
    {
        super(props);

        this.state = {
            gifs: []
        };
    }

    handleTermChange (term)
    {
        console.log(term);
    }

    render ()
    {
        return (
            <div>
                <SearchBar onTermChange={this.handleTermChange} />
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
