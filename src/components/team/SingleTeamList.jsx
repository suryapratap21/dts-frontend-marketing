import React from 'react';

const SingleTeamList = ({ list }) => {
    const { listTitles, memberInfo } = list;

    return (
        <>
            <div className="team-list-item">
                <h4>{[listTitles]}</h4>
                <ul>
                    {memberInfo.map(info =>
                        <li key={info.id}>
                            <h5>{[info.title]}</h5>
                            <span>{[info.info]}</span>
                            <p>{[info.timeSpan]}</p>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default SingleTeamList;