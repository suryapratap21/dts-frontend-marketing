import Link from 'next/link';
import React from 'react';

const SinglePrice1 = ({ price }) => {
    const { activeClass, title, text, planType, btnText, planCurrency, planPrice, btnClass } = price

    return (
        <>
            <div className={`pricing-style-one ${activeClass}`} style={{ backgroundImage: `url(/assets/img/shape/15.webp)` }}>
                <div className="pricing-header">
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
                <div className="pricing-content">
                    <div className="price">
                        <h2><sup>{[planCurrency]}</sup><span className={typeof planPrice === 'string' ? 'free' : ''}>{[planPrice]}</span> <sub>{[planType]}</sub></h2>
                    </div>
                    <ul>
                        {price.listData.map(list =>
                            <li key={list.id}><i className={list.listIcon}></i> {list.listData}</li>
                        )}
                    </ul>
                    <Link className={`btn mt-25 btn-sm animation ${btnClass}`} href="#">{btnText}</Link>
                </div>
            </div>
        </>
    );
};

export default SinglePrice1;