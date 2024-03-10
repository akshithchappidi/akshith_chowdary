import React, { useState } from 'react';

const Learn = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenLink = () => {
    window.open('https://drive.google.com/file/d/1all8k1oR2Y5atQWO6TQc7cpI-cSJPblP/view?usp=sharing', '_blank');
  };

  return (
    <div>
      <button className="mt-4 bg-green-500 text-black px-4 py-2 rounded" onClick={handleOpenModal}>Learn More</button>

      {showModal && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fff',
          padding: '1em',
          zIndex: 1000,
        }}>

          <p className="text-[2vw]">If you are a recruiter and want me to be in your <strong>ATS</strong>, please find my resume here:</p>
          <div className="flex-col justify-center">
          <button className="mt-4 bg-green-500 text-black px-4 py-2 rounded" onClick={handleOpenLink}>Open Resume</button>
          <div classname = "pd-16">
          <button className="pd-16 mt-4 bg-red-500 text-black px-8 py-2 rounded"onClick={handleCloseModal}>Close</button>
          </div>
          </div>
        </div>

      )}

      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 999,
        }} onClick={handleCloseModal} />
      )}
    </div>
  );
};

export default Learn;