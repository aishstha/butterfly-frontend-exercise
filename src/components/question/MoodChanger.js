import React from "react";

/**
 * Component to change selected emoji mood
 *
 */
const MoodChanger = ({ activeEmojiId, handleEdit }) => {
  return (
    <div className='edit-page-header'>
      <p className='edit-page-header__title'>
        Did you make a mistake? Please select your correct mood:
      </p>
      <div className='edit-page-header__emoji'>
        <div className='edit-page-header__emoji__icon'>
          <img
            src={"/images/VeryUnhappy.svg"}
            alt='VeryUnhappy'
            onClick={() => handleEdit(1)}
            className={activeEmojiId == 1 && "emoji-shadow cursor-pointer"}
          />
        </div>
        <div className='edit-page-header__emoji__icon'>
          <img
            src={"/images/Unhappy.svg"}
            alt='Unhappy'
            onClick={() => handleEdit(2)}
            className={activeEmojiId == 2 && "emoji-shadow cursor-pointer"}
          />
        </div>
        <div className='edit-page-header__emoji__icon'>
          <img
            src={"/images/Neutral.svg"}
            alt='Neutral'
            onClick={() => handleEdit(3)}
            className={activeEmojiId == 3 && "emoji-shadow cursor-pointer"}
          />
        </div>
        <div className='edit-page-header__emoji__icon'>
          <img
            src={"/images/Happy.svg"}
            alt='Happy'
            onClick={() => handleEdit(4)}
            className={activeEmojiId == 4 && "emoji-shadow cursor-pointer"}
          />
        </div>
        <div className='edit-page-header__emoji__icon'>
          <img
            src={"/images/Veryhappy.svg"}
            alt='VeryHappy'
            onClick={() => handleEdit(5)}
            className={activeEmojiId == 5 && "emoji-shadow cursor-pointer"}
          />
        </div>
      </div>
    </div>
  );
};

export default MoodChanger;
