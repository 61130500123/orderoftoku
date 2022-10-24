import { useState, useEffect } from "react";
import firebase from "./config";
import { BrowserRouter as Router, Switch, useParams, Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { DeleteButton, PostDetailContainer, PostDetailNav, PostSideBarContent, PostSideBarWrapper, SideBarButton} from "./ShowPostDetailStyle";
// import Delete from "./Delete";


const PostDetail = () => {
    //   let history = useHistory();

    const { postName } = useParams();
    const [details, setDetails] = useState({});

    function getDetails() {
        const docRef = firebase.firestore().collection("post").doc(postName);
        console.log(postName);
        docRef.get().then((doc) => {
            const docData = doc.data();
            setDetails(docData);
            console.log(docData);
        });
    }

    useEffect(() => {
        getDetails();
    }, []);


    return (
        // <AuthProvider>
        <PostDetailContainer>
            <Router>
                <PostDetailNav>
                    <PostSideBarWrapper>
                        <PostSideBarContent>
                            <img src={details.post_pic} id="post_pic" />
                            <h2 for="post_pic">{details.post_name}</h2>
                        </PostSideBarContent>
                        <PostSideBarContent>
                            <label>Event Management</label>
                            <Link to={`/post/${details.post_name}/Dashboard`}>
                                <SideBarButton>Dashboard</SideBarButton>
                            </Link>
                        </PostSideBarContent>
                        <PostSideBarContent>
                            <label>Event Page</label>

                            <Link to={`/post/${details.post_name}/Information`}>
                                <SideBarButton>Event Information</SideBarButton>
                            </Link>
                            {/* <Link to={`/post/${details.post_name}/OrganizerInfo`}>
                                <SideBarButton>Organizer Information</SideBarButton>
                            </Link>
                            <Link to={`/post/${details.post_name}/ShowImg`}>
                                <SideBarButton>Event Poster</SideBarButton>
                            </Link> */}
                            {/* <Link to={`/event/${details.event_name}/ListParticipant`}>
                  <SideBarButton>List Participant</SideBarButton>
                  </Link> */}
                        </PostSideBarContent>
                        {/* <PostSideBarContent>
                            <Link to={`/event/${details.event_name}?Delete`}>
                                <DeleteButton onClick={() => {
                                    const confirmBox = window.confirm(
                                        "Do you really want to delete this Event?"
                                    )
                                    if (confirmBox === true) {
                                        Delete(details.event_name)
                                        //   history.push("/event")
                                    }
                                }}>Delete Event</DeleteButton>
                            </Link>
                        </PostSideBarContent> */}
                    </PostSideBarWrapper>
                </PostDetailNav>
            </Router>
        </PostDetailContainer>
        // </AuthProvider>
    );
};

export default PostDetail;