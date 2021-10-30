import {ISiteFetchException} from "../../interfaces/ISiteFetchException";

export const isSiteFetchException = (p: any): p is ISiteFetchException => !!p.message;
