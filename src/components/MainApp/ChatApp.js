import React, { useRef, useState } from "react";
import "./chat-styles.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Nav from "./Nav";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBH02KvcuIyzBojrP0z52m8rpYBQR_73Hg",
    authDomain: "robotronics-2021.firebaseapp.com",
    projectId: "robotronics-2021",
    storageBucket: "robotronics-2021.appspot.com",
    messagingSenderId: "513144849351",
    appId: "1:513144849351:web:5c7daedf925bc7cf298fe2",
    measurementId: "G-94RG6578RS",
  });
} else {
  firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function ChatApp() {
  const [user] = useAuthState(auth);

  return (
    <div>
      {/* {user ? <Nav chat="false" /> : <Nav chat="true" />} */}
      <section>
        {user ? (
          <>
            <Nav chat="true" />
            <ChatRoom />
          </>
        ) : (
          <>
            <Nav chat="false" />
          </>
        )}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      <button
        onClick={signInWithGoogle}
        class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
      >
        Chat
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button
        onClick={() => auth.signOut()}
        class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
      >
        Sign Out
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    )
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main style={{ height: "75vh" }}>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form
        class="rounded"
        onSubmit={sendMessage}
        style={{
          height: "10vh",
          position: "fixed",
          bottom: 0,
          backgroundColor: "white",
          width: "100%",
          display: "flex",
          fontSize: "1.5rem",
        }}
      >
        <input
          class="rounded-r"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type..."
          style={{
            color: "whitesmoke",
            lineHeight: 1.5,
            width: "100%",
            fontSize: "1.5rem",
            background: "#333",
            outline: "none",
            border: "none",
            padding: "0 10px",
          }}
        />

        <button
          type="submit"
          disabled={!formValue}
          style={{ width: "20%", height: "100%", padding: 0 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="text-white p-2 bg-green-500 rounded"
            style={{ width: "100%", height: "100%" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          className="pfp"
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p
          style={{
            overflow: "wrap",
            wordWrap: "break-word",
            maxWidth: "600px",
            lineHeight: "34px",
            padding: "10px 20px",
            borderRadius: "25px",
            position: "relative",
            textAlign: "center",
          }}
        >
          {text}
        </p>
      </div>
    </>
  );
}

export { ChatApp, SignIn, SignOut };
