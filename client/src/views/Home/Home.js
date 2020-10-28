import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';
import ShoppingCartButton from "./../../components/ShoppingCartButton/ShoppingCartButton";

function Home() {
    return (
        <div className="App">
            <header className="App-header">
				<ShoppingCartButton />
            </header>
        </div>
    );
}

export default Home;
