import React from "react";

const Footer = ({ className }) => {
  return (
    <div className={`footer ${className}`}>
      <div className='footer__company'>Butterfly.</div>
      <div className='footer__links'>
        <a
          href='https://help.butterfly.ai'
          target='_blank'
          rel='noopener noreferrer'
        >
          Support
        </a>
        <a
          href='https://www.butterfly.ai/legal'
          target='_blank'
          rel='noopener noreferrer'
        >
          Terms of Service
        </a>
        <a
          href='https://www.butterfly.ai/legal'
          target='_blank'
          rel='noopener noreferrer'
        >
          Privacy Policy
        </a>
      </div>
      <div className='footer__copyright'>©2020 Appynest, Inc.</div>
    </div>
  );
};

export default Footer;
