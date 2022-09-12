import React from 'react';
import {Title, useLocaleState, useTheme, useTranslate} from "react-admin";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {darkTheme, lightTheme} from "../../layout/themes";
import Card from "@mui/material/Card";

const Profile = () => {
    const translate = useTranslate();
    const [locale, setLocale] = useLocaleState();
    const [theme, setTheme] = useTheme();

    return (
        <Card>
            <Title title={translate('pos.profile')} />
            <CardContent>
              <h1>This is page Profile</h1>
            </CardContent>
        </Card>
    );
};

export default Profile;