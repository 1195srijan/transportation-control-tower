import React, { useState } from 'react';
import styles from './css/Toggle.css';

function Toggle() {
    const [isToggled, setIsToggled] = useState(false);
  
    function handleToggle() {
      setIsToggled(!isToggled);
    }
  
    return (
        <button
          className={`${styles.toggleButton} ${isToggled ? styles.toggled : ''}`}
          onClick={handleToggle}
        >
          {isToggled ? 'ON' : 'OFF'}
        </button>
      );
    }
  

export default Toggle;
