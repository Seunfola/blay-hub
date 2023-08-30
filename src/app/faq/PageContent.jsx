'use client'
import { useState } from 'react';
import { feeds } from './data';
import styles from './page.module.css'


const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [searchWords, setSearchWords] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [activeTabIndex, setActiveTabIndex] = useState(null);


    const handleSearch = () => {
        const results = feeds.filter(feed =>
            feed.items.some(item =>
                item.q.toLowerCase().includes(searchWords.toLowerCase())
            )
        );

        setSearchResults(results);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // remember to add the backspace button event to the clearSearch function

    const clearSearch = () => {
        setSearchWords('');
        setSearchResults([]);
    };

    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <ul className={styles.listEnvelope}>
                    {feeds.map((feed, index) => (
                        <li className={styles.list} key={index}>
                            <button className={activeTabIndex === index ? styles.isActive : styles.inActive} onClick={() => handlePageChange(index)}>
                                {feed.title}
                            </button>
                        </li>
                    ))}
                    <li className={styles.lists}>
                        <input
                            type="text"
                            placeholder="Search keywords"
                            className={styles.input}
                            value={searchWords}
                            onChange={(e) => setSearchWords(e.target.value)}
                        />
                        <button className={styles.click} onClick={handleSearch}>Search</button>
                        <button className={styles.click} onClick={clearSearch}>Clear</button>
                    </li>
                </ul>
            </nav>
            <div className={styles.envelope}>
                {searchResults.map((result, index) => (
                    <div key={index}>
                        <button
                            onClick={() => handleTabClick(index)}
                            className={activeTabIndex === index ? styles.isActive : styles.inactive}
                        >{result.title}</button>
                        {activeTabIndex === index && (
                            <div className={styles.feeds}>
                                {feed.items.map((item, itemIndex) => (
                                    <div key={itemIndex}>
                                        <h4>{item.q}</h4>
                                        <p>{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                <h2 className={styles.text}>{feeds[currentPage].title}</h2>
                <div className={styles.content}>
                    {feeds[currentPage].items.map((item, index) => (
                        <div key={index} className={styles.item}>
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
