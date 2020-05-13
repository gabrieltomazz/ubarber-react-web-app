import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { signUpRequest } from '../../../src/store/modules/auth/actions';

// import { Container } from './styles';
import Logo from '../../assets/logo.svg'

const schema = Yup.object().shape({
  name: Yup.string().required('O campo nome é obrigatório !'),
  email: Yup.string().email('Preencha um E-mail válido').required('O campo E-mail é obrigatório!'),
  password: Yup.string().min(6, 'Mínimo 6 caracteres').required('O campo senha é obrigatório! '),
});

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({name, email, password}) { 
    dispatch(signUpRequest(name, email, password));  
  }

  return (
    <>
      <img src={Logo} alt="UBarber"/> 
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name"  placeholder="Nome Completo" />     
        <Input name="email" type="email"  placeholder="Seu E-mail" />     
        <Input name="password" type="password"  placeholder="Seu Senha" /> 
               
        <button type="submit">{loading ?'Carregando .. ': 'Criar conta'}</button>
        <Link to="/">Já tenho conta</Link>
      </Form>
    </>
  );
}
