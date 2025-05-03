import React from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background : string;
}

interface FetchGenresResponse{
    count: number;
    results : Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = React.useState<Genre[]>([]);
    const [error, setError] = React.useState('');
    const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let controller = new AbortController()
    console.log(isLoading)
    apiClient.get<FetchGenresResponse>('/genres',{signal : controller.signal})
    .then(res => {
      setGenres(res.data.results || []);
      setLoading(false);
    })
    .catch(err => {
        setLoading(false);
        if (err instanceof CanceledError) return;
        setError(err.message);
    });
       
    return () => controller.abort();
  },[]);

  return {genres,error,isLoading};
}

export default useGenres;