import React, {useEffect, useState} from 'react';
import {Card, Title} from './styles';
import {Skeleton} from '../index';

export default function ImageCard({photo, title}) {
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = photo;
        imageLoader.onload = () => setImageLoaded(true);
    }, [photo]);

    return (
      <>
          {imageLoaded ? (
            <Card photo={photo}>
                <Title>{title}</Title>
            </Card>
          ) : <Skeleton width={'90px'} height={'90px'}/>}

      </>
    );
}