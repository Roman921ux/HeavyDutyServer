import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function Main() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  padding: 20px;
  /* border: 2px solid rgba(1,1,1, 0.4); */
  /* border-radius: 15px; */
  /* max-height: 50%; */
`;