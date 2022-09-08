import React from 'react';
import {
    List,
    Filter,
    TextField,
    SearchInput, Datagrid,
} from 'react-admin';


const UserFilter = (props: any) => (
    <Filter {...props}>
        <SearchInput placeholder='Customer Email' source='email' resettable alwaysOn/>
    </Filter>
);

export const UsersList = (props: any) => {

    return (
        <List {...props}
              filters={<UserFilter/>}
              title='Лист пользователей'
              sort={{field: 'id', order: 'ASC'}}
              perPage={25}
        >
            <Datagrid
                rowClick={(id) => `${id}`}
                {...props}
            >
                {/*<CustomTextField disabled source='id'/>*/}
                <TextField source='name'/>
                <TextField source='lastName'/>
                <TextField source='email'/>
                <TextField source='status' />
            </Datagrid>
        </List>
    )
};




