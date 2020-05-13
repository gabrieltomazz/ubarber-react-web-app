import React, { useState, useRef, useEffect } from 'react';
import api from '../../../services/api';
import { useField } from '@rocketseat/unform';
import { Container } from './styles';

export default function AvatarInput() {

    const { defaultValue, registerField } = useField('user_picture_file');

    const [file, setFile] = useState(defaultValue && defaultValue.id);
    const [preview, setPreview ] = useState(defaultValue && defaultValue.url); 
    
    const ref = useRef();

    useEffect( () => {
        if(ref.current) {
            registerField({
                name: 'file_id',
                ref: ref.current,
                path: 'dataset.file',
            });
        }
    }, [ref, registerField]);
    
    async function handleChange(e) {
        const data = new FormData();

        data.append('file', e.target.files[0]);
        
        const response = await api.post('files', data);
        console.tron.log(response);
        const {id, url} = response.data;
        
        setFile(id);
        setPreview(url);
    }

    return (
        <Container>
            <label htmlFor="user_picture_file"> 
                <img src={preview || "https://api.adorable.io/avatars/50/abott@adorable.pngCopy"} alt= " " />

                <input 
                    type="file"
                    id="user_picture_file"
                    accept= "image/*"
                    data-file={file}
                    onChange={handleChange}
                    ref={ref}
                />    
            </label>
        </Container>
    );
}