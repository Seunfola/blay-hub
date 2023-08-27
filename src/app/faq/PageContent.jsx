'use client'
import { useState } from 'react';
import { feeds } from './data'; // Replace with the correct path

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <nav>
                <ul>
                    {feeds.map((feed, index) => (
                        <li key={index}>
                            <button onClick={() => handlePageChange(index)}>
                                {feed.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            <div>
                <h2>{feeds[currentPage].title}</h2>
                <div>
                    {feeds[currentPage].items.map((item, index) => (
                        <div key={index}>
                            <h4>{item.q}</h4>
                            <p>{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pagination;
