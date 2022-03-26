import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Select = styled.select`
  width: 100%;
  margin-bottom: 1.125rem;
  padding: 1.25rem 0 1rem;
  

  border: none;
  border-bottom: 0.0625rem solid var(--purple);

  font-size: 1rem;
  color: var(--text-black);
  &:focus {
    outline: 0;
  }
`
export const Input = styled.input`
  width: 100%;
  margin-bottom: 1.125rem;
  padding: 1.25rem 0 1rem;

  border: none;
  border-bottom: 0.0625rem solid var(--purple);

  font-size: 1rem;
  &::placeholder{
     color: var(--text-black); 
  }
  
  &:focus {
    outline: 0;
  }
`
export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.3125rem;

    font-size: 0.875rem;
    color: var(--text-black);
`;

export const SubmitButton = styled.button`
  width: 314px;
  height: 36px;
  padding: 10px 40px;
  margin: 0 auto;
  
  font-size: 1rem;
  font-weight: bold;
  color: var(--white);

  background-color: var(--purple);
  border: 1px solid var(--purple);
  border-radius: 71px;
`;