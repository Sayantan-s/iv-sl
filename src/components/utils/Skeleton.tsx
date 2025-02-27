import clsx from "clsx";
import { motion } from "motion/react";
type SkeletonProps = {
  className?: string;
  width?: string | number;
  height?: string | number;
  circle?: boolean;
  count?: number;
  animate?: boolean;
};
export const Skeleton = ({
  className,
  circle = false,
  count = 1,
  animate = true,
}: SkeletonProps) => {
  const skeletons = Array(count).fill(0);
  return (
    <>
      {skeletons.map((_, index) => (
        <motion.div
          key={index}
          className={clsx(
            "bg-gray-100 overflow-hidden relative",
            circle ? "rounded-full" : "rounded-md",
            className
          )}
          initial={animate ? { opacity: 0.5 } : {}}
          animate={
            animate
              ? {
                  opacity: [0.5, 0.8, 0.5],
                }
              : {}
          }
          transition={
            animate
              ? {
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }
              : {}
          }
        >
          {animate && (
            <motion.div
              className="absolute inset-0 -translate-x-full"
              animate={{
                translateX: ["100%", "-100%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.div>
          )}
        </motion.div>
      ))}
    </>
  );
};
