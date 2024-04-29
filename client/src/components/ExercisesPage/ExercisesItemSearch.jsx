import styled from 'styled-components';
import { PlusCircleOutlined, EllipsisOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addEvents, addExerciseInfo } from '../../feature/exercises/exercises-slise';
import { useNavigate } from 'react-router-dom';

function ExercisesItemSearch({ exercise, date }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log('exercise', exercise)

  const addExercise = () => {
    const time = date.substring(0, 19);
    dispatch(addEvents({ exercise, time }))
    navigate('/')
  }
  return (
    <Container onClick={() => dispatch(addExerciseInfo(exercise))}>
      <Block>
        {/* <Img /> */}
        <Title>{exercise.title}</Title>
      </Block>
      <Button onClick={() => addExercise()}>
        {/* <PlusCircleOutlined style={{ fontSize: '30px' }} /> */}
        add
      </Button>
    </Container>
  );
}

export default ExercisesItemSearch;

const Container = styled.div`
  border: 1.5px solid rgba(117, 125, 197, 0.3);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
`;

const Img = styled.div`
  border: 2px solid rgba(1,1,1, 0.4);
  border-radius: 15px;  
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
export const Title = styled.div`
  font-size: var(--middleText-size);
  font-weight: var(--middleText-weight);
`;
const Block = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 15px;
  border: 2px solid rgb(233, 236, 239);
  background-color: rgb(233, 236, 239);
  color: rgb(111, 112, 114);
  font-size: var(--smallText-size);
  font-weight: var(--smallText-weight);
`;