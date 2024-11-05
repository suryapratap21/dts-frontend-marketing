import TeamDetailsContent from '@/components/team/TeamDetailsContent';
import React from 'react';
import TeamData from '@/assets/jsonData/team/TeamData.json';
import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';

export const metadata = {
    title: "Consua - Consulting Business - Team Details"
}

const TeamDetails = ({ params }) => {

    const { id } = params
    const data = TeamData.find(team => team.id === parseInt(id))

    return (
        <>
            <LayoutStyle7 breadCrumb="Team-details" title="Team Details">
                <TeamDetailsContent teamInfo={data} />
            </LayoutStyle7>
        </>
    );
};

export default TeamDetails;