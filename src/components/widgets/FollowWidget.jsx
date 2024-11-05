import React from 'react';
import SocialShareStyle2 from '../utilities/SocialShareStyle2';

const FollowWidget = () => {
    return (
        <>
            <div className="sidebar-item social-sidebar">
                <h4 className="title">follow us</h4>
                <div className="sidebar-info">
                    <ul>
                        <SocialShareStyle2 />
                    </ul>
                </div>
            </div>
        </>
    );
};

export default FollowWidget;