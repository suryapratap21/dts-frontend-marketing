"use client"
import Link from 'next/link';
import React from 'react';
import Project3Data from '@/assets/jsonData/project/Project3Data.json'
import SingleProject3 from './SingleProject3';
import { PhotoProvider } from 'react-photo-view';

const ProjectStyle3 = () => {
    return (
        <>
            <div className="project-style-three-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading secondary text-center">
                                <h4 className="sub-heading">Recent Gallery</h4>
                                <h2 className="title">Latest & most recent <br /> completed projects
                                </h2>
                                <div className="devider"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 gallery-content">
                                <div className="magnific-mix-gallery gallery-masonary">
                                    <div id="gallery-masonary" className="gallery-items colums-3">
                                        <PhotoProvider
                                            speed={() => 800}
                                            easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                                        >
                                            {Project3Data.map(project =>
                                                <SingleProject3 project={project} key={project.id} />
                                            )}
                                        </PhotoProvider>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <div className="load-more-info secondary text-center mt-60">
                                            <p>
                                                Are you interested to show more portfolios? <Link href="#" scroll={false}>Load More</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectStyle3;