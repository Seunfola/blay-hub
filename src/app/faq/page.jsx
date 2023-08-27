
'use client'
import React from 'react'

import { useState } from 'react';
import { feeds } from './data';
import NavArea from './navigation';
import PageContent from './PageContent';
const FAQ = () => {
    const [page, setPage] = useState(0);
    const [title, setTitle] = useState(feeds[0].title);
    const [openPage, setOpenPage] = useState(null);
    const [openIndex, setOpenIndex] = useState(null);

    const handleNavClick = (event) => {
        const page = event.target.dataset.index;
        const title = feeds[page].title;
        setPage(page);
        setTitle(title);
    };

    const toggle = (event) => {
        const page = event.target.parentNode.dataset.page;
        const index = event.target.parentNode.dataset.index;
        if (page === openPage && index === openIndex) {
            setOpenPage(null);
            setOpenIndex(null);
        } else {
            setOpenPage(page);
            setOpenIndex(index);
        }
    };

    return (
        <div>
            <nav className="faq_nav">
                <ol>
                    <NavArea update={handleNavClick} />
                </ol>
            </nav>

            <PageContent
            // toggle={toggle}
            // openIndex={openIndex}
            // openPage={openPage}
            // page={page}
            />
        </div>
    );
};

export default FAQ;




// 'use client'
// import React, { useState, useEffect } from "react";
// import styles from './page.module.css'

// const questions = [
//     {
//         id: 1,
//         question: 'Popular Articles',
//         answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
//     },
//     {
//         id: 2,
//         question: 'Fix problems & request removals',
//         answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
//     },
//     {
//         id: 3,
//         question: 'Browse the web',
//         answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
//     },
//     {
//         id: 4,
//         question: 'Search on your phone or tablet',
//         answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
//     },

// ]



// const FAQ = ({ data = [] }) => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchResults, setSearchResults] = useState([]);

//     const handleSearchChange = e => {
//         setSearchTerm(e.target.value);
//     };

//     useEffect(() => {
//         const results = data.filter(item =>
//             item.question.toLowerCase().includes(searchTerm)
//         );
//         setSearchResults(results);
//     }, [searchTerm]);

//     const Searchbar = ({ onSearchChange }) => {
//         const [value, setValue] = useState('');

//         const handleChange = (e) => {
//             setValue(e.target.value);
//             onSearchChange(e);
//         }

//         const Question = ({ id, question, answer }) => {
//             const [isActive, setActive] = useState(false);

//             const handleClick = () => {
//                 setActive(!isActive);
//             }

//             return (
//                 <div className={styles.wrapper}>
//                     <div className={styles.question} id={id}>
//                         <h3>{question}</h3>
//                         <button className={styles.btn} onClick={handleClick}>
//                             <svg className={isActive ? 'active' : ''} viewBox="0 0 320 512" width="100" title="angle-down">
//                                 <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
//                             </svg>
//                         </button>
//                     </div>
//                     <div className={isActive ? 'answer active' : 'answer'}>{answer}</div>
//                 </div>
//             );
//         };

//         return (
//             <form className={styles.form}>
//                 <svg viewBox="0 0 512 512" width="100" className={styles.svg} title="search">
//                     {/* SVG path */}
//                 </svg>
//                 <input className={styles.searchbar} type='text' placeholder='Describe your issue' onChange={handleChange} value={value} />
//             </form>
//         );
//     }

//     return (
//         <div className={styles.container}>
//             <h2 className={styles.heading}>How can we help you?</h2>
//             <Searchbar onSearchChange={handleSearchChange} />
//             <section className={styles.faq}>
//                 {searchResults.map(item => (
//                     <Question
//                         key={item.id}
//                         id={item.id}
//                         questions={item.question}
//                         answer={item.answer}
//                     />
//                 ))}
//             </section>

//         </div>
//     );
// }

// export default FAQ;