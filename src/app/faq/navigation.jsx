import React from 'react';
import MenuItem from './MenuItem';
import { feeds } from './data'; 

// Adjust the import based on your file structure

const NavArea = (props) => {
    return (
        <div>
            {feeds.map((val, page) => (
                <MenuItem key={page} page={page} update={props.update} />
            ))}
        </div>
    );
};

export default NavArea;
