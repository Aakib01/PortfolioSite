import React from "react";
import Lottie from "react-lottie";

type Props = {
  animationPath: string;
  style?: React.CSSProperties;
};

const GreetingLottie = ({ animationPath , style}: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
    style: style,
  };

  return (
    <div onClick={() => null}>
      {/* @ts-ignore */}
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
