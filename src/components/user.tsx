import React, { useState } from "react";

export type UserProps = {
  first_name: string;
  last_name: string;
  username: string;
};

const User = ({ first_name, last_name, username }: UserProps) => {
  return (
    <div className="flex flex-col items-start justify-center p-4 m-4 bg-slate-900 rounded-xl text-lg text-white">
      <p>{first_name}</p>
      <p>{last_name}</p>
      <p>{username}</p>
    </div>
  );
};

export default User;
