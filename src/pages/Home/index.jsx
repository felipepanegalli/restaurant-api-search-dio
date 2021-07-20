import React, {useState} from 'react';
import {Container, Search} from './styles';
import logo from '../../assets/logo.svg';
import TextField, {Input} from '@material/react-text-field';


export default function Home() {
    const [inputValue, setInputValue] = useState('');

    return (
      <Container>
          <Search>
              <img src={logo} alt="Logo do sistema"/>
              <TextField
                label='Pesquisar'
                outlined={true}
                // onTrailingIconSelect={() => this.setState({value: ''})}
                // trailingIcon={<MaterialIcon role="button" icon="delete"/>}
              ><Input
                value={inputValue}
                onChange={(e) => setInputValue(e.currentTarget.value)}/>
              </TextField>
          </Search>
      </Container>
    );
}
