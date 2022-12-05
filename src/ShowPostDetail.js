import { useState, useEffect } from "react";
import { ResponsiveContainer } from 'recharts';
import firebase from "./config";
import { useParams, Link, useNavigate } from "react-router-dom";
import { PostDetailContent, PostDetailWrapper } from "./ShowPostDetailStyle";
import { InputInfo } from "./Reuse/InputBox";
import { HeaderNFooter, SimpleButton } from "./Reuse/Content";
import Delete from "./Delete";

const ShowPostDetail = () => {

    const history = useNavigate()

    const { postName } = useParams();
    const [details, setDetails] = useState({});
    const [post, setPost] = useState({});
    const [inputsDisabled, setInputsDisabled] = useState(true)

    function getDetails() {
        const docRef = firebase.firestore().collection("post").doc(postName);
        console.log(postName);
        docRef.get().then((doc) => {
            const docData = doc.data();
            setDetails(docData);
            setPost(docData);
            // oldFaculty.push(docData["faculty"])
            console.log(details);
        });
    }

    const onSubmit = async (editPost, e) => {
        console.log(post)
        e.preventDefault();
        try {
            if (details["post_name"] == post.post_name) {
                await firebase
                    .firestore()
                    .collection("post")
                    .doc(details["post_name"])
                    .update({
                        ...post
                    });
                history(-1)
            }

            if (details["post_name"] != post.post_name) {
                await firebase
                    .firestore()
                    .collection("post")
                    .doc(post.post_name)
                    .set({
                        ...post
                    });
                await Delete(details["post_name"])
                history(-1)
            }


        } catch (e) {
            console.error("An error has occured: ", e);
        }
    };

    const onChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PostDetailWrapper onSubmit={onSubmit.bind(this, post)}>
                <HeaderNFooter>
                    <h1>Post Details</h1>
                    <SimpleButton type="button" onClick={() => setInputsDisabled(false)}>Edit</SimpleButton>
                    <Link to={`/post/${details.post_name}?Delete`}>
                    <SimpleButton type="button" onClick={() => {
                        const confirmBox = window.confirm(
                            "Do you really want to delete this Event?"
                        )
                        if (confirmBox === true) {
                            Delete(details.post_name)
                            history(-1)
                        }
                    }}>Delete</SimpleButton>
                    </Link>
                </HeaderNFooter>
                <PostDetailContent>
                    <h2>รายละเอียด</h2>
                    <InputInfo>
                        <label for="InputName">ชื่อกิจกรรม</label>
                        <input type="text" id="post_name" name="post_name" defaultValue={details.post_name} onChange={onChange} disabled={inputsDisabled} />
                    </InputInfo>
                    <InputInfo>
                        <label for="detail">คำอธิบาย</label>
                        <textarea id="description" name="post_description" rows="4" defaultValue={details.post_description} onChange={onChange} disabled={inputsDisabled}></textarea>
                    </InputInfo>
                </PostDetailContent>

                <HeaderNFooter>
                    <SimpleButton type="submit" disabled={inputsDisabled}>Submit</SimpleButton>
                </HeaderNFooter>
            </PostDetailWrapper>
        </ResponsiveContainer>
    );
};

export default ShowPostDetail;