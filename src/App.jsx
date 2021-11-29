import { useState } from "react";
import useInterval from "@use-it/interval";

const MESSAGES = [
  { text: "How do I get better at React?" },
  { text: "Just build something!" },
  { text: "OK! What should I build?" },
  { text: "Iono. Just Google it?" },
  { text: "Oh! This course looks cool!" },
  { text: "Send me the link?!" },
  { text: "20ReactApps.com!" },
];

function MessageText({ text, isEven }) {
  return (
    <div
      className={(isEven ? "justify-start" : "justify-end") + " flex mb-2.5"}
    >
      <div
        className={
          (isEven ? "visible" : "invisible") +
          " flex flex-wrap content-center text-3xl"
        }
      >
        🐷
      </div>
      <div
        className={
          (isEven ? "bg-green-400" : "bg-red-400") +
          " p-2 text-white font-semibold rounded-md mx-1"
        }
      >
        {text}
      </div>
      <div
        className={
          (isEven ? "invisible" : "visible") +
          " flex flex-wrap content-center text-3xl"
        }
      >
        🐻
      </div>
    </div>
  );
}

function MessageDots({ isEven }) {
  return (
    <div
      className={(isEven ? "justify-start pl-8" : "justify-end pr-8") + " flex"}
    >
      <div className="flex justify-center w-3/12 px-4 py-3 bg-gray-100 bg-opacity-25 rounded-3xl">
        <div className="w-2 h-2 bg-gray-200 bg-opacity-75 rounded-full animate-pulse" />
        <div className="w-2 h-2 mx-1 bg-gray-200 bg-opacity-75 rounded-full animate-pulse" />
        <div className="w-2 h-2 bg-gray-200 bg-opacity-75 rounded-full animate-pulse" />
      </div>
    </div>
  );
}

function Message({ message, messageIndex, index }) {
  const isVisibleMessage = index <= messageIndex;
  const isTypingMessage = index === messageIndex + 1;
  const isEven = index % 2 === 0;

  if (isTypingMessage) {
    return <MessageDots isEven={isEven} />;
  }

  if (isVisibleMessage) {
    return <MessageText text={message.text} index={index} isEven={isEven} />;
  }

  return <div />;
}

function App() {
  const [messageIndex, setMessageIndex] = useState(0);

  useInterval(() => {
    setMessageIndex((messageIndex) => messageIndex + 1);
  }, 2000);

  return (
    <div className="flex flex-wrap content-center justify-center h-screen bg-green-100 bg-food-pattern">
      <div className="flex flex-col w-11/12 p-4 bg-green-900 bg-opacity-50 rounded-lg shadow-md sm:w-5/12 h-4/6">
        {MESSAGES.map((message, index) => {
          return (
            <Message
              key={index}
              message={message}
              index={index}
              messageIndex={messageIndex}
            />
          );
        })}
        {/* <MessageDots isEven={false} /> */}
      </div>
    </div>
  );
}

export default App;
