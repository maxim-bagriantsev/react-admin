import {Edit, SelectInput, SimpleForm, TextInput} from "react-admin";
import React from "react";

export const SpecializationEdit = (props: any) => (
    <Edit {...props} title='Редактировать специализацию'>
        <SimpleForm>
            <TextInput disabled source='id'/>
            <TextInput source='code'/>
            <TextInput source='description'/>
            <TextInput source='pageDescription'/>
            <TextInput source='pageDescription'/>
            <TextInput source='pageTitle'/>
            <SelectInput
                source='status'
                choices={[
                    {id: 'visible', name: 'visible'},
                    {id: 'not visible', name: 'not visible'},
                ]}
            />
            <TextInput source='maxSalary'/>
            <TextInput source='minSalary'/>
            <TextInput source='title'/>
        </SimpleForm>
    </Edit>
);