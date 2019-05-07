import React, { Component } from 'react';
import Router from './Router';
import { Header } from './components/Header';
import { Footer } from "./components/Footer";
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
        <div>
            <Header />
            <Router />
            <Footer />
        </div>
            
        );
    }
}

export default App;

