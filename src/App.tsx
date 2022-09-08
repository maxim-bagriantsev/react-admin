import * as React from 'react';
import {Admin, CustomRoutes, Resource} from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import {Route} from 'react-router';

import {authProvider} from './authProvider';
import {Login, Layout} from './layout';
import {Dashboard} from './dashboard';
import russianMessages from './i18n/ru';
import {lightTheme} from './layout/themes';

import visitors from './visitors';
import orders from './orders';
import products from './products';
import invoices from './invoices';
import categories from './categories';
import reviews from './reviews';

import Configuration from './configuration/Configuration';
import Segments from './segments/Segments';
import Welcome from "./welcome/Welcome";
import dataProvider from "./dataProvider";
import {UsersList} from "./users/UsersList";
import {UserCreate} from "./users/UserCreate";
import {UserEdit} from "./users/UserEdit";
import {SkillsList} from "./skills/SkillsList";
import {SkillCreate} from "./skills/SkillsCreate";
import {SkillEdit} from "./skills/SkillEdit";
import {SpecializationsList} from "./specializations/SpecializationsList";
import {SpecializationCreate} from "./specializations/SpecializationCreate";
import {SpecializationEdit} from "./specializations/SpecializationEdit";
import {MaterialsList} from "./materials/MaterialsList";
import {MaterialCreate} from "./materials/MaterialCreate";
import {MaterialEdit} from "./materials/MaterialEdit";
import Profile from "./profile/Profile";
import Debug from "./debug/Debug";

const i18nProvider = polyglotI18nProvider(locale => {
    if (locale === 'fr') {
        return import('./i18n/fr').then(messages => messages.default);
    } else if (locale === 'en') {
        return import('./i18n/en').then(messages => messages.default);
    }

    // Always fallback on russian
    return russianMessages;
}, 'ru');

const App = () => {


    return (
        <Admin
            title=""
            // @ts-ignore
            dataProvider={dataProvider}
            authProvider={authProvider}
            dashboard={Dashboard}
            loginPage={Login}
            layout={Layout}
            i18nProvider={i18nProvider}
            disableTelemetry
            theme={lightTheme}
        >
            <CustomRoutes>
                <Route path="/configuration" element={<Configuration/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/debug" element={<Debug/>}/>
                <Route path="/segments" element={<Segments/>}/>
                <Route path="/welcome" element={<Welcome/>}/>
            </CustomRoutes>
            <Resource name="customers" {...visitors} />
            <Resource
                name="commands"
                {...orders}
                options={{label: 'Orders'}}
            />
            <Resource name="invoices" {...invoices} />
            <Resource name="products" {...products} />
            <Resource name="categories" {...categories} />
            <Resource name="reviews" {...reviews} />
            <Resource name="users" list={UsersList} edit={UserEdit} create={UserCreate}/>
            <Resource name='skills' list={SkillsList} edit={SkillEdit} create={SkillCreate}/>
            <Resource name='specializations' list={SpecializationsList} create={SpecializationCreate}
                      edit={SpecializationEdit}/>
            <Resource name='materials' list={MaterialsList} create={MaterialCreate} edit={MaterialEdit}/>
        </Admin>
    );
};

export default App;
