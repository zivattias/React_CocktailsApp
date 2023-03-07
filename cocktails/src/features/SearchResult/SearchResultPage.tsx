import { useLocation } from "react-router-dom";
import SearchResult from "./SearchResult";

export default function SearchResultsPage(props: any) {
    const { state } = useLocation();

    return <SearchResult open={true} query={state[1]} results={state[0]} />;
}
