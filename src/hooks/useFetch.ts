import {useEffect, useState} from "react";
import {Maybe} from "../types/types";

export const useFetch = <T>(fetcher: () => Promise<T>) => {
    const [data, setData] = useState<Maybe<T>>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Maybe<string>>(null);

    useEffect(() => {
        setLoading(true);
        fetcher()
            .then(setData)
            .catch(e => setError(e.message))
            .finally(() => setLoading(false));
    }, []);

    return [data, loading, error] as [typeof data, boolean, typeof error];
}