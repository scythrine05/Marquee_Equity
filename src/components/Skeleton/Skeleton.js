import React from 'react';
import './Skeleton.css';

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-img"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-content"></div>
    </div>
  );
};

export default SkeletonCard;