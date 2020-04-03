import React from "react";

import { emojiMapping, messageMapping } from "../../mappings/emoji";

import * as APP_CONSTANT from "../../constants/appConstant";

const MoodValue = ({ showEditMenu, emojiId, companyName }) => {
  return (
    <div className='page-header'>
      <div>
        <div className='emoji'>
          <div className='test'>
            <img
              src={`/images/${emojiMapping[emojiId]}large.svg`}
              alt='Emoji'
              className='emoji-shadow'
            />
            <img
              src={"/images/Editbutton.svg"}
              alt='Edit'
              className='emoji-edit'
              onClick={showEditMenu}
            />
          </div>
        </div>
        <div className='feedback'>
          <p>
            {messageMapping[emojiId]} {APP_CONSTANT.THANKYOU}
          </p>
          <div className='feedback__note'>
            Your answers will <strong>always remain anonymous</strong> and will
            be viewed by the following managers:
          </div>
        </div>
      </div>
      <h4 className='title'>{companyName}</h4>
    </div>
  );
};

export default MoodValue;
