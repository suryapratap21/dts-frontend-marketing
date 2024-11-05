import React from 'react';

const SingleMissionTab1 = ({ data }) => {
    const { heading1, heading2, text, tabClass, ariaLabel, tabId } = data

    return (
        <>
            <div className={`tab-pane fade ${tabClass}`} id={tabId} role="tabpanel" aria-labelledby={ariaLabel}>
                <h2>{heading1} <br /> {heading2}</h2>
                <p>{text}</p>
                <ul>
                    {data.listData.map(list =>
                        <li key={list.id}>{list.listInfo}</li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default SingleMissionTab1;