import React from "react";

export default function Button() {
  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
}
