import { useInView } from "framer-motion";
import { useRef } from "react";

// Used only where isInView boolean is needed (e.g. CountUp trigger).
// For animations, prefer whileInView directly on motion elements.
export function useScrollAnimation(threshold = 0) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  return { ref, isInView };
}
