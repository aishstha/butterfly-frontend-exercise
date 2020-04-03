import React from "react";

import { Logo } from "../assets/images";

import Footer from "../common/Footer";

const Greetings = () => {
  return (
    <div className='page-wrap'>
      <div className='progress-bar'>
        <div className='progress-bar__inner' style={{ width: "60%" }}></div>
      </div>
      <div className='side-bar'>
        <img src={Logo} alt='Butterfly' className='Butterfly logo' />
      </div>
      <div className='app-content'>
        <div className='progress-bar'></div>
        <div className='content'>
          <div className='greeting'>
            <div className='greeting__icon'>
              <img src='/images/Tick.svg' alt='Tick icon' className='tick' />
            </div>
            <div className='greeting__title'>THANK YOU!</div>
            <div className='greeting__text'>
              <span>
                You're extra feedback has been sent. Have a lovely day.
              </span>
            </div>
          </div>
        </div>
        <Footer className={"pd-20"} />
      </div>
    </div>
  );
};

export default Greetings;
