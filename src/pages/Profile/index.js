import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import AvatarInput from './AvatarInput';

import { updateProfileRequest } from '../../store/modules/user/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handelSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handelSubmit}>
        <AvatarInput name="file_id" /> 

        <Input name="name" placeholder="Nome Completo" /> 
        <Input type="email" name="email" placeholder="Seu endereço de E-mail" />

        <hr /> 
        <Input type="password" name="oldPassword" placeholder="Sua senha atual" /> 
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input type="password" name="passwordConfirm" placeholder="Confirme a nova senha0" /> 
        
        <button type="submit"> Atualizar Perfil</button>
      </Form>

      <button type="button"> Sair do Ubarber </button>
    </Container>
  );
}
