"use client"
import React, { useEffect, useRef, useState } from 'react';

const CustomSelect = ({ options, selectValue }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[selectValue]);

    const toggleSelect = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const selectRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="insurance-select" ref={selectRef}>
                <div className={`nice-select orderby ${isOpen ? 'open' : ''}`} onClick={toggleSelect}>
                    <span className="current">{selectedOption ? selectedOption.label : 'Select an option'}</span>
                    <ul className={`list ${isOpen ? 'open' : ''}`}>
                        {options.map((option) => (
                            <li key={option.value} className={`option ${selectedOption.value === option.value ? 'selected' : ''}`} onClick={() => handleOptionSelect(option)}>
                                {option.label}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CustomSelect;