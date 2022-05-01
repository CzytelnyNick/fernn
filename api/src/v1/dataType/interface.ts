import { Notyfication } from "../db/table/notyfication.entity"

export interface argument {
    param: any,
    query: any,
    headers: any
}
export interface response {
    date: Date,
    result: boolean,
    response: any,
    sessionInfo: any,
    error: object
}
