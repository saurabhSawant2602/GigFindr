import React, { useEffect, useState } from "react";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";

function Bot() {
  const [chatBox, setChatBox] = useState(true);
  const [username, setUsername] = useState(null);

  const usName = localStorage.getItem("user");
  let nextTrigger;

  useEffect(function() {
    setUsername(usName);
    console.log(username);
    nextTrigger = `${username === null ? "Ask Name" : "Name"}`;
    console.log(nextTrigger);
  });

  const handleChatBot = () => {
    setChatBox(false);
  };

  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to GigFindr",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Please enter your name",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, Please select your issue",
      // message: `${
      //   username === null ? "Hi {previousValue}" : `Hi ${username._id}`
      // }, Please select your issue`,
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        { value: "AI", label: "AI", trigger: "AI" },
        { value: "Video", label: "Video", trigger: "Video" },
      ],
    },
    {
      id: "AI",
      message: "Thanks for telling AI issue",
      end: true,
    },
    {
      id: "Video",
      message: "Thanks for telling video issue",
      end: true,
    },
  ];

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: "0",
          right: "0",
          zIndex: "1",
          backgroundColor: "#6e48aa",
        }}
      >
        {chatBox && (
          <>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <span
                style={{ outline: "none", background: "none" }}
                onClick={() => handleChatBot()}
              >
                Close
              </span>
            </div>

            <Segment floated="right" hideHeader={true}>
              <ChatBot steps={steps} />
            </Segment>
          </>
        )}
      </div>
    </>
  );
}

export default Bot;
