"use client";
import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

const Bottomer = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-fugaz text-3xl text-center mt-16">
        WANT TO MAKE YOUR DREAM
        <br />
        EVENT COME TRUE? 🔮
      </h1>
      {ready && (
        <PopupButton
          className="px-4 py-2 border border-primary hover:bg-primary rounded-full font-fugaz text-xl mt-8"
          text="CONTACT US NOW!"
          rootElement={document.getElementById("root") as HTMLElement}
          url="https://calendly.com/paulhenrykajfasz/30-min-meeting"
        />
      )}
    </div>
  );
};

export default Bottomer;
