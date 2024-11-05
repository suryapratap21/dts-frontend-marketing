"use client"
import { useState } from 'react';

const useSearchBar = () => {
    const [openSearch, setOpenSearch] = useState(false);

    const searchOpen = (event) => {
        setOpenSearch(true)
        document.querySelector('.top-search').classList.add('smooth-search');
    }

    const searchClose = () => {
        setOpenSearch(false)
        document.querySelector('.top-search').classList.remove('smooth-search');
    }

    return { openSearch, searchOpen, searchClose }
};

export default useSearchBar;