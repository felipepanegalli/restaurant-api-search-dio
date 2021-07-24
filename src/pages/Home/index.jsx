import React, {useState} from 'react';
import {Carousel, CarouselTitle, Container, Logo, Search, Wrapper} from './styles';
import logo from '../../assets/logo.svg';
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import restaurante from '../../assets/restaurante-fake.png';
import {Card, RestaurantCard, Modal, Map} from '../../components';


export default function Home() {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState('');
    const [modalOpened, setModalOpened] = useState(false);
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            setQuery(inputValue);
        }
    }

    return (
      <Wrapper>
          <Container>
              <Search>
                  <Logo src={logo} alt="Logo do sistema"/>
                  <TextField
                    label='Pesquisar Restaurante'
                    outlined={true}
                    trailingIcon={<MaterialIcon role="button" icon="search"/>}
                  ><Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.currentTarget.value)}
                    onKeyPress={handleKeyPress}
                  />
                  </TextField>
                  <CarouselTitle>Restaurantes na área</CarouselTitle>
                  <Carousel {...settings}>
                      <Card photo={restaurante} title={'Nome do restaurante 01'}/>
                      <Card photo={restaurante} title={'Nome do restaurante 02'}/>
                      <Card photo={restaurante} title={'Nome do restaurante 03'}/>
                      <Card photo={restaurante} title={'Nome do restaurante 04'}/>
                      <Card photo={restaurante} title={'Nome do restaurante 05'}/>
                      <Card photo={restaurante} title={'Nome do restaurante 06'}/>
                      <Card photo={restaurante} title={'Nome do restaurante 07'}/>
                  </Carousel>
                  <button onClick={() => setModalOpened(true)}>Abrir modal</button>
              </Search>
              <RestaurantCard/>
          </Container>
          <Map query={query}/>
          <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/>
      </Wrapper>
    );
}
