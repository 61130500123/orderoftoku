import { useState, useEffect } from 'react'
import firebase from '../../firebase/config'
import { CardContainer, Body, Title, Date, Image, CardButton } from './InfoCardStyle'
import { Link } from 'react-router-dom'

function InfoCard() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection('event');
    

    function getInfo() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                console.log(doc.data())
                const event = doc.data()
                if(event.archive == false)
                    items.push(event)
                // posts.push(doc.data())
            })
            setPosts(items);
            setLoading(false);
        })
    }

    useEffect(() => {
        getInfo();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            {posts.map((info) => (
                <CardContainer>
                            <div key={info.event_name}>
                                <Image src={info.event_pic}></Image>
                                <Body>
                                    <Title>{info.event_name}</Title>
                                    <Date>{info.event_place}</Date>
                                    <p><b>วัน-เวลา ที่จัด:</b> {info.event_date.toDate().toLocaleString()}</p>
                                    <p><b>จำนวนผู้เข้าร่วม: </b>{info.listParticipant.length}/{info.max_enroll} คน</p>
                                </Body>
                            </div>
                            <Link to={`/event/${info.event_name}`} >
                                <CardButton>Detail</CardButton>
                            </Link>
                </CardContainer>
            ))}
        </>
    )

}

export default InfoCard

