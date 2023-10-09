import React from 'react';

function Dialog({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }


  return (
    <div onClick={() => onClose()} className="dialog">
      <div onClick={(e) => e.stopPropagation()} className="dialog-content">
        {children}
      </div>
    </div>
  );
}

export default Dialog;