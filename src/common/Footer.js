import React from "react";

const Footer = ({ style }) => {
  return (
    <div className='footer' className={style}>
      <div className='footer__company'>Butterfly.</div>
      <div className='footer__links'>
        <a href='https://help.butterfly.ai'>Support</a>
        <a href='https://www.butterfly.ai/legal' target='_blank'>
          Terms of Service
        </a>
        <a href='https://www.butterfly.ai/legal' target='_blank'>
          Privacy Policy
        </a>
      </div>
      <div class='footer__copyright'>©2020 Appynest, Inc.</div>
    </div>
  );
};

export default Footer;
