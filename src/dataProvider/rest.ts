import simpleRestProvider from 'ra-data-simple-rest';
import {DataProvider, GetListParams} from "react-admin";

const restProvider = simpleRestProvider('http://localhost:3001/api');

// const delayedDataProvider = new Proxy(restProvider, {
//     get: (target, name, self) =>
//         name === 'then' // as we await for the dataProvider, JS calls then on it. We must trap that call or else the dataProvider will be called with the then method
//             ? self
//             : (resource: string, params: any) =>
//                   new Promise(resolve =>
//                       setTimeout(
//                           () =>
//                               resolve(
//                                   restProvider[name as string](resource, params)
//                               ),
//                           500
//                       )
//                   ),
// });

const delayedDataProvider: DataProvider<string> = {
    getList: async (resource: string, params: GetListParams) => {
        return {
            data: [],
            total: 10
        }
    }

} as any


export default delayedDataProvider;
