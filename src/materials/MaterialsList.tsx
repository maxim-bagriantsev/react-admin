import React from 'react';
import {
    List,
    Filter,
    Datagrid,
    TextField,
    SearchInput,
} from 'react-admin';


const MaterialsFilter = (props: any) => (
    <Filter {...props}>
        <SearchInput placeholder='Search by name' source='label' resettable alwaysOn/>
    </Filter>
);

export const MaterialsList = (props: any) => {

    return (
        <List {...props}
              filters={<MaterialsFilter/>}
              title='Лист Материалов'
              sort={{field: 'id', order: 'ASC'}}
        >
            <Datagrid rowClick={(id) => `${id}`}>
                {/*@ts-ignore*/}
                <TextField disabled source='id'/>
                <TextField source='url'/>
                <TextField source='label'/>
                <TextField source='description'/>
                <TextField source='type'/>
                <TextField source='time'/>
                <TextField source='is_free'/>
                <TextField source='hidden'/>
            </Datagrid>
        </List>
    )
};

