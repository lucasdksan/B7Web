import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex: 1;
    flex-direction: column;
    width: 100%;
`;
export const Title = styled.h1`

`;
export const AreaInputs = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 150px;
`;
export const UnicAreaInput  = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10px;
    height: 60px;
    width: 100%;
`;
export const TextInput = styled.h3`

`;
export const Input = styled.input`

`;
export const AreaDescription = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    > span{
        margin-bottom: 10px;
        font-size: 15px;
    }
    > strong{
        font-size: 20px;
    }
`;