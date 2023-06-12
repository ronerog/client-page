import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  display: flex;
  background-color: #1A202C; 
  box-shadow: 0 0 20px 3px;

  > svg {
    position: absolute;
    color: white;
    width: 20px;
    height: 20px;
    margin-top: 15px;
    margin-left: 32px;
    cursor: pointer;
  }

  > div: last-child {
    display: flex
    align-items: center;
    justify-content: center;
    color: white;
    width: 100%;
    height: 10px;
    margin-top: 15px;
  }
`;