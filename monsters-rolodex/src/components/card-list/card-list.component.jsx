import React from 'react';
import {Card} from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => { 
  return (
    <div className='card-list'>
      {props.monsters.map(monster => (
        // Note: Having unique key helps identify which element associated with the state
        //       change so that it can only rerender that element
        <Card key={monster.id} monster={ monster }> </Card>
      ))}
    </div>);
}