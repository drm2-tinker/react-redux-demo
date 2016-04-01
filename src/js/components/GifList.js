import React   from 'react';
import GifItem from './GifItem';

const GifList = (props) =>
{
    const GifItems = props.gifs.map((gif) =>
    {
        return (
            <GifItem key={gif.id} gif={gif} />
        );
    });

    return (
        <ul>
            {GifItems}
        </ul>
    );
}

export default GifList;
