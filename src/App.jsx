const MESSAGES = [
  { text: "How do I get better at React?" },
  { text: "Just build something!" },
  { text: "OK! What should I build?" },
  { text: "Iono. Just Google it?" },
  { text: "Oh! This course looks cool!" },
  { text: "Send me the link?!" },
  { text: "20ReactApps.com!" },
];

function Message({ message, index }) {
  const even = index % 2 === 0;

  return (
    <div className={(even ? "justify-start" : "justify-end") + " flex mb-2.5"}>
      <div
        className={
          (even ? "visible" : "invisible") +
          " flex flex-wrap content-center text-3xl"
        }
      >
        🐷
      </div>
      <div
        className={
          (even ? "bg-green-400" : "bg-red-400") +
          " p-2 text-white font-semibold rounded-md mx-1"
        }
      >
        {message}
      </div>
      <div
        className={
          (even ? "invisible" : "visible") +
          " flex flex-wrap content-center text-3xl"
        }
      >
        🐻
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-wrap content-center justify-center h-screen bg-green-100 bg-food-pattern">
      <div className="flex flex-col w-11/12 p-4 bg-green-900 bg-opacity-50 rounded-lg shadow-md sm:w-5/12 h-4/6">
        {MESSAGES.map((message, index) => (
          <Message message={message.text} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
