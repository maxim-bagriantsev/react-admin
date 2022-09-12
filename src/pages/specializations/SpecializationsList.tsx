import React from 'react';
import {
    List,
    Filter,
    Datagrid,
    TextField,
    SearchInput,
    SimpleForm,
    Create,
    Edit,
    TextInput,
    ReferenceField,
    ReferenceInput,
    SelectInput
} from 'react-admin';



const USpecializationsFilter = (props: any) => (
    <Filter {...props}>
        <SearchInput placeholder='Customer Email' source='email' resettable alwaysOn/>
    </Filter>
);

export const SpecializationsList = (props: any) => {


    return (
        <List {...props}
              filters={<USpecializationsFilter/>}
              title='Лист специализаций'
              // sort={{field: 'id', order: 'ASC'}}
        >
            <Datagrid rowClick={(id) => `${id}`}>
                {/*@ts-ignore*/}
                <TextField disabled source='id'/>
                <TextField source='code'/>
                <TextField source='description'/>
                <TextField source='pageDescription'/>
                <TextField source='pageDescription'/>
                <TextField source='pageTitle'/>
                <TextField source='status'/>
                {/*<SelectInput*/}
                {/*    source='status'*/}
                {/*    choices={[*/}
                {/*        { id: 'true', name: 'visible' },*/}
                {/*        { id: 'false', name: 'not visible' },*/}
                {/*    ]}*/}
                {/*/>*/}
                <TextField source='maxSalary'/>
                <TextField source='minSalary'/>
                <TextField source='title'/>
            </Datagrid>
        </List>
    )
};






