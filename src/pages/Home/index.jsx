import React, {useState} from 'react';
import {Container, Logo, Map, Search, Wrapper} from './styles';
import logo from '../../assets/logo.svg';
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';


export default function Home() {
    const [inputValue, setInputValue] = useState('');

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
                    onChange={(e) => setInputValue(e.currentTarget.value)}/>
                  </TextField>
              </Search>
          </Container>
          <Map />
      </Wrapper>
    );
}
