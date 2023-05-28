import { useState, useEffect } from "react";
import {PropTypes} from 'prop-types'

function LastUpdatedMark(timestamp) {
  const [lastUpdatedMark, setLastUpdateMark] = useState('');
  useEffect(() => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
   
    const intervalID = setInterval(
      () => {
        const now = new Date();
        const difference = now - timestamp;
        if (difference > second && difference < minute) {
          setLastUpdateMark(`${Math.floor(difference / second)} сек.`)
        }
        if (difference > minute && difference < hour) {
          setLastUpdateMark(`${Math.floor(difference / minute)} м.`)
        }
        if (difference > hour || difference < day) {
          setLastUpdateMark(`${Math.floor(difference / hour)} ч.`)
        }
        if (difference > day) {
          setLastUpdateMark(`${Math.floor(difference / day)} д.`)
        }
      }, 1000);
    return clearInterval(intervalID);
  }, [timestamp])
  return (
    <span className="last-updated-mark">
      {
        lastUpdatedMark
      }
    </span>
  );
}

LastUpdatedMark.propTypes = {
  timestamp: PropTypes.number,
}

export default LastUpdatedMark;
