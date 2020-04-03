import React from "react";

import Feedback from "./Feedback";
import Card from "./QuestionCard";
import MoodValue from "./MoodValue";
import Spinner from "../common/spinner";
import MoodChanger from "./MoodChanger";
import Footer from "../../common/Footer";

import { progressStatus } from "../../mappings/emoji";

import * as routes from "../../constants/routes";
import * as question from "../../services/question";

class QuestionPage extends React.Component {
  constructor() {
    super();
    this.state = {
      stats: [],
      isEdit: false,
      emojiId: null,
      questions: null,
      isLoading: false,
      isTextareaOpen: false
    };
  }

  /**
   * Lifecycle method
   *
   */
  componentDidMount() {
    this.fetchQuestions();
    this.setState({ emojiId: this.props.match.params.id });
  }

  /**
   * Set loading
   *
   * @param {Boolean} isLoading
   */
  setLoading = isLoading => {
    this.setState({ isLoading });
  };

  /**
   * Fetch questions
   *
   */
  fetchQuestions = async () => {
    this.setLoading(true);
    try {
      let { data } = await question.fetchQuestions(this.props.match.params.id);
      this.setState({
        questions: data.data.questions,
        message: data.data.message,
        companyName: data.data.company
      });
      this.setLoading(false);
    } catch (err) {
      this.setLoading(false);
    }
  };

  /**
   * Open edit menu
   *
   */
  openEditMenu = () => {
    this.setState({
      isEdit: true
    });
  };

  /**
   * Handle emoji edit
   *
   */
  handleEdit = id => {
    this.setState({
      isEdit: false,
      emojiId: id
    });
  };

  /**
   * Handle progress status
   *
   */
  handleProgress = index => {
    if (!this.state.stats.includes(index)) {
      this.setState({
        stats: [...this.state.stats, index]
      });
    }
  };

  /**
   * Change path
   *
   */
  changePath = () => {
    this.props.history.push(routes.GREETINGS);
  };

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <Spinner />;
    }

    return (
      <div className='page-wrap'>
        <div className='progress-bar'>
          <div
            className={this.state.stats.length > 0 ? "progress-bar__inner" : ""}
            style={{ width: progressStatus[this.state.stats.length] }}
          ></div>
        </div>

        <div className='side-bar'>
          <img src={"/images/Logo.svg"} alt='Butterfly' className='logo' />
        </div>

        <div className='app-content'>
          <div className='progress-bar'></div>
          <div className='content'>
            {this.state.isEdit ? (
              <MoodChanger
                activeEmojiId={this.state.emojiId}
                handleEdit={this.handleEdit}
              />
            ) : (
              <MoodValue
                message={this.state.message}
                showEditMenu={this.openEditMenu}
                emojiId={this.state.emojiId}
                companyName={this.state.companyName}
              />
            )}
            <h3 className='question'>Do you agree with following</h3>
            <div className='page-body'>
              {this.state.questions &&
                this.state.questions.map((question, index) => {
                  return (
                    <Card
                      question={question}
                      key={index}
                      idx={index}
                      handleProgress={this.handleProgress}
                      stats={this.state.stats}
                      count={this.state.questions.length}
                    />
                  );
                })}
              <Feedback />
              <button
                onClick={this.changePath}
                type='button'
                className={"send-button"}
                disabled={this.state.stats.length === 5 ? false : true}
              >
                Send
                <img src={"/images/Arrow.svg"} alt='Arrow' />
              </button>
            </div>
          </div>
          <Footer className={"pd-6"} />
        </div>
      </div>
    );
  }
}

export default QuestionPage;
