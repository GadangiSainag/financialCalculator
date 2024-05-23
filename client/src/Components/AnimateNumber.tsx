// src/components/AnimatedNumber.tsx
import React from "react";
import { useSpring, animated } from "@react-spring/web";

interface AnimatedNumberProps {
  value: number | undefined;
  symbol: string | undefined;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, symbol }) => {
  const { number } = useSpring({
    from: { number: 10 },
    number: value,
    delay: 50,
    config: { duration: 650 },
  });

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <span style={{ marginRight: "5px" }}>{symbol}</span>
      <animated.h3>{number.to((n) => n.toFixed(2))}</animated.h3>
    </div>
  );
};

export default AnimatedNumber;
