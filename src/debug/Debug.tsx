import React from 'react';
import {Card, Switch} from "@mui/material";
import {useDebug} from "../hooks/useDebug";


const Debug = () => {
    const {debug, setDebug} = useDebug();

    const handleChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        setDebug(checked)
    }

    return (
        <Card sx={{mt: 8}}>
            Debug
            <Switch
                checked={debug}
                onChange={handleChange}
                inputProps={{'aria-label': 'controlled'}}
            />
        </Card>
    );
};

export default Debug;