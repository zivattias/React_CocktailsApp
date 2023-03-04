import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import Hero from "./features/Hero/Hero";
import DetailedCocktail from "./features/CocktailDisplay/DetailedCocktail";

export default function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route
                    path="/cocktail/:cocktailName"
                    element={<CocktailPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}

function Homepage(): JSX.Element {
    return (
        <>
            <Navbar></Navbar>
            <Section>
                <Hero></Hero>
            </Section>
        </>
    );
}

function CocktailPage(): JSX.Element {
    let { state } = useLocation();

    return (
        <>
            <Navbar></Navbar>
            <Section>
                <DetailedCocktail
                    cocktailData={state.cocktailData}
                    ingredients={state.ingredients}
                ></DetailedCocktail>
            </Section>
        </>
    );
}
