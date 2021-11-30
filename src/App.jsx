import { useState } from "react";
import useInterval from "@use-it/interval";

import Message from "@components/Message";

const MESSAGES = [
  { text: "How do I get better at React?" },
  { text: "Just build something!" },
  { text: "OK! What should I build?" },
  { text: "Iono. Just Google it?" },
  { text: "Oh! This course looks cool!" },
  { text: "Send me the link?!" },
  { text: "20ReactApps.com!" },
];

function App() {
  const [messageIndex, setMessageIndex] = useState(0);

  useInterval(() => {
    setMessageIndex((messageIndex) => messageIndex + 1);
  }, 2000);

  return (
    <div className="flex flex-wrap content-center justify-center h-screen bg-green-100 bg-food-pattern">
      <div className="flex flex-col w-11/12 p-4 bg-green-900 bg-opacity-50 rounded-lg shadow-md sm:w-4/12 h-4/6">
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
