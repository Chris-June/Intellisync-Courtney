import React, { useState, useEffect, useCallback } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

const StreamingText = ({ 
  texts, 
  speed = 100, 
  deletionSpeed = 50, 
  pauseDuration = 2000,
  className = '',
  tagName: Tag = 'span',
  parentClassName = '',
  parentTag: ParentTag = 'div'
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const streamText = useCallback(() => {
    const currentText = texts[currentTextIndex];
    
    if (!isDeleting) {
      // Typing effect
      if (displayText.length < currentText.length) {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      } else {
        // Pause before deleting
        setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting effect
      if (displayText.length > 0) {
        setDisplayText(currentText.slice(0, displayText.length - 1));
      } else {
        // Move to next text
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [currentTextIndex, displayText, isDeleting, texts, pauseDuration]);

  useEffect(() => {
    const timer = setTimeout(streamText, isDeleting ? deletionSpeed : speed);
    return () => clearTimeout(timer);
  }, [streamText, isDeleting, speed, deletionSpeed]);

  return (
    <ParentTag className={parentClassName}>
      <Tag className={`streaming-text ${className}`}>
        {displayText}
        <span className="streaming-cursor">|</span>
      </Tag>
    </ParentTag>
  );
};

StreamingText.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  speed: PropTypes.number,
  deletionSpeed: PropTypes.number,
  pauseDuration: PropTypes.number,
  className: PropTypes.string,
  tagName: PropTypes.elementType,
  parentClassName: PropTypes.string,
  parentTag: PropTypes.elementType
};

export default StreamingText;
