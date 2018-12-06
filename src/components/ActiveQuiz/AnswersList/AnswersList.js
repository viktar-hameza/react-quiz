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
            state={props.state ? props.state[item.id] : null}
          />
        )
    })} 
  </ul>
  )
};

export default AnswersList;

