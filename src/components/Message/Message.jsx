import DotsMessage from "./DotsMessage";
import TextMessage from "./TextMessage";

function Message({ message, messageIndex, index }) {
  const isVisibleMessage = index <= messageIndex;
  const isTypingMessage = index === messageIndex + 1;
  const isEven = index % 2 === 0;

  if (isTypingMessage) {
    return <DotsMessage isEven={isEven} />;
  }

  if (isVisibleMessage) {
    return <TextMessage text={message.text} index={index} isEven={isEven} />;
  }

  return <div />;
}

export default Message;
