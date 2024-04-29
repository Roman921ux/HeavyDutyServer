import styled from 'styled-components';
import SearchExercises from '../components/ExercisesPage/SearchExercises';
import InfoExercises from '../components/ExercisesPage/InfoExercises';

function ExercisesPage() {

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