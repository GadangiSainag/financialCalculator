// src/components/AnimatedNumber.tsx
import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { formatNumberCurrency } from "../utils/formatNumber";

interface AnimatedNumberProps {
  value: number | undefined;
  symbol: string | undefined;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, symbol }) => {
  const { number } = useSpring({
    from: { number: 10 },
    number: value,
    delay: 40,
    config: { duration: 450 },
  });

  return (
    <div style={{ display: "flex", flexDirection: "row-reverse"}}>
      
      <animated.h3>{formatNumberCurrency(number)}</animated.h3>

      {/* <animated.h3>{number.to((n) => n.toFixed(2))}</animated.h3> */}
      <h3 style={{ marginRight: "5px" }}>{symbol}</h3>
    </div>
  );
};

export default AnimatedNumber;
