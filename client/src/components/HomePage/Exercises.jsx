import styled from 'styled-components';
import ExercisesItem from './ExercisesItem'
import ExercisesAddItem from './ExercisesAddItem'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleApproaches, ToggleEvent, addEventSetThunk, setTime, toggleEventSetThunk, toglleModalAdd, toglleModalToggle } from '../../feature/exercises/exercises-slise';
import FormApproach from './Exercises/FormApproach';

function Exercises() {
  const { events, date, modalToggle, modalAdd, approachesId } = useSelector(state => state.exercises);
  const dispatch = useDispatch()
  // const [modal, setModal] = useState(false)
  const [valuesInput, setValuesInput] = useState({
    kg: 0,
    repeat: 0
  })
  // нужен чтобы достаь id 
  const [event, setEvent] = useState({})

  // Получаем текущую дату
  useEffect(() => {
    dispatch(setTime(new Date().toISOString()))
  }, [])
  const currentDateString = date.slice(0, 10);
  const eventsToday = events.filter(event => event.start.slice(0, 10) === currentDateString);

  const toggleModal = (event, modal) => {
    if (modal === 'add') {
      dispatch(toglleModalAdd())
      setEvent(event)
    } else if (modal === 'toggle') {
      setEvent(event)
    }
    // setModal(prev => !prev)

  }

  const addApproachEvent = (e) => {
    if (!valuesInput.repeat || !valuesInput.repeat) {
      e.preventDefault();
      alert('Заполните строки!')
      return
    }
    e.preventDefault();
    if (modalAdd) {
      dispatch(addEventSetThunk({ event, valuesInput }))
      setValuesInput({
        kg: 0,
        repeat: 0
      })
      dispatch(toglleModalAdd())
    } else if (modalToggle) {
      // console.log('Event', event, 'ValueInput', valuesInput)
      dispatch(toggleEventSetThunk({ event, valuesInput, approachesId }))
      setValuesInput({
        kg: 0,
        repeat: 0
      })
      dispatch(toglleModalToggle())
    }
  }



  return (
    <Container>
      {modalAdd || modalToggle ? (<FormApproach onSubmit={addApproachEvent} forInput={{ setValuesInput, valuesInput }} event={event} approachesId={approachesId} />)
        :
        (<>
          <span>Date: {date.substring(0, 10)}</span>
          {eventsToday.map(event => <ExercisesItem key={event._id} event={event} setModal={toggleModal} />)}
          <ExercisesAddItem />
        </>)
      }
    </Container>
  );
}

export default Exercises;

const Container = styled.div`
  /* border: 1px solid red; */
  width: 49%;
  /* overflow-y: scroll; */
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-right: 1%;
`;