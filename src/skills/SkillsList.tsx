import React from 'react';
import {
    List,
    Filter,
    TextField,
    SearchInput,
    Datagrid, useStore
} from 'react-admin';
import {useDebug} from "../hooks/useDebug";


const SkillsFilter = (props: any) => (
    <Filter {...props}>
        <SearchInput placeholder='Skill id' source='id' resettable alwaysOn/>
    </Filter>
);

export const SkillsList = (props: any) => {

    const {debug} = useDebug(); // отображение по условию

    return (
        <List {...props}
              filters={<SkillsFilter/>}
              title='Лист Навыков'
              sort={{field: 'id', order: 'ASC'}}
        >
            <Datagrid rowClick={(id) => `${id}`}>
                {/*@ts-ignore*/}
                {debug && <TextField disabled source='id'/>}
                <TextField source='code'/>
                <TextField source='description'/>
                <TextField source='level'/>
                <TextField source='title'/>
                <TextField source='difficulty'/>
            </Datagrid>
        </List>
    )
};


