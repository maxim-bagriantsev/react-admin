import * as React from 'react';
import {Admin, CustomRoutes, Resource} from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import {Route} from 'react-router';

import {authProvider} from './authProvider';
import {Login, Layout} from './layout';
import {Dashboard} from './pages/dashboard';
import russianMessages from './i18n/ru';
import {lightTheme} from './layout/themes';

import visitors from './pages/visitors';
import orders from './pages/orders';
import products from './pages/products';
import invoices from './invoices';
import categories from './pages/categories';
import reviews from './pages/reviews';

import Configuration from './pages/configuration/Configuration';
import Segments from './pages/segments/Segments';
import Welcome from "./pages/welcome/Welcome";
import dataProvider from "./dataProvider/dataProvider";
import {UsersList} from "./pages/users/UsersList";
import {UserCreate} from "./pages/users/UserCreate";
import {UserEdit} from "./pages/users/UserEdit";
import {SkillsList} from "./pages/skills/SkillsList";
import {SkillCreate} from "./pages/skills/SkillsCreate";
import {SkillEdit} from "./pages/skills/SkillEdit";
import {SpecializationsList} from "./pages/specializations/SpecializationsList";
import {SpecializationCreate} from "./pages/specializations/SpecializationCreate";
import {SpecializationEdit} from "./pages/specializations/SpecializationEdit";
import {MaterialsList} from "./pages/materials/MaterialsList";
import {MaterialCreate} from "./pages/materials/MaterialCreate";
import {MaterialEdit} from "./pages/materials/MaterialEdit";
import Profile from "./pages/profile/Profile";
import Debug from "./pages/debug/Debug";
import NotificationPage from "./pages/notificationPage/NotificationPage";
import AccountSettings from "./pages/settings/AccountSettings";
import Error401 from "./pages/401/401";
import Error404 from "./pages/404/404";
import Error500 from "./pages/500/500";

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
                <Route path="/profile" element={<AccountSettings/>}/>
                <Route path="/debug" element={<Debug/>}/>
                <Route path="/notification" element={<NotificationPage/>}/>
                <Route path="/segments" element={<Segments/>}/>
                <Route path="/welcome" element={<Welcome/>}/>
                <Route path="/401" element={<Error401/>}/>
                <Route path="/404" element={<Error404/>}/>
                <Route path="/500" element={<Error500/>}/>
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
