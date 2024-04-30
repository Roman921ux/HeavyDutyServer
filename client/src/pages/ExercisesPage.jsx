import styled from 'styled-components';
import SearchExercises from '../components/ExercisesPage/SearchExercises';
import InfoExercises from '../components/ExercisesPage/InfoExercises';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getExercisesThunk } from '../feature/exercises/exercises-slise';

function ExercisesPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getExercisesThunk())
  }, [])

  return (
    <Container>
      <SearchExercises />
      <InfoExercises />
    </Container>
  );
}

export default ExercisesPage;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  height: 100%;
`;