import React from 'react'
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { addClass } from '../reducers/classesSlice';

export default function Classes() {
  const classes = useSelector(state => state.classes.classList);
  const dispatch = useDispatch();

  function addNewClass() {
    dispatch(addClass({ id: +new Date(), title: '1A' }));
  }

  return (
    <div>
        <ul>
            {classes?.map(c => <li key={c.id}>{c.title}</li>)}
        </ul>
        <Button onClick={() => addNewClass()}>Add class</Button>
    </div>
  )
}
