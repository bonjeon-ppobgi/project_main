import '../styles/App.css';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import TodayPerfume from "../pages/TodayWeather";
import Archive from "../pages/Archive";
import KeyWord from '../pages/KeyWord';
import TodayWeather from '../pages/TodayWeather';
import Main from '../pages/Main';
import Contents from '../pages/Contents';
import Footer from './common/Footer';
import ResultPage from '../pages/Result';
import MainPage from '../pages/Mainpage';



function App(props) {

  return (
    <div>
        <Switch>
        
            <Route exact path='/' component={MainPage} />
            <Route exact path='/perfume' component={Archive} />
            <Route exact path='/mind' component={TodayWeather} />
            <Route exact path='/keyword' component={KeyWord} />
            <Route exact path='/main' component={Main} />
            <Route exact path='/contents' component={Contents} />
            <Route exact path='/result' component={ResultPage} />
 

        </Switch>
        <Footer/>

    

        
    </div>

  );
}

export default App;
