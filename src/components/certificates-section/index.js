import React from 'react';
import SectionHeader from '../section-header';
import IconButtonBar from '../icon-button-bar';

import './style.scss';

const CertSection = ({ certificates }) => {
  if (!certificates || certificates.length < 2) return null;
  return (
    <div className="certificates-section-wrapper">
      <div className="certificates-section">
        <SectionHeader title="certificates" />
        <div className="body">
          {certificates.map((certificates, index) =>
            index === 0 ? null : (
              <div className="certificates" key={index}>
                <div className="date">{certificates.date}</div>
                <div className="title">{certificates.title}</div>
                <div className="description">{certificates.description}</div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default CertSection;
