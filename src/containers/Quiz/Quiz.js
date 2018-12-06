import React, { Component } from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.module.css'

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    quiz: [
      {
        question: 'Какого цвета небо?',
        rightAnswerId: 2,
        id: 1,
        answers: [
          {text: 'Черный', id: 1},
          {text: 'Синий', id: 2},
          {text: 'Красный', id: 3},
          {text: 'Вопрос 4', id: 4}
        ]
      },
      {
        question: 'Столица Беларуси??',
        rightAnswerId: 4,
        id: 2,
        answers: [
          {text: 'Вильнюс', id: 1},
          {text: 'Берлин', id: 2},
          {text: 'Киев', id: 3},
          {text: 'Миснк', id: 4}
        ]
      }
    ]
  };
  onAnswerClickHandler = (answerId) => {
    console.log('Answer Id ', answerId);

    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {
      const timeout = window.setTimeout(() => {
        if (this.state.quiz.length === this.state.activeQuestion + 1) {
          console.log('Finished');
        } else {
            this.setState({
              activeQuestion: this.state.activeQuestion + 1
            })
        }

        window.clearTimeout(timeout)
      }, 1000)

      
    } else {

    }
    
  }
  render() {
    return(
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Quiz</h1>
          <ActiveQuiz 
            question={this.state.quiz[this.state.activeQuestion].question} 
            answers={this.state.quiz[this.state.activeQuestion].answers}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion +1}
            / >
        </div>
      </div>
      
    );
  };
};

export default Quiz;