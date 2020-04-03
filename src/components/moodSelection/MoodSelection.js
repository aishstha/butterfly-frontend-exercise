import React from "react";
import { Link } from "react-router-dom";

import {
  VeryUnhappy,
  Unhappy,
  Neutral,
  Happy,
  VeryHappy
} from "../../assets/images";

import Spinner from "../common/spinner";

import * as info from "../../services/info";
class MoodSelection extends React.Component {
  constructor() {
    super();
    this.state = {
      stats: [],
      companyName: ""
    };
  }

  /**
   * Lifecycle method
   *
   */
  componentDidMount() {
    this.fetchInformation();
  }

  /**
   * Fetch information
   *
   */
  fetchInformation = async () => {
    try {
      let { data } = await info.fetchInfo();
      this.setState({
        companyName: data.data.company
      });
    } catch (err) {}
  };

  render() {
    /**
     *  Fetched company name from server as it is configurable
     *
     */
    const { companyName } = this.state;

    if (companyName) {
      return (
        <React.Fragment>
          <div className='wrapper background-light'>
            <div className='wrapper__content'>
              <div className='wrapper__content__header'>
                <div className='wrapper__content__header__logo'>
                  <img src={"/images/Butterfly.svg"} alt='Butterfly logo' />
                  <span className='title'>Butterfly</span>
                </div>
                <span>Your Team's Happiness Manager</span>
              </div>
              <div className='wrapper__content__body'>
                <span className='wrapper__content__body__title'>
                  <strong>{companyName.toUpperCase()}</strong>
                  would like to know:
                </span>
                <h4 className='wrapper__content__body__question'>
                  How is your week going?
                </h4>
                <div className='wrapper__content__body__moods'>
                  <Link to='/demo-question/1' className='mood-link'>
                    <img
                      src={"/images/VeryUnhappy.svg"}
                      alt='VeryUnhappy'
                      className='VeryUnhappy shadow'
                    />
                  </Link>
                  <Link to='/demo-question/2' className='mood-link'>
                    <img
                      src={"/images/Unhappy.svg"}
                      alt='Unhappy'
                      className='Unhappy shadow'
                    />
                  </Link>
                  <Link to='/demo-question/3' className='mood-link'>
                    <img
                      src={"/images/Neutral.svg"}
                      alt='Neutral'
                      className='Neutral shadow'
                    />
                  </Link>
                  <Link to='/demo-question/4' className='mood-link'>
                    <img
                      src={"/images/Happy.svg"}
                      alt='Happy'
                      className='Happy shadow'
                    />
                  </Link>
                  <Link to='/demo-question/5' className='mood-link'>
                    <img
                      src={"/images/VeryHappy.svg"}
                      alt='VeryHappy'
                      className='VeryHappy shadow'
                    />
                  </Link>
                </div>
                <span className='wrapper__content__body__footer'>
                  Your answer will always remain anonymous
                </span>
              </div>

              <div class='wrapper__content__footer'>
                <div class='wrapper__content__footer__motto'>
                  Butterfly. Your Team's Happiness Manager.
                </div>
                <div class='wrapper__content__footer__copy'>
                  Appynest, Inc. - 67 West Street, Suite 414 - Brooklyn, NY
                  11222, USA ©2017 Appynest, Inc. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    } else return <Spinner />;
  }
}

export default MoodSelection;
