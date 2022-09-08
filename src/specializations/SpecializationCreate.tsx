import {Create, SelectInput, SimpleForm, TextInput} from "react-admin";
import React from "react";

export const SpecializationCreate = (props: any) => (
    <Create {...props}>
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
                    {id: 'true', name: 'true'},
                    {id: 'false', name: 'false'},
                ]}
            />
            <TextInput source='maxSalary'/>
            <TextInput source='minSalary'/>
            <TextInput source='title'/>
        </SimpleForm>
    </Create>
);