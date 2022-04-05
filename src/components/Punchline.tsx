import React, { useState } from "react";

type PunchlineProps = {
  id?: string;
  setup: string;
  punchline: string;
};

const Punchline = ({ id, setup, punchline }: PunchlineProps) => {
  return (
    <div>
      <p className="p-4 bg-slate-700 border-2 border-slate-400 text-white text-xl rounded-lg m-8 w-full">
        {setup}
      </p>
      <p>{punchline}</p>
    </div>
  );
};

export default Punchline;
