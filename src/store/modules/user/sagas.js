import { takeLatest, call, put, all }  from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
    try{

        const { name, email, file_id, ...rest } = payload.data;
        
        const profile =  Object.assign( 
            { name, email, file_id }, 
            rest.oldPassword ? rest : {});
        
        const response = yield call(api.put, 'users', profile);
        
        console.tron.log('response');
        console.tron.log(response);


        toast.success('Perfil atualizado com sucesso !');

        yield put(updateProfileSuccess(response.data))
    }catch(err) {
        console.tron.log(err);

        toast.error('Erro ao atualizar Perfil, verifique seus dados');
        yield put(updateProfileFailure());
    }
}

export default all([    
    takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),   
]);