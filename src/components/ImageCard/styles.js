import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 90px;
  height: 90px;
  border-radius: 16px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #ffffff;
  font-size: 16px;
`;