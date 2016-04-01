import React from 'react';

const GifItem = (props) =>
{
    return (
        <li>
            <img src={props.gif.url} />
        </li>
    );
}

export default GifItem;
