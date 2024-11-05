import Image from 'next/image';
import React from 'react';
import SocialShare from '../utilities/SocialShare';

const ProjectDetailsContent = ({ projectInfo }) => {
    const { thumbFull, projectData } = projectInfo

    return (
        <>
            <div className="project-details-area default-padding">
                <div className="container">
                    <div className="project-details-items">
                        <div className="thumb">
                            <Image src={`/assets/img/gallery/${thumbFull}`} alt="Thumb" width={1920} height={825} />
                        </div>
                        <div className="top-info">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5 order-lg-last right-info">
                                    <div className="project-info mt-15" style={{ backgroundImage: `url(/assets/img/shape/41.png)` }}>
                                        <h4 className="title">Project Info</h4>
                                        <ul>
                                            <li>
                                                Client <span>themeforest.validthemes.com</span>
                                            </li>
                                            <li>
                                                Date <span>25 February, 2022</span>
                                            </li>
                                            <li>
                                                Address <span>1401, 21st Street STE R4569, California</span>
                                            </li>
                                        </ul>
                                        <ul className="social">
                                            <SocialShare />
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-7 pr-35 pr-md-15 pr-xs-15 left-info mt-md-10">
                                    <h2>Business Planing & Solution</h2>
                                    <p>
                                        Netus lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget urna potenti cum vestibulum cras. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum fringilla facilisi volutpat fusce pharetra felis sapien varius quisque class convallis praesent est sollicitudin donec nulla venenatis, cursus fermentum netus posuere sociis porta risus habitant malesuada nulla habitasse hymenaeos.
                                    </p>
                                    <ul className="check-list">
                                        {projectData.map(list =>
                                            <li key={list.id}>
                                                <h4>{list.title}</h4>
                                                <p>{list.info}</p>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="main-content">
                            <p>
                                Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.  Facilisis inceptos nec, potenti nostra aenean lacinia varius semper ant nullam nulla primis placerat facilisis. Netus lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget urna potenti cum vestibulum cras. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum fringilla facilisi volutpat fusce pharetra felis sapien varius quisque class convallis praesent est sollicitudin donec nulla venenatis, cursus fermentum netus posuere sociis porta risus habitant malesuada nulla habitasse hymenaeos. Viverra curabitur nisi vel sollicitudin dictum natoque.
                            </p>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <Image src="/assets/img/gallery/3.jpg" alt="Thumb" width={800} height={600} />
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <Image src="/assets/img/gallery/6.jpg" alt="Thumb" width={800} height={600} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetailsContent;