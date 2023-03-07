import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchResult from "./SearchResult";
import axios from "axios";

export default function SearchResultsPage(props: any) {
    const location = useLocation();
    console.log("location", location);
    const [query, setQuery] = useState("");
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!location.state) {
            console.log("Stateless");
            const searchParams = new URLSearchParams(location.search);
            console.log(searchParams, "search params");
            const cocktailName = searchParams.get("name");
            const firstLetter = searchParams.get("first_letter");

            if (cocktailName) {
                setQuery(cocktailName);
            }
            if (firstLetter) {
                setQuery(firstLetter);
            }

            let endpoint = "";
            query.length > 1
                ? (endpoint =
                      "https://thecocktaildb.com/api/json/v1/1/search.php?s=" +
                      query)
                : (endpoint =
                      "https://thecocktaildb.com/api/json/v1/1/search.php?f=" +
                      query);

            axios.get(endpoint).then((response) => {
                // No valid results returned
                if (!response || response.data.drinks === null) {
                    setData(null);
                } else {
                    // Valid results
                    setData(response.data.drinks);
                }
            });
        } else {
            console.log("Stateful");
            setData(location.state[0]);
        }
    }, [query, location.state, location.search]);

    return (
        <>
            {data && <SearchResult open={true} query={query} results={data} />}
        </>
    );
}
