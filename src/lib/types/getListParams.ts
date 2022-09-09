type PaginationPayload = {
    page: number;
    perPage: number;
}

type SortPayload = {
    field: string;
    order: []
}

export type  GetListParams = {
    pagination: PaginationPayload;
    sort: SortPayload;
    filter: any;
    meta?: any;
}