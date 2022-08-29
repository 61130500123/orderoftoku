import './styles.css';
import Nav from './nav.js';
import Home from './pages/Home';
import { AuthProvider } from './Auth/Auth';
import Register from './Auth/Register';
import Login from './Auth/Login';
import User from './Auth/user';
import KamenRider from './pages/kamenRider'
import SuperSentai from './pages/superSentai'
import Series from './pages/series'
import Movies from './pages/movies'
import Toys from './pages/toys'
import { Route , Routes } from 'react-router-dom';
 
const App = () => {
    return(
        <>
            <AuthProvider>
                <Nav />
                <div className='container'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/kamen-rider" element={<KamenRider />} />
                        <Route path="/super-sentai" element={<SuperSentai />} />
                        <Route path="/toys" element={<Toys />} />
                        <Route path="/series" element={<Series />} />
                        <Route path="/movies" element={<Movies />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </div>
            </AuthProvider>
        </>
    )
}


export default App;

