import React from 'react';

const GifItem = (gif) =>
{
    return (
        <li>
            <img src={gif.url} />
        </li>
    );
}

export default GifItem;
