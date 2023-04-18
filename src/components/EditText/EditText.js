import './EditText.css'
import {useState} from "react";
export const EditText = (props) => {

    const onType = (event) => {
        props.onTyped(event.target.value)
    }

    return (
      <div className="campo-texto">
        <label>{props.label}</label>
        <input value={props.value} onChange={onType} required={props.requerid} placeholder={props.placeholder} />
      </div>
    );
}

