import styled from 'styled-components';
import ExercisesItemSearch from './ExercisesItemSearch';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectVisibleExercises, toggleCategory } from '../../feature/exercises/exercises-slise';

function SearchExercises() {
  const { exercises, date, categoryExercise } = useSelector(state => state.exercises);
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const CategotyBtn = [
    {
      title: 'все',
      category: 'all'
    },
    {
      title: 'грудь',
      category: 'breast'
    },
    {
      title: 'спина',
      category: 'back'
    },
    {
      title: 'ноги',
      category: 'leg'
    },
    {
      title: 'трицепс',
      category: 'triceps'
    },
    {
      title: 'плечи',
      category: 'shoulders'
    },
    {
      title: 'попка',
      category: 'ass'
    },
  ]

  // const filterExercises = exercises.filter(exercise => {
  //   const title = exercise.title.toLowerCase();
  //   const search = value.toLowerCase();

  //   return title.includes(search);
  // })
  const filterExercises = useSelector(state => selectVisibleExercises(state.exercises, categoryExercise, value));


  return (
    <Container>
      <span>{categoryExercise}</span>
      <Search placeholder='Найди свое упражнение' value={value} onChange={(e) => setValue(e.target.value)} />
      <BlockBtn>
        {CategotyBtn.map(item => <Btn onClick={() => { dispatch(toggleCategory(item.category)) }}>{item.title}</Btn>)}
      </BlockBtn>
      <AllExersise>
        {filterExercises.map(exercise => <ExercisesItemSearch exercise={exercise} date={date} />)}
      </AllExersise>
    </Container>
  );
}

export default SearchExercises;

const Container = styled.div`
  width: 50%;
  /* max-height: 100vh; */
  /* border: 1px solid red; */

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Search = styled.input`
  border: 2px solid rgb(233, 236, 239);
  background-color: rgb(233, 236, 239);
  color: rgb(111, 112, 114);
  width: 93%;
  padding: 10px 15px;
  border-radius: 5px;
`;
const AllExersise = styled.div`
  padding: 15px 15px 15px 30px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 370px;
  /* border-top: 5px solid rgba(117, 125, 197, 0.3); */
  /* border-radius: 5px 0 0 5px; */
`;

const BlockBtn = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  padding: 5px 10px;
  /* background-color: #e5e6e9; */
  /* border: 1px solid red; */
`
const Btn = styled.button`
  font-size: var(--smallText-size);
  font-weight: var(--smallText-weight);
`