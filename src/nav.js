import React, { useContext } from "react";
import { AuthContext } from "./Auth/Auth";
import firebaseConfig from "./config";
import Header from "./header/Header";

const Nav = () => {
    const { currentUser } = useContext( AuthContext );

    const RenderBar = () => {
        if(!currentUser){
        return(
        <>
        <nav className='nav'>
            <ul > 
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to='/kamen-rider'>Kamen Rider</CustomLink>
                    <CustomLink to='/super-sentai'>Super Sentai</CustomLink>
                    <CustomLink to='/toy'>Toy</CustomLink>
                    <CustomLink to='/series'>Series</CustomLink>
                    <CustomLink to='/movies'>Movies</CustomLink>
                    <CustomLink to='/login'>Log In</CustomLink>
                    <CustomLink to='/register'>Register</CustomLink>
            </ul>
        </nav>
        </>
        ) 
    }else{
        return(
            <>
            <nav className='nav'>
                <ul > 
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to='/kamen-rider'>Kamen Rider</CustomLink>
                    <CustomLink to='/super-sentai'>Super Sentai</CustomLink>
                    <CustomLink to='/toy'>Toy</CustomLink>
                    <CustomLink to='/series'>Series</CustomLink>
                    <CustomLink to='/movies'>Movies</CustomLink>
                    <CustomLink to='/user'>{currentUser.email.name}</CustomLink> 
                    <button onClick={() => firebaseConfig.auth().signOut()} class="btn btn-danger">Sign Out</button>
                </ul>
            </nav> 
            </>
        )
        }
    }
    function CustomLink({href,children,...props}){
        const path = window.location.pathname
        return(
            <li className={path === href ? "active" : ""}>
                <a href={href} {...props}>{children}</a>
            </li>
        )
    }
    
    return(
        <>
                <Header />
                <RenderBar />
        </>
    )
}

export default Nav
