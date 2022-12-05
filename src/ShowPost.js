import { useState, useEffect } from 'react'
import firebase from './config';
import { CardContainer, Body, Title, Date, Image, CardButton } from './InfoCard/InfoCardStyle'
import { Link } from 'react-router-dom'

function ShowPost(){
    const [posts, setPosts] = useState([]);

    const ref = firebase.firestore().collection('post').orderBy('timestamp', 'desc');

    function getInfo() {
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                console.log(doc.data())
                const post = doc.data()
                // if(post.archive == false)
                //     items.push(post)
                items.push(post)
            })
            setPosts(items);
        })
    }

    useEffect(() => {
        getInfo();
    }, []);


    return(
        <>
            {posts.map((info) => (
                <CardContainer>
                    <div key={info.post_name}>
                                <Image src={info.post_pic}></Image>
                                <Body>
                                    <Title>{info.post_name}</Title>
                                </Body>
                            </div>
                            <Link to={`/post/${info.post_name}`} >
                                <CardButton>Detail</CardButton>
                            </Link>
                </CardContainer>
            ))}
        </>
    )
}
export default ShowPost