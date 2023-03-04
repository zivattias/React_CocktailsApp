import Alert from "@mui/material/Alert";

export default function SearchError(props: any) {
    return (
        <Alert sx={{ marginY: "2em" }} severity="error">
            Couldn't find a cocktail according to your search - "{props.query}"
        </Alert>
    );
}
