import React, { useEffect, useState } from 'react';
import './App.css';
import { encode } from 'qss';
import { motion } from 'framer-motion';

const LinkPreviewer = ({ url, children }) => {
  const width = 200;
  const height = 125;

  const params = encode({
    url,
    screenshot: true,
    meta: false,
    embed: 'screenshot.url',
    colorScheme: 'dark',
    'viewport.isMobile': true,
    'viewport-deviceScaleFactor': 1,
    'viewport.height': height * 3
  });

  const [isMounted, setIsMounted] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

 
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => setShow(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  const src = `https://api.microlink.io/?${params}`;

  const dropIn = {
    hidden: { y: '-10vh', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500
      }
    },
    exit: { y: '-100vh', opacity: 0 }
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {isMounted && show && (
        <motion.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            position: 'absolute',
            top: '-125px',
            left: '-60px',
            zIndex: '10',
            backgroundColor: 'transparent'
          }}
        >
          <motion.img
            className="image"
            src={src}
            width={width}
            height={height}
            alt="Link Preview"
          />
        </motion.div>
      )}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </a>
    </div>
  );
};

export default LinkPreviewer;
