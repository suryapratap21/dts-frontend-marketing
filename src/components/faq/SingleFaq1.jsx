import React from 'react';

const SingleFaq1 = ({ faq }) => {
    const { headingId, btnClass, collapseTarget, expanded, title, text, textClass } = faq;

    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id={headingId}>
                    <button className={`accordion-button ${btnClass}`} type="button" data-bs-toggle="collapse"
                        data-bs-target={`#${collapseTarget}`} aria-expanded={expanded} aria-controls={collapseTarget}>
                        {title}
                    </button>
                </h2>
                <div id={collapseTarget} className={`accordion-collapse collapse ${textClass}`}
                    aria-labelledby={headingId} data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        <p>{text} </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleFaq1;