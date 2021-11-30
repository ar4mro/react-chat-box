import { motion } from "framer-motion";

function TextMessage({ text, isEven }) {
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
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
    </motion.div>
  );
}

export default TextMessage;
