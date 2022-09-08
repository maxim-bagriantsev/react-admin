import React from 'react';
import {
    SimpleForm,
    Create,
    TextInput,
    SelectInput,
} from 'react-admin';



export const SkillCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source='code' name={'code'}/>
            <TextInput source='description' name={'description'}/>
            <TextInput source='title'/>
            <SelectInput
                source='level'
                choices={[
                    {id: 'junior', name: 'junior'},
                    {id: 'middle', name: 'middle'},
                    {id: 'senior', name: 'senior'},
                ]}
            />
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
    </Create>
);