'use client'
import React from 'react'
import styles from './page.module.css'
import { useState } from 'react';
// import { feeds } from './data';
import PageContent from './PageContent';
const FAQ = () => {
    const [page, setPage] = useState(0);
    const [openPage, setOpenPage] = useState(null);
    const [openIndex, setOpenIndex] = useState(null);

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
        <div className={styles.results}>
            <PageContent
                toggle={toggle}
                openIndex={openIndex}
                openPage={openPage}
                page={page}
            />
        </div>
    );
};

export default FAQ;