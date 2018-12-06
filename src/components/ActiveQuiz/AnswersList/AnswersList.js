import React from 'react';
import classes from './AnswersList.module.css';
import AnswersItem from './AnswerItem/AnswerItem';

const AnswersList = (props) => {
  return(
  <ul className={classes.AnswersList}>
    {props.answers.map((item) => {
        return (
          <AnswersItem key={item.id}
            answer={item}
            onAnswerClick={() => props.onAnswerClick(item.id)}
          />
        )
    })} 
  </ul>
  )
};

export default AnswersList;

