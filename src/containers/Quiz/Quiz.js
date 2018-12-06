import React, { Component } from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.module.css'

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answerState: null,
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
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        return
      }
    }
    console.log('Answer Id ', answerId);

    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: {[answerId]: 'success'}
      })
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log('Finished');
        } else {
            this.setState({
              activeQuestion: this.state.activeQuestion + 1,
              answerState: null
            })
        }

        window.clearTimeout(timeout)
      }, 1000)

      
    } else {
      this.setState({
        answerState: {[answerId]: 'error'}
      })
    }
    
  };
  isQuizFinished() {
    return this.state.quiz.length === this.state.activeQuestion + 1
  }
  render() {
    return(
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz 
            question={this.state.quiz[this.state.activeQuestion].question} 
            answers={this.state.quiz[this.state.activeQuestion].answers}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion +1}
            state={this.state.answerState}
            / >
        </div>
      </div>
      
    );
  };
};

export default Quiz;