import firebase from "firebase";
import { data } from "./Data";
import { useState, useEffect } from "react";

const settings = { timestampsInSnapshots: true };

var firebaseConfig = {
    apiKey: "AIzaSyD6K_UBeeC2EwujnsrwxBgwcHW-JN0JeUw",
    authDomain: "gameworld-a20b3.firebaseapp.com",
    projectId: "gameworld-a20b3",
    storageBucket: "gameworld-a20b3.appspot.com",
    messagingSenderId: "124412031906",
    appId: "1:124412031906:web:368c522047cb5751bbb8fb",
    measurementId: "G-NN47R5618M",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings);

const db = firebase.firestore();

export const addGame = (e) => {
    data.forEach((item) => {
        db.collection("games").add(item);
    });
};

export const getTopGames = () => {
    data.forEach((item) => {
        db.collection("games").get(item);
        // console.log("GAME", item);
    });
};

export function getGames() {
    db.collection("games")
        .get()
        .then((querySnapshot) => {
            const array = [];
            querySnapshot.forEach((doc) => {
                if (doc.data().game_id < 6) {
                    // console.log("VVV", doc.data().game_id);
                    array.push({
                        ...doc.data(),
                    });
                }
            });
            console.log(array);
        });
}

export function useGame(game_id) {
    const [game, setGame] = useState([]);

    useEffect(() => {
        db.collection("games").onSnapshot((snapshot) => {
            const game = snapshot.docs[game_id].data();
            // debugger;
            // console.log("GAME", game);
            setGame(game);
        });
    }, [game_id]);
    return game;
}

// useGame();

// export function getGame(id) {
//     db.collection("games")
//         .doc(id)
//         .get()
//         .then((doc) => console.log(doc.id, " => ", doc.data()));
// }

export const getGame = (game_id) => {
    db.collection("users").doc(game_id).get();
    // .then((doc) => console.log(doc.game_id, " => ", doc.data()));
};

// export function getGame(game_id) {
//     db.collection("users")
//         .doc(game_id)
//         .get()
//         .then((doc) => console.log(doc.game_id, " => ", doc.data()));
// }
