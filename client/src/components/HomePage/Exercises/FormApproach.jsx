import styled from 'styled-components';

function FormApproach({ onSubmit, forInput, event }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    forInput.setValuesInput(prevEvent => ({
      ...prevEvent,
      [name]: value
    }));
  }
  return (
    <Container>
      <Title>{event.title}</Title>
      <Form onSubmit={onSubmit}>
        <Label>
          <Title>Кг:</Title>
          <Input type="number" name="kg"
            value={forInput.approach} onChange={handleInputChange} />
        </Label>
        <Label>
          <Title>Повт:</Title>
          <Input type="number" name="repeat"
            value={forInput.repeat} onChange={handleInputChange} />
        </Label>
        <button type="submit">Готово</button>
      </Form>
    </Container>
  );
}

export default FormApproach;

const Container = styled.div`
  border: 3px solid rgba(1,1,1, 0.3);
  border-radius: 15px;
  padding: 20px;
  height: 100%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const Title = styled.label`
  font-size: 26px;
  font-weight: 600;
`;
const Text = styled.label`
  
`;
const Input = styled.input`
  background-color: rgba(1,1,1, 0.1);
  color: rgba(1,1,1, 0.8);
  width: 20%;
  height: 40px;
  border: none;
  border-radius: 5px;
`;