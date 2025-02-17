// src/components/HolidayModal.jsx
import React from 'react';

function HolidayModal({ holiday, onClose }) {
  if (!holiday) {
    return null; // Don't render if no holiday is selected
  }

  const playPronunciation = (language) => {
      //Basic implementation, just an alert.
      alert(`Playing pronunciation: ${holiday.pronunciation[language]}`);
    // Implementation for audio (if using audio files):
    // if (holiday.pronunciation[language].startsWith('/audio/')) {
    //   const audio = new Audio(holiday.pronunciation[language]);
    //   audio.play();
    // } else {
    //     //  Handle phonetic spelling display (e.g., in a tooltip)
        
    // }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{holiday.name.en} ({holiday.name.mr})</h2>
        <p><strong>Date:</strong> {holiday.date}</p>

        <button onClick={() => playPronunciation('en')}>Pronounce (English)</button>
        <button onClick={() => playPronunciation('mr')}>Pronounce (Marathi)</button>

        <h3>History</h3>
        <p>{holiday.history.en}</p>
        <p>{holiday.history.mr}</p>

        <h3>Greeting</h3>
        <p>{holiday.greeting.en}</p>
        <p>{holiday.greeting.mr}</p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default HolidayModal;