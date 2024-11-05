"use client";
import React, { useState, useEffect, useRef } from 'react';

const SkillProgress = ({ skill }) => {
  const { title, end } = skill;
  const [progressWidth, setProgressWidth] = useState(0);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setProgressWidth(end);
      }
    }, { threshold: 1.0 });

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, [end]);

  return (
    <>
      <div className="progress-box">
        <h5>{title}</h5>
        <div className="progress" ref={progressBarRef}>
          <div className="progress-bar" role="progressbar" data-width={end} style={{ width: `${progressWidth}%` }}>
            <span>{`${end}%`}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillProgress;