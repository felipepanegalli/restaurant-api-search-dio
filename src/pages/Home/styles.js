import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 400px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding: 16px;
`;

export const Logo = styled.img`
  height: 64px;
  margin: 15px
`;

export const Map = styled.div`
  background-color: #61dafb;
  width: calc(100% - 360px);
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 40px;
  }
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
`;

export const ModalTitle = styled.p`
  margin-bottom: 10px;
  letter-spacing: .1px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
`;

export const ModalContent = styled.p`
  margin-bottom: 10px;
  letter-spacing: .15px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  text-transform: none;
  font-size: 16px;
  font-weight: normal;
  line-height: 19px;
`;