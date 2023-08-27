import React from 'react';
import { feeds } from './data';

const MenuItem = (props) => {
    const page = Number(props.page);
    const title = feeds[page].title;

    return (
        <li>
            <a
                href="#"
                data-index={page}
                onClick={props.update}
            >
                {title}
            </a>
        </li>
    );
};

export default MenuItem;
