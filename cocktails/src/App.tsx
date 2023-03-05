import { Route, Routes, useLocation, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import Hero from "./features/Hero/Hero";
import DetailedCocktail from "./features/CocktailDisplay/DetailedCocktail";

export default function App(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />} />
                <Route
                    path="cocktail/:cocktailName"
                    element={<CocktailPage />}
                />
            </Route>
        </Routes>
    );
}

function Layout(): JSX.Element {
    return (
        <>
            <Navbar></Navbar>
            <Section>
                <Outlet />
            </Section>
        </>
    );
}

function Homepage(): JSX.Element {
    return (
        <>
            <Hero></Hero>
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
