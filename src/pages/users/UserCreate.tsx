import {Create, SimpleForm, TextInput} from "react-admin";
import React from "react";

export const UserCreate = (props: any) => {
    return (
        <Create {...props}>
            <SimpleForm>
                {/*<ReferenceInput name={'usersId'} reference={'users'}>*/}
                {/*    <SelectInput optionText='email'/>*/}
                {/*</ReferenceInput>*/}
                <TextInput source='name' name={'name'}/>
                <TextInput source='lastName' name={'lastName'}/>
                <TextInput source='email' name={'email'}/>
                <TextInput source='password' name={'password'}/>
                <TextInput source='confirm password ' name={'confirm password'}/>
            </SimpleForm>
        </Create>
    );
};