//Import libs
import {stringify} from 'query-string';

// Import types
import {
    CreateParams, DeleteManyParams, DeleteParams,
    fetchUtils,
    GetManyParams,
    GetManyReferenceParams,
    GetOneParams, UpdateManyParams, UpdateParams
} from 'react-admin';

import {GetListParams} from "../lib/types/getListParams";

const apiUrl = 'http://localhost:3001/api';

const httpClient = fetchUtils.fetchJson;


export default {
    getList: (resource: string, params: GetListParams) => {
        const {page, perPage} = params.pagination;
        const {field, order} = params.sort;

        const query = {
            sort: JSON.stringify(field, order),
            filter: JSON.stringify(params.filter),
            page: JSON.stringify(page),
            pageSize: JSON.stringify(perPage),
        };

        const url = decodeURIComponent(`${apiUrl}/${resource}?${stringify(query)}`);

        return httpClient(url).then(({headers, json}) => ({
            ...json,
            total: json.meta.total
        }));
    },


    getOne: (resource: string, params: GetOneParams) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({json}) => ({
            data: json,
        })),

    getMany: (resource: string, params: GetManyParams) => {
        const query = {
            filter: JSON.stringify({ids: params.ids}),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({json}) => ({data: json}));
    },
//зная одну сущность получить другую, связанную сущность с ним
    getManyReference: (resource:string, params: GetManyReferenceParams) => {
        const {page, perPage} = params.pagination;
        const {field, order} = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({headers, json}) => ({
            data: {...json},
            total: json.meta.total
        }));
    },

    create: (resource:string, params:CreateParams, token: string) =>
        httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
            // token: 123
        }).then(({json}) => ({
            data: {...params.data, id: json.id},
        })),

    update: (resource: string, params: UpdateParams) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({json}) => ({data: json})),

    updateMany: (resource: string, params: UpdateManyParams) => {
        const query = {
            filter: JSON.stringify({id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({json}) => ({data: json}));
    },

    delete: (resource:string, params: DeleteParams) => {
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({json}) => ({data: json}))
    },

    deleteMany: (resource:string, params: DeleteManyParams) => {
        const query = {
            filter: JSON.stringify({id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'DELETE',
            // @ts-ignore
            body: JSON.stringify(params.data),
        }).then(({json}) => ({data: json}));
    },
};