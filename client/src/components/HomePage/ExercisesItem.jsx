import styled from 'styled-components';
import { PlusCircleOutlined, EllipsisOutlined } from '@ant-design/icons';
import { useState } from 'react';
import ApproachesItem from './Exercises/ApproachesItem';
import { useDispatch } from 'react-redux';
import { removeEvent } from '../../feature/exercises/exercises-slise';

function ExercisesItem({ event, setModal }) {
  const dispatch = useDispatch()

  console.log('event', event)
  return (
    <Container>
      <TopBlock>
        <Block>
          {/* <Img /> */}
          <Title fs={15}>{event.title}</Title>
        </Block>
        <Block>
          {/* <PlusCircleOutlined style={{ fontSize: '20px' }} onClick={() => setModal(event)} /> */}
          <Title onClick={() => setModal(event)}>🎲</Title>
          <Title onClick={() => dispatch(removeEvent(event.id))}>Удалить</Title>
          <EllipsisOutlined rotate={90} style={{ fontSize: '20px' }} />
        </Block>
      </TopBlock>

      {event.approaches && (
        <BlockApproach>
          {event.approaches.map(item => <ApproachesItem item={item} event={event} />)}
        </BlockApproach>
      )}
    </Container>
  );
}

export default ExercisesItem;

const Container = styled.div`
  border: 1.5px solid rgba(117, 125, 197, 0.3);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;
const TopBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BottomBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const Img = styled.div`
  border: 2px solid rgba(1,1,1, 0.4);
  border-radius: 15px;  
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
const Title = styled.div`
  font-size: var(--smallText-size);
  font-weight: var(--smallText-weight);
  cursor: pointer;
`;
const Block = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BlockApproach = styled.div`
  width: 100%;
  margin-top: 15px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  gap: 5px;
`;