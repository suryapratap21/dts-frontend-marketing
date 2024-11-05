import React from 'react';
import Mission1Data from '@/assets/jsonData/mission/Mission1Data.json'
import SingleMissionTab1 from './SingleMissionTab1';

const MissionTab1 = () => {
    return (
        <>
            <div className="nav nav-tabs mission-tab-navs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-id-1" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true">
                    Our Mission
                </button>
                <button className="nav-link" id="nav-id-2" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false">
                    Our Vision
                </button>
            </div>
            <div className="tab-content mission-tab-content" id="nav-tabContent">
                {Mission1Data.map(data =>
                    <SingleMissionTab1 data={data} key={data.id} />
                )}
            </div>
        </>
    );
};

export default MissionTab1;