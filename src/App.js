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




   let component
   switch (window.location.pathname) {
    case "/":
        component = <Home />
        break
    case "/kamen-rider":
        component = <KamenRider />
        break
    case "/super-sentai":
        component = <SuperSentai />
        break
    case "/toy":
        component = <Toys />
        break
    case "/series":
        component = <Series />
        break
    case "/movie":
        component = <Movies />
        break
    case "/user":
        component = <User />
        break
    case "/login":
        component = <Login />
        break     
    case "/register":
        component = <Register />
        break   
   }
   
    const App = () => {
        return(
            <>
                <AuthProvider>
                    <Nav />
                    <div className='container'>{component}</div>
                </AuthProvider>
            </>
        )
}


export default App

