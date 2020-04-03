import React from "react";

import {
  Happy,
  VeryUnhappy,
  Unhappy,
  Neutral,
  VeryHappy
} from "../../assets/images";

const MoodChanger = ({ activeEmojiId, handleEdit }) => {
  return (
    <div className='edit-page-header'>
      <p className='edit-page-header__title'>
        Did you make a mistake? Please select your correct mood:
      </p>
      <div className='edit-page-header__emoji'>
        <div className='edit-page-header__emoji__icon'>
          <img
            src={VeryUnhappy}
            alt='Edit'
            onClick={() => handleEdit(1)}
            className={activeEmojiId == 1 && "emoji-shadow cursor-pointer"}
          />
        </div>
        <div className='edit-page-header__emoji__icon'>
          <img
            src={Unhappy}
            alt='Edit'
            onClick={() => handleEdit(2)}
            className={activeEmojiId == 2 && "emoji-shadow cursor-pointer"}
          />
        </div>
        <div className='edit-page-header__emoji__icon'>
          <img
            src={Neutral}
            alt='Edit'
            onClick={() => handleEdit(3)}
            className={activeEmojiId == 3 && "emoji-shadow cursor-pointer"}
          />
        </div>
        <div className='edit-page-header__emoji__icon'>
          <img
            src={Happy}
            alt='Edit'
            onClick={() => handleEdit(4)}
            className={activeEmojiId == 4 && "emoji-shadow cursor-pointer"}
          />
        </div>
        <div className='edit-page-header__emoji__icon'>
          <img
            src={VeryHappy}
            alt='Edit'
            onClick={() => handleEdit(5)}
            className={activeEmojiId == 5 && "emoji-shadow cursor-pointer"}
          />
        </div>
      </div>
    </div>
  );
};

export default MoodChanger;
