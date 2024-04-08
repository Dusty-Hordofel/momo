"use client"
import { SVGAttributes } from "react";

interface XProps extends SVGAttributes<SVGElement> {
    errors: any
    isReactHookForm?: boolean
    name: string
}

const X = ({ errors, isReactHookForm, name, ...props }: XProps) => {
    console.log("🚀 ~ file: X.tsx:10 ~ errors:", errors, isReactHookForm, name)
    return <svg
        aria-label="Erreur. Ton mot de passe doit contenir&nbsp;:"
        tabIndex={0}
        width="11"
        height="12"
        viewBox="0 0 11 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0.351562 1.35156L9.64823 10.6482"
            stroke={isReactHookForm && errors[name] ? "#d82c0d" : "#757575"}
        ></path>
        <path
            d="M9.64823 1.35156L0.351562 10.6482"
            stroke={isReactHookForm && errors[name] ? "#d82c0d" : "#757575"}
        ></path>
    </svg>

}

export default X
