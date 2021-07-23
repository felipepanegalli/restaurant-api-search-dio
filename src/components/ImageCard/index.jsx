import React from 'react';
import {Card, Title} from './styles';

export default function ImageCard({photo, title}) {
    return <Card photo={photo}><Title>{title}</Title></Card>;
}