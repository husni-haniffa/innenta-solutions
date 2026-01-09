"use client"
import { motion } from "framer-motion"

type MarqueeRowProps = {
  items: React.ReactNode[]
  direction?: "left" | "right"
  speed: number
}

const MarqueeRow = ({items, direction, speed} : MarqueeRowProps) => {
  const isLeft = direction === "left"
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: isLeft ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div key={index} className="shrink-0">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default MarqueeRow