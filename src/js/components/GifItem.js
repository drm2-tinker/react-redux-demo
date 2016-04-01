import React from 'react';

const GifItem = (props) =>
{
    return (
        <li>
            <img src={props.gif.images.downsized.url} />
        </li>
    );
}

export default GifItem;
