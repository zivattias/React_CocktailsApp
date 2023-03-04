import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import Hero from "./features/Hero/Hero";

function App(): JSX.Element {
    return (
        <>
            <Navbar></Navbar>
            <Section name="hero">
                <Hero></Hero>
            </Section>
        </>
    );
}

export default App;
