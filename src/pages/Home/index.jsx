import React, {useState} from 'react';
import {Carousel, CarouselTitle, Container, Logo, ModalContent, ModalTitle, Search, Wrapper} from './styles';
import logo from '../../assets/logo.svg';
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import restaurante from '../../assets/restaurante-fake.png';
import {Card, RestaurantCard, Modal, Map, Loader, Skeleton} from '../../components';
import {useSelector} from 'react-redux';


export default function Home() {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState('');
    const [placeId, setPlaceId] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);
    const {restaurants, restaurantSelected} = useSelector((state) => state.restaurants);
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        adaptiveHeight: true,
    };

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            setQuery(inputValue);
        }
    }

    function handleOpenModal(placeId) {
        setPlaceId(placeId);
        setModalOpened(true);
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
                  {restaurants.length > 0 ? (
                    <>
                        <CarouselTitle>Restaurantes na área</CarouselTitle>
                        <Carousel {...settings}>
                            {restaurants.map((restaurant) => (
                              <Card
                                key={restaurant.place_id}
                                photo={restaurant.photos ?
                                  restaurant.photos[0].getUrl() :
                                  restaurante}
                                title={restaurant.name}/>
                            ))}

                        </Carousel></>
                  ) : (<Loader/>)}

              </Search>
              {restaurants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.place_id}
                  onClick={() => handleOpenModal(restaurant.place_id)}
                  restaurant={restaurant}
                />
              ))}
          </Container>
          <Map query={query} placeId={placeId}/>
          <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
              {restaurantSelected ? (
                <>
                    <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                    <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
                    <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
                    <ModalContent>{restaurantSelected?.opening_hours?.isOpen() ? 'Aberto agora' : 'Fechado'}</ModalContent>
                </>
              ) : (
                <>
                    <Skeleton width={'10px'} height={'20px'}/>
                    <Skeleton width={'10px'} height={'10px'}/>
                    <Skeleton width={'10px'} height={'10px'}/>
                    <Skeleton width={'10px'} height={'10px'}/>
                </>
              )}
          </Modal>
      </Wrapper>
    );
}
