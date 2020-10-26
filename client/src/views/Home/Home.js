import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import AddToCartButton from "./../../components/AddToCartButton/AddToCartButton.js";
import './Home.css';

function Home() {
    return (
        <div className="App">
            <Link to="/Product/watermelon-cucumber">Watermelon Cucumber</Link>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                ></a>
                <AddToCartButton />
            </header>
        </div>
    );

export default Home;
