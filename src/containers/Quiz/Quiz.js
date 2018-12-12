import React, { Component } from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.module.css'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
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
          {text: 'Желтый', id: 4}
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
    const results = this.state.results;

    if (question.rightAnswerId === answerId) {
      if (!results[answerId]) {
        results[answerId] = 'success';
      }
      this.setState({
        answerState: {[answerId]: 'success'},
        results
      })
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true
          })
        } else {
            this.setState({
              activeQuestion: this.state.activeQuestion + 1,
              answerState: null
            })
        }

        window.clearTimeout(timeout)
      }, 1000)

      
    } else {
      results[answerId] = 'error';
      this.setState({
        answerState: {[answerId]: 'error'},
        results
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

          {
            this.state.isFinished ?
            <FinishedQuiz
              results={this.state.results}
              quiz={this.state.quiz}/> :
            <ActiveQuiz 
            question={this.state.quiz[this.state.activeQuestion].question} 
            answers={this.state.quiz[this.state.activeQuestion].answers}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion +1}
            state={this.state.answerState}
            / >
          }
          
        </div>
      </div>
      
    );
  };
};

export default Quiz;