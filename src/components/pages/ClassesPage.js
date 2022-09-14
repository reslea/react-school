import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { classAdded, classesLoaded } from '../../reducers/classesSlice';
import axios from 'axios';
import Classes from '../Classes';
import AddClassModal from '../AddClassModal';
import { Button } from 'react-bootstrap';
import ProtectedComponent from '../ProtectedComponent';

export default function ClassesPage() {
  const classes = useSelector(state => state.classes.classList);
  const token = useSelector(state => state.auth.token);

  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);
  
  useEffect(() => {
    axios.get('https://localhost:7078/class', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(res => dispatch(classesLoaded(res.data)));
  }, [dispatch, token]);

  function addNewClass(classTitle) {
    const newClass = { 
      id: parseInt(+new Date() / 1000), 
      title: classTitle 
    };
    axios.post('https://localhost:7078/class', newClass)
      .then(() => dispatch(classAdded(newClass)))
      .then(() => setIsShow(false));
  }

  // const hasAccess = role => role === 'teacher';
  
  return (
    <div>
      <Classes classes={classes} />
      <ProtectedComponent requiresRole='teacher'>
        <Button onClick={() => setIsShow(true)}>Add class</Button>
      </ProtectedComponent>
      <AddClassModal 
        isShow={isShow} 
        onHide={() => setIsShow(false)} 
        onFormSubmit={newClass => addNewClass(newClass)}
        />
    </div>
  )
}
