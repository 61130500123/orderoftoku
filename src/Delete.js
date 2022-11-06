import firebase from "./config";

async function Delete(event_name) {
    const eventRef = firebase.firestore().collection("post").doc(event_name);
    await eventRef.delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });

};

export default Delete;