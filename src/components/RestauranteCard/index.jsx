import React, {useState} from 'react';
import {Address, Photo, Restaurant, RestaurantInfo, Title} from './styles';
import ReactStars from 'react-rating-stars-component/dist/react-stars';
import restaurante from '../../assets/restaurante-fake.png';
import {Skeleton} from '../index';

export default function RestauranteCard({restaurant, onClick}) {
    const [imageLoaded, setImageLoaded] = useState(false);


    return (
      <Restaurant onClick={onClick}>
          <RestaurantInfo>
              <Title>{restaurant.name}</Title>
              <ReactStars count={5} size={16} isHalf value={restaurant.rating} activeColor="#e7711c" edit={false}/>
              <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
          </RestaurantInfo>
          <Photo
            imageLoaded={imageLoaded}
            src={restaurant.photos ?
              restaurant.photos[0].getUrl() :
              restaurante}
            alt={restaurant.name}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && <Skeleton height={'100px'} width={'100px'} />}
      </Restaurant>
    );
}