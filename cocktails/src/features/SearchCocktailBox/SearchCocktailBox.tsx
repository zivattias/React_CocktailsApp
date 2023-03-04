import { useState } from "react";
import { Box, Typography, TextField, Divider } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";
import SearchError from "../SearchError/SearchError";
import SearchResults from "../SearchResult/SearchResult";

export default function SearchCocktailBox(props: any): JSX.Element {
    const [name, setName] = useState("");
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [results, setResults] = useState(null);

    // SearchResult modal states
    const [open, setOpen] = useState(true);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(false);
        setQuery(name);

        if (name.includes("&") || name.includes("?")) {
            setError(true);
        } else {
            let endpoint = "";
            name.length > 1
                ? (endpoint =
                      "https://thecocktaildb.com/api/json/v1/1/search.php?s=" +
                      name)
                : (endpoint =
                      "https://thecocktaildb.com/api/json/v1/1/search.php?f=" +
                      name);

            console.log(endpoint);
            setLoading(true);
            axios
                .get(endpoint)
                .then((response) => {
                    // No valid results returned
                    if (!response || response.data.drinks === null) {
                        setError(true);
                        setResults(null);
                    } else {
                        // Valid results
                        setResults(response.data.drinks);
                        setOpen(true);
                    }
                })
                .then(() => {
                    setLoading(false);
                    setName("");
                });
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "40vw",
                height: "auto",
                background: "rgba(255, 255, 255, 0.35)",
                padding: "2em",
                borderRadius: "25px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "1em",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: "bold",
                        padding: "0.5em",
                        marginBottom: "0.75em",
                    }}
                >
                    Lookup a cocktail by name...
                </Typography>
                <Divider sx={{ width: "100%" }}></Divider>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: "bold",
                        padding: "0.5em",
                        marginBottom: "0.75em",
                    }}
                >
                    ...or by first letter
                </Typography>
                <TextField
                    label="e.g. Negroni / N (case insensitive)"
                    variant="outlined"
                    sx={{ width: "30em", marginBottom: "1em" }}
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
                <LoadingButton
                    loading={loading}
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                        maxWidth: "10em",
                        backgroundColor: "black",
                        hoverBackgroundColor: "white",
                    }}
                >
                    Search
                </LoadingButton>
            </form>

            {/* <Divider sx={{ width: "100%" }}></Divider>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "1em",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    sx={{
                        fontWeight: "bold",
                        padding: "0.5em",
                        marginBottom: "0.75em",
                    }}
                >
                    Search cocktails by first letter
                </Typography>
                <TextField
                    label="Cocktail(s) by letter"
                    variant="outlined"
                    sx={{ width: "30em", marginBottom: "1em" }}
                    value={letter}
                    onChange={(event) => {
                        setLetter(event.target.value);
                    }}
                />
                <LoadingButton
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                        maxWidth: "10em",
                        backgroundColor: "black",
                        hoverBackgroundColor: "white",
                    }}
                >
                    Search
                </LoadingButton>
            </form> */}
            {error && <SearchError query={query}></SearchError>}
            {results ? (
                <SearchResults
                    open={open}
                    handleClose={setOpen}
                    query={query}
                    results={results}
                ></SearchResults>
            ) : null}
        </Box>
    );
}
