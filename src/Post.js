import React, { useRef, useEffect, useCallback, useState } from 'react'
import firebase from './config';
// import { useNavigate } from "react-router-dom";

const PostModal = ({ showModal, setShowModal }) => {

    // let history = useNavigate();

    const postObj = {};

    var post_pic = ''

    const [post, setPost] = useState({ ...postObj });
    const [image, setImage] = useState('');
    const [error, setError] = useState(false);
    const [imgPreview, setImgPreview] = useState(null);

    const onChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = async (addPost, e) => {
        e.preventDefault();
        try {
            if (!image) {
                post_pic = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
            }
            else {
                var ref = firebase.storage().ref()
                const name = new Date() + '-' + image.name;
                console.log(name)
                const metadata = {
                    contentType: image.type
                }
                const task = ref.child(name).put(image, metadata)
                await task
                    .then(snapshot => snapshot.ref.getDownloadURL())
                    .then(url => {
                        console.log(url);
                        post_pic = url;
                    });
            }
            console.log("Start of creation")
            await firebase
                .firestore()
                .collection("post")
                .doc(post.post_name)
                .set({
                    post_name: post.post_name,
                    post_pic: post_pic,
                    post_description: post.description 
                });
            // history.push("/")
            // setTimeout(close(), 2000)
            console.log("Create post success")
        } catch (e) {
            console.error("An error has occured: ", error);
        }
    };


    const modalRef = useRef();

    function close(){
        setShowModal(false)
    }


    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
                console.log('I pressed');
            }
        },
        [setShowModal, showModal]
    );

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

    const handleImageChange = (e) => {
        setError(false);
        const selected = e.target.files[0];
        const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
        if (selected && ALLOWED_TYPES.includes(selected.type)) {
            setImage(selected)
            let reader = new FileReader();
            reader.onloadend = () => {
                setImgPreview(reader.result);
            };
            reader.readAsDataURL(selected);
            console.log("imgage change success")
        } else {
            console.log("imgage change error")
            setError(true);
        }
    };


    return (
        <>
            {showModal ? (
                <div>
                <form onSubmit={onSubmit.bind(this, post)}>
                    <h1>Create New Post</h1>
                    <label>Topic</label>
                    <input type="text" id="post_name" name="post_name" onChange={onChange} required />
                    <label>IMG</label>
                    <input type="file" id="fileUpload" onChange={handleImageChange}/>
                    <label>description</label>
                    <input type="text" id="post_description" name="post_description" onChange={onChange} required />
                    <div>
                        <button type="sumbit">Create New Post</button>
                    </div>
                </form>
                {/* <button 
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)} /> */}
                </div>
            ) : null}
        </>
    )

}
export default PostModal



