import { motion } from "framer-motion";

function DotsMessage({ isEven }) {
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.25 }}
      className={(isEven ? "justify-start pl-8" : "justify-end pr-8") + " flex"}
    >
      <div className="flex justify-center w-3/12 px-4 py-3 bg-gray-100 bg-opacity-25 rounded-3xl">
        <div className="w-2 h-2 bg-gray-200 bg-opacity-75 rounded-full animate-pulse" />
        <div className="w-2 h-2 mx-1 bg-gray-200 bg-opacity-75 rounded-full animate-pulse" />
        <div className="w-2 h-2 bg-gray-200 bg-opacity-75 rounded-full animate-pulse" />
      </div>
    </motion.div>
  );
}

export default DotsMessage;
