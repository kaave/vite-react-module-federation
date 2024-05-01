
import "./Button.css"

import { useState } from "react"

type Props = {
  /** ボタンに表示する文言。 */
  label?: string;
};

export const Button = ({ label = 'Click me' }: Props) => {
  const [state, setState] = useState(0)
  return (
    <div>
      version: {VITE_BUILD_VERSION} (TypeScript)
      <button id='click-btn' className='shared-btn' onClick={() => setState((s) => s + 1)}>{label}: {state}</button>
    </div>
  )
}

export default Button

declare const VITE_BUILD_VERSION: string;
