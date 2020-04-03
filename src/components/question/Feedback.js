import React from "react";

const Feedback = () => {
  return (
    <div className='feedback-comment'>
      <div className='feedback-comment__header'>
        <h4 className='feedback-comment__header__title'>
          Would you link to add anything?
        </h4>
        <div className='feedback-comment__header__tips'>
          {" "}
          Extra feedback helps
        </div>
      </div>
      <textarea
        placeholder='Express yourself freely and safely. This will always remain anonymous.'
        className='feedback-comment__text-field'
      ></textarea>
    </div>
  );
};

export default Feedback;
