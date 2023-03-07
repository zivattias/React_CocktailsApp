import { Route, Routes, useLocation, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import Hero from "./features/Hero/Hero";
import DetailedCocktail from "./features/CocktailDisplay/DetailedCocktail";
import SearchResultsPage from "./features/SearchResult/SearchResultPage";

export default function App(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Homepage />}>
                <Route
                    path="cocktails/search"
                    element={<SearchResultsPage />}
                />
            </Route>
            <Route path="cocktails/:cocktailId" element={<CocktailPage />} />
        </Routes>
    );
}

function Homepage(): JSX.Element {
    return (
        <>
            <Navbar></Navbar>
            <Section>
                <Hero />
            </Section>
            <Outlet />
        </>
    );
}

function CocktailPage(): JSX.Element {
    let { state } = useLocation();

    return (
        <>
            <DetailedCocktail
                cocktailData={state.cocktailData}
                ingredients={state.ingredients}
            ></DetailedCocktail>
        </>
    );
}
