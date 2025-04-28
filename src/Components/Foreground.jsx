import React from "react";
import Card from "./Card";

function Foreground() {
  const data = [
    {
      desc: "This Is The Context You wanna See innthe profilde .....",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This Is The Context You wanna See innthe profilde .....",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This Is The Context You wanna See in the profile of your favourite star and other Fans.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Cancel Now", tagColor: "red" },
    },
  ];
  return (
    <div className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5 ">
      {data.map((item, index) => (
        <Card data={item} />
      ))}
    </div>
  );
}

export default Foreground;
