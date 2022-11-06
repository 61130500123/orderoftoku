import React, { useState } from 'react';
import firebase from './config';
import './styles.css';
import Nav from './nav.js';
import Home from './pages/Home';
import User from './Auth/user';
import KamenRider from './pages/kamenRider'
import SuperSentai from './pages/superSentai'
import Series from './pages/series'
import Movies from './pages/movies'
import Toys from './pages/toys'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import PostModal from './Post';
import { NewPost } from './Reuse/Header';
import ShowPost from './ShowPost';
import PostDetail from './PostDetail';
import ShowPostDetail from './ShowPostDetail';



function App() {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    // async function testGet(){
    //     const doc = firebase.firestore().collection("test").doc("new")
    //     var doc_snap = await doc.get()
    //     console.log(doc_snap.data())
    // }
    // testGet()

    // const data = {
    //     name: 'Los Angeles',
    //     state: 'CA',
    //     country: 'USA'
    //   };

    // async function testCreate(){
    //     const res = await firebase.firestore().collection('test').doc('testCreate').set(data);
    //     console.log(res)
    // }
    // testCreate()

    return (
        // <BrowserRouter>
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
                    <Route path="/post/:postName" element={<ShowPostDetail />} />
                </Routes>
            </div>
            <NewPost onClick={openModal}>Create Post</NewPost>
            <PostModal showModal={showModal} setShowModal={setShowModal} />
            <ShowPost/>

        </>
    )
}


export default App;

