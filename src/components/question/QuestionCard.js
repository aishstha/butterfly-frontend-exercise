import React from "react";

import StarRating from "../../common/StarRating";

/**
 * Component to of individual question card
 *
 */
class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      showComment: false
    };
  }

  /**
   * Handle add comment
   *
   */
  handleAddComment = () => {
    this.setState({ showComment: true });
  };

  render() {
    const { showComment } = this.state;
    const { question, idx, handleProgress, count } = this.props;

    return (
      <div className='card' key={idx}>
        <div className='card__head'>
          <div>
            <span className='card__head__page-number'>
              {idx + 1} of {count}
            </span>
            <h4 className='card__head__page-title'>{question}</h4>
          </div>

          <div className='previous-rating'>
            <span className='previous-rating__label'>Last time you said:</span>
            <div className='previous-rating__stars'>
              {[...Array(5)].map((e, i) => (
                <svg
                  key={i}
                  width='12'
                  height='12'
                  viewBox='0 0 22 22'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M11 0l3.4 6.94L22 8.054l-5.5 5.402 1.298 7.628-6.798-3.6-6.798 3.6L5.5 13.455 0 8.053 7.6 6.94 11 0z'
                    fillRule='evenodd'
                  ></path>
                </svg>
              ))}
            </div>
          </div>
        </div>

        <div className='card__rating'>
          <div className='rate'>
            <StarRating
              value={idx}
              handleAddComment={this.handleAddComment}
              handleProgress={handleProgress}
            />
          </div>
          <div className='labels'>
            <span>Disagree</span>
            <span>Agree</span>
          </div>
        </div>
        <div className='card__comment'>
          {showComment ? (
            <textarea
              placeholder='Anything to add or suggest'
              className='card__comment__text-field'
            ></textarea>
          ) : (
            <p
              className='card__comment__add-comment'
              onClick={this.handleAddComment}
            >
              Add comment
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default Card;
