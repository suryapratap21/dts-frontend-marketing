import Link from 'next/link';
import React from 'react';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const CategoryWidget = () => {
    return (
        <>
            <div className="sidebar-item category">
                <h4 className="title">category list</h4>
                <div className="sidebar-info">
                    <ul>
                        <li>
                            <Link href="#" onClick={handleSmoothScroll}>national <span>69</span></Link>
                        </li>
                        <li>
                            <Link href="#" onClick={handleSmoothScroll}>national <span>25</span></Link>
                        </li>
                        <li>
                            <Link href="#" onClick={handleSmoothScroll}>sports <span>18</span></Link>
                        </li>
                        <li>
                            <Link href="#" onClick={handleSmoothScroll}>magazine <span>37</span></Link>
                        </li>
                        <li>
                            <Link href="#" onClick={handleSmoothScroll}>health <span>12</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CategoryWidget;