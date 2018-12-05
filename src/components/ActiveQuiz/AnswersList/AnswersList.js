import React from 'react';
import classes from './AnswersList.module.css';
import AnswersItem from './AnswerItem/AnswerItem';

const AnswersList = (props) => {
  return(
  <ul className={classes.AnswersList}>
    {props.answers.map((item, index) => {
        return (
          <AnswersItem key={index}
            answer={item}
          />
        )
    })} 
  </ul>
  )
};

export default AnswersList;

