import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Title } from './ExercisesItemSearch';


function InfoExercises() {
  const { exerciseInfo, date } = useSelector(state => state.exercises);
  // style="aspect-ratio: 1.76991 / 1; width: 100%; height: 100%;"
  console.log('exerciseInfo.urlVideo', exerciseInfo.urlVideo)
  return (
    <Container>
      <Title>{exerciseInfo.title}</Title>
      <Text>{exerciseInfo.description}</Text>
      <iframe
        width="560" height="315" src={exerciseInfo.urlVideo}
        title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </Container>
  );
}

export default InfoExercises;

const Container = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Text = styled.span`
  font-size: 18px;
  font-weight: 400;
`