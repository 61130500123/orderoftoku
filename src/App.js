import './styles.css';
import Nav from './nav.js';
import Home from './pages/Home';
import User from './Auth/user';
import KamenRider from './pages/kamenRider'
import SuperSentai from './pages/superSentai'
import Series from './pages/series'
import Movies from './pages/movies'
import Toys from './pages/toys'
import { Route , Routes } from 'react-router-dom';
import Header from './header/Header';
 
const App = () => {
    return(
        <>
            <Header />
            <Nav />
            <div className='container'>
                <Routes>
                    <Route path="/" exact component={Home} />
                    <Route path="/kamen-rider" exact component={KamenRider} />
                    <Route path="/super-sentai" exact component={SuperSentai} />
                    <Route path="/toys" exact component={Toys} />
                    <Route path="/series" exact component={Series} />
                    <Route path="/movies" exact component={Movies} />
                    <Route path="/user" exact component={User} />
                </Routes>
            </div>
        </>
    )
}


export default App;

