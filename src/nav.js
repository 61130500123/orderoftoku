import React, { useContext } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Nav = () => {
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
            </ul>
        </nav>
        </>
        ) 
    }

    function CustomLink({ to,children,...props}){
        const resolvePath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvePath.pathname, end:true })

        return(
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>
                    {children}
                </Link>
            </li>
        )
    }

export default Nav
