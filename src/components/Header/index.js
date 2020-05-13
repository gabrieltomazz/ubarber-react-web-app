import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '../Notifications';

import Logo from '../../assets/logo-purple.svg';
import { Container, Content, Profile } from './styles';


export default function Header() {

    const {name, user_picture_file } = useSelector(state => state.user.profile);


  return (
    <Container > 
        <Content>
            <nav> 
                <img src={Logo} alt="UBarber"/> 
                <Link to="/dashboard">Dashboard </Link>
            </nav>

            <aside>
                <Notifications />
                <Profile>   
                    <div>
                        <strong> {name} </strong>
                        <Link to="/profile"> Meu Perfil </Link>
                    </div>

                    <img 
                        src = { user_picture_file.url ? user_picture_file.url : "https://api.adorable.io/avatars/50/abott@adorable.pngCopy" }
                        alt = "Gabriel Tomaz"
                    />
                </Profile>
            </aside>
        </Content>
    </Container>
  );
}
