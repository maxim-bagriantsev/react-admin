import React from 'react';
import {
    SimpleForm,
    Edit,
    TextInput,
    SelectInput
} from 'react-admin';


export const MaterialEdit = (props: any) => (
    <Edit {...props} title='Редактировать специализацию'>
        <SimpleForm>
            <TextInput disabled source='id'/>
            <TextInput source='url'/>
            <TextInput source='label'/>
            <TextInput source='description'/>
            <SelectInput
                source='type'
                choices={[
                    {id: 'article', name: 'article'},
                    {id: 'video', name: 'video'},
                ]}
            />
            <TextInput source='time'/>
            <SelectInput
                source='is_free'
                choices={[
                    {id: 'true', name: 'true'},
                    {id: 'false', name: 'false'},
                ]}
            />
            <SelectInput
                source='hidden'
                choices={[
                    {id: 'true', name: 'true'},
                    {id: 'false', name: 'false'},
                ]}
            />
        </SimpleForm>
    </Edit>
);

