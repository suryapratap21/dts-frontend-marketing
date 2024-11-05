import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import ProjectDetailsContent from '@/components/project/ProjectDetailsContent';
import React from 'react';
import Project2Data from '@/assets/jsonData/project/Project2Data.json'

export const metadata = {
    title: "Consua - Consulting Business - Project Details"
}

const ProjectDetailsPage = ({ params }) => {

    const { id } = params
    const data = Project2Data.find(project => project.id === parseInt(id))

    return (
        <>
            <LayoutStyle7 breadCrumb="Project-details" title="Project Details">
                <ProjectDetailsContent projectInfo={data} />
            </LayoutStyle7>
        </>
    );
};

export default ProjectDetailsPage;