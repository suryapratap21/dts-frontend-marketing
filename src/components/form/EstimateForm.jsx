"use client"
import React, { useState } from 'react';
import Slider from 'react-rangeslider';
import { toast } from 'react-toastify';
import CustomSelect from '../select/CustomSelect';

const EstimateForm = () => {

    const handleQuote = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks For Your Message")
    }

    const [value, setValue] = useState(10);

    const handleChange = newValue => {
        setValue(newValue);
    }

    const options = [
        { value: 'Life Insurance', label: 'Life Insurance' },
        { value: 'Business Insurance', label: 'Business Insurance' },
        { value: 'Health Insurance', label: 'Health Insurance' },
        { value: 'Car Insurance', label: 'Car Insurance' },
        { value: 'Home Insurance', label: 'Home Insurance' },
    ]

    return (
        <>
            <form onSubmit={handleQuote}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input className="form-control" id="name" name="name" placeholder="Jonathom Doe" type="text" required autoComplete='off' />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input className="form-control" id="phone" name="phone" placeholder="+4733378901" type="text" required autoComplete='off' />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input className="form-control" id="email" name="email" placeholder="support@consua.com" type="email" required autoComplete='off' />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="subject">Select Type Of Insurance</label>
                            <CustomSelect options={options} selectValue="4" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="price-range-slider">
                            <p className="range-value">
                                <span>Limits of Balance: </span>
                                <input type="text" id="amount" placeholder={`$${value}`} readOnly />
                            </p>
                            <Slider
                                tooltip={false}
                                min={40}
                                max={100000}
                                value={value}
                                onChange={handleChange}
                                className='range-bar'
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <button type="submit" name="submit" id="submit">
                            Get a Quote
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default EstimateForm;