import './App.scss';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import PageNotFound from './components/pageNotFound/PageNotFound'
import MovieDetail from './components/movieDetail/MovieDetail'

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Header></Header>
                <div className='container'>
                    <Routes >
                        <Route path='/' element={<Home />}>
                        </Route>
                        <Route path='/movie/:imdbId' element={<MovieDetail />}>
                        </Route>
                        <Route path='*' element={<PageNotFound />}>
                        </Route>
                    </Routes>
                </div>
                <Footer></Footer>
            </BrowserRouter>

        </div>
    )
}

export default App