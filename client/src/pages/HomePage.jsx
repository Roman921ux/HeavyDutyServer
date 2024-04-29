import styled from 'styled-components';
import Calendar from '../components/HomePage/Calendar';
import Exercises from '../components/HomePage/Exercises';

function HomePage() {
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