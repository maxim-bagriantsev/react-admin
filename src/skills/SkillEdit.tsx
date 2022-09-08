import React from 'react';
import {
    SimpleForm,
    TextInput,
    SelectInput,
    Edit
} from 'react-admin';


export const SkillEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source='id'/>
            <TextInput source='code'/>
            <TextInput source='description'/>
            <SelectInput
                source='level'
                choices={[
                    {id: 'junior', name: 'junior'},
                    {id: 'middle', name: 'middle'},
                    {id: 'senior', name: 'senior'},
                ]}
            />
            <TextInput source='title'/>
            <SelectInput
                source='difficulty'
                choices={[
                    {id: '1', name: '1'},
                    {id: '2', name: '2'},
                    {id: '3', name: '3'},
                    {id: '4', name: '4'},
                ]}
            />
        </SimpleForm>
    </Edit>
);