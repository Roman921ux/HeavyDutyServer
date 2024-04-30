import styled from 'styled-components';
import Calendar from '../components/HomePage/Calendar';
import Exercises from '../components/HomePage/Exercises';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getEventsThunk } from '../feature/exercises/exercises-slise';

function HomePage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEventsThunk())
  }, [])
  return (
    <Container>
      <Calendar />
      <Exercises />
    </Container>
  );
}

export default HomePage;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;