import React from "react";

import { ReactComponent as StarIcon } from "../assets/icons/ic-star.svg";

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredStar: null,
      selectedRating: null
    };
  }

  /**
   * Set hovered star
   *
   */
  setHoveredStar = hoveredStar => {
    this.setState({ hoveredStar });
  };

  /**
   * Handle mouse enter
   *
   */
  handleMouseEnter = selectedIndex => {
    this.setHoveredStar(selectedIndex);
  };

  /**
   * Handle mouse leave
   *
   */
  handleMouseLeave = () => {
    this.setHoveredStar(null);
  };

  /**
   * Select rating
   *
   */
  selectRating = selectedRating => {
    this.setState({ selectedRating });
    this.props.handleAddComment(this.props.value);
    this.props.handleProgress(this.props.value);
  };

  render() {
    const { hoveredStar, selectedRating } = this.state;
    return (
      <div
        className={
          hoveredStar && hoveredStar !== selectedRating
            ? "ratings is-hovering"
            : "ratings"
        }
      >
        {[...Array(10)].map((val, i) => {
          const currentIndex = i + 1;
          return (
            <div
              key={currentIndex}
              className={`ratings__item ${
                hoveredStar === currentIndex ? "color" : ""
              } ${selectedRating === currentIndex ? "is-selected" : ""} `}
              data-value={currentIndex}
              onClick={() => {
                this.selectRating(currentIndex);
              }}
              onMouseEnter={() =>
                this.handleMouseEnter(currentIndex, selectedRating)
              }
              onMouseLeave={() => this.handleMouseLeave()}
            >
              <div className='ratings__item__inner'>
                <StarIcon />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default StarRating;
