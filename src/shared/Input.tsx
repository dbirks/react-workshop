import React from "react";

type InputProps = {
  id: string;
  label: string;
};

export function Input(props: InputProps) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <br />
      <input id={props.id} type="text" />
    </div>
  );
}
