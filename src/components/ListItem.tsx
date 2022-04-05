import React, { useState } from "react";

type ListItemProps = {
  value: string;
};

const ListItem = ({ value }: ListItemProps) => {
  return <div>{`${value} 😁 `};</div>;
};

export default ListItem;
