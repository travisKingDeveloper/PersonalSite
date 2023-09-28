import React from 'react';
import './App.css';
import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './components/About';
import WorkHistory from './components/WorkHistory';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Index from "./components/Skills";

function App() {
    // Available Colours:
    // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

    // edit this variable to change the color theme
    const color = "green";

    return (
        <>
            <Nav color={color}/>
            <Header color={color}/>
            <About color={color}/>
            <Index color={color}/>
            <WorkHistory color={color}/>
            <Contact color={color}/>
            <Footer/>
        </>
    );
}

export default App;
