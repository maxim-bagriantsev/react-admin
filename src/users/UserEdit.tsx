import {Edit, SelectInput, SimpleForm, TextInput} from "react-admin";
import React from "react";

export const UserEdit = (props: any) => (
    <Edit {...props} title='Редактировать пользователя'>
        <SimpleForm>
            <TextInput disabled source='id' name={'id'}/>
            <TextInput source='name' name={'name'}/>
            <TextInput source='lastName' name={'lastName'}/>
            <TextInput source='email' name={'email'}/>
            <SelectInput
                source='status'
                choices={[
                    {id: 'active', name: 'active'},
                    {id: 'pending', name: 'pending'},
                ]}
            />
        </SimpleForm>
    </Edit>
);