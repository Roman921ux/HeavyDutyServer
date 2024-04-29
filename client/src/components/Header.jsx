import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <NavLink to='/' style={{ color: 'inherit' }}><Logo>Heavy Duty</Logo></NavLink>
      <NavLink to='/exercises' style={{ color: 'inherit' }}><Nav>Упражнения</Nav></NavLink>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  /* border: 2px solid rgba(145, 171, 219, 0.4); */
  border-radius: 5px;
  height: 50px;
  margin-bottom: 20px;
`;
const Logo = styled.span`
  font-family: "Bebas Neue", sans-serif;
  font-style: normal;
  font-size: var(--largeText-size);
  letter-spacing: 10px;
  cursor: pointer;
`
const Nav = styled.span`
  font-size: var(--middleText-size);
  font-weight: var(--middleText-weight);
  cursor: pointer;
`

