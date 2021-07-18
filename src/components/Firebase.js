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

export const db = firebase.firestore();
//dodanie danych do bazy 
export const addGame = (e) => {
  data.forEach((item) => {
    db.collection("games").add(item);
  });
};

export function useTopGames() {
  const [topGames, setTopGames] = useState([]);

  useEffect(() => {
    db.collection("games").onSnapshot((snapshot) => {
      const games = [];
      snapshot.docs.forEach((game) =>
        games.push({ id: game.id, ...game.data() })
      );
      setTopGames(games);
    });
  }, []);

  return topGames;


}

export function useMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("contacts").onSnapshot((snapshot) => {
      const contacts = [];
      snapshot.docs.forEach((contact) =>
      contacts.push({ title:contact.title,...contact.data() })
      );
      setMessages(contacts);
    });
  }, []);

  return messages;
}

export const addArticle = (event) => {
  const form = document.querySelector("#articleForm");
  const created = Date.now();
  const title = form.title.value;
  const description = form.description.value;
  const content = form.content.value;
  const img = form.img.value;

  const article = {
    created,
    title,
    description,
    content,
    img,
  };

  db.collection("articles").add(article);
  form.reset();
};

export function useTopArticles() {
  const [topArticles, setTopArticles] = useState([]);

  useEffect(() => {
    db.collection("articles").onSnapshot((snapshot) => {
      const articles = [];
      snapshot.docs.forEach((article) =>
        articles.push({
          id: article.index,
          ...article.data(),
        })
      );
      setTopArticles(articles);
    });
  }, []);

  return topArticles;
}
