import React, { useEffect } from "react";

const WelcomeSound = () => {
  let speech = new SpeechSynthesisUtterance();
  let text =
    "Welcome to Grab Food Store You can find everything you wish on this online market";

  useEffect(() => {
    speech.text = text;
    speech.pitch = 1;
    speech.volume = 0;
    speech.lang = "en-US";
    speech.rate = 1;
    speechSynthesis.speak(speech);
  }, []);
  return <></>;
};

export default WelcomeSound;
