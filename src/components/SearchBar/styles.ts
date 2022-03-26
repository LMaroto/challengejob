import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    border-bottom: 0.0625rem solid var(--dark-gray);
    
    margin-bottom: 59px;
    padding: 20px 0 16px 0;
`;
export const SearchInput = styled.input`

    width: 100%;
    margin-left: 18px;
    background: none;
    border: none;

    font-size: 16px;
    
    ::placeholder{
        font-size: 16px;
    }

    &:focus{
        outline: 0;
    }

`;