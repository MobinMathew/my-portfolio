import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">
      {/* Blue Aurora */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[140px]"
        animate={{
          x: [0, 300, 100, 0],
          y: [0, 150, 300, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Purple Aurora */}
      <motion.div
        className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-purple-500/20 blur-[140px]"
        animate={{
          x: [0, -250, -100, 0],
          y: [0, 200, 100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Green Aurora */}
      <motion.div
        className="absolute bottom-0 left-1/2 w-[500px] h-[500px] rounded-full bg-green-400/20 blur-[120px]"
        animate={{
          x: [0, -150, 150, 0],
          y: [0, -100, -200, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}