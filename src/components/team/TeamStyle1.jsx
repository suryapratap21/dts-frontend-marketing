import React from 'react';
import TeamData from '@/assets/jsonData/team/TeamData.json'
import SingleTeam1 from './SingleTeam1';
import TeamTitle from './TeamTitle';

const TeamStyle1 = ({ sectionClass, fullTeam, teamTitle }) => {
    return (
        <>
            <div className={`team-style-one-area default-padding-top pb-70 pb-xs-0 bg-contain-center ${sectionClass ? sectionClass : ""}`} style={{ backgroundImage: `url(/assets/img/shape/18.png)` }}>

                {teamTitle ? <TeamTitle /> : <></>}

                <div className="container">
                    <div className="row">
                        {fullTeam ?
                            <>
                                {TeamData.map(team =>
                                    <div className="col-xl-3 col-md-6" key={team.id}>
                                        <SingleTeam1 team={team} />
                                    </div>
                                )}
                            </> :
                            <>
                                {TeamData.slice(0, 4).map(team =>
                                    <div className="col-xl-3 col-md-6" key={team.id}>
                                        <SingleTeam1 team={team} />
                                    </div>
                                )}
                            </>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamStyle1;