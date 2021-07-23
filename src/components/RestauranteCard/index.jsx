import React from 'react';
import {Address, Photo, Restaurant, RestaurantInfo, Title} from './styles';
import ReactStars from 'react-rating-stars-component/dist/react-stars';
import restaurante from '../../assets/restaurante-fake.png';

export default function RestauranteCard() {
    return (
      <Restaurant>
          <RestaurantInfo>
              <Title>Nome do Restaurante</Title>
              <ReactStars count={5} size={16} isHalf value={4} activeColor="#e7711c" edit={false}/>
              <Address>Alameda Santiago do Chile 205</Address>
          </RestaurantInfo>
          <Photo src={restaurante} alt="Foto do restaurante"/>
      </Restaurant>
    );
}