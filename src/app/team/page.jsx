import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import TeamStyle1 from '@/components/team/TeamStyle1';
import React from 'react';

export const metadata = {
    title: "Consua - Consulting Business - Team"
}

const TeamPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="team" title="Team Members">
                <TeamStyle1 fullTeam={true} sectionClass="bg-gray" />
            </LayoutStyle7>
        </>
    );
};

export default TeamPage;