import React from 'react';
import {Card, Button} from "@mui/material";
import {useNotify} from "react-admin";

const NotificationPage = () => {

    const notify = useNotify()

    return (
        <Card sx={{mt: 8, p: 1}}>
            <Button onClick={() => notify('Congratulation', {type: 'info'})}>
                Show notification
            </Button>
            {/*можно брать ключи из словаря*/}
            <Button onClick={() => notify(`resources.authors.name`, {type: 'success'})}>
                Show success notification
            </Button>
            <Button onClick={() => notify(`resources.authors.name`, {type: 'info'})}>
                Show info notification
            </Button>
            <Button onClick={() => notify(`resources.authors.name`, {type: 'error'})}>
                Show error notification
            </Button>
            <Button onClick={() => notify(`resources.authors.name`, {type: 'warning'})}>
                Show warning notification
            </Button>
        </Card>
    )
}

export default NotificationPage;

