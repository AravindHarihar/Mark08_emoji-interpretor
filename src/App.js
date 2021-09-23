import React, { useState } from "react";
import "./styles.css";

var userName = "aravind"; //prompt("enter your name.")
var bgColor = "blue";
var fntColor = "red";
//var likeCounter = 0;

var emojiDictionary = {
  "😀": "Smiling",
  "🤣": "Laughing"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  // function likeClickHandler(){
  //   var newlikeCounter = likeCounter + 1;
  //   setLikeCounter(newlikeCounter);
  //   //console.log("Liked " + likeCounter);
  // }

  const [userInput, setUserInput] = useState("");

  const [meaning, setMeaning] = useState("");

  function emojiHandler(event) {
    var userInput = event.target.value;
    console.log(userInput);

    var newMeaning = emojiDictionary[userInput];

    if (newMeaning === undefined) {
      var newMeaning = "We do not have this in our database";
    }
    setMeaning(newMeaning);
  }

  function emojiClickHandler(emoji) {
    var vallluu = emojiDictionary[emoji];
    setMeaning(vallluu);
    return vallluu;
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: bgColor }}>
        <font color={fntColor}>Emoji Interpretor {userInput}</font>
      </h1>

      <input onChange={emojiHandler} style={{ margin: "auto" }} />
      <br />
      <div style={{ padding: "2rem", fontWeight: "bolder" }}>{meaning}</div>
      <div>
        {emojisWeKnow.map((emoji) => {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
            >
              {" "}
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
