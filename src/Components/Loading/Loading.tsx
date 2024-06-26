import React from "react";
import LottieView from "lottie-react-native";

function LoadingAnimation() {
  return <LottieView
    source={require("../../../assets/json/loading.json")}
    style={{ width: "100%", height: "100%" }}
    autoPlay
    loop
  />;
}

export default LoadingAnimation;
