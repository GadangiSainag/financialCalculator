// src/components/AnimatedNumber.tsx
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

interface AnimatedNumberProps {
  value: number | undefined;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value }) => {
  const { number } = useSpring({
    from: { number: 10 },
    number: value,
    delay: 50,
    config: { duration: 650 },
  });

  return (
    <animated.div>{number.to((n) => n.toFixed(2))}</animated.div>
  );
};

export default AnimatedNumber;
