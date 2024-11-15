import React from "react";
import { Icon } from "@iconify/react";


interface IProps{
  children: React.ReactNode;
  propFunction : ()=> void
}

export const Modal:React.FC<IProps> = ({children, propFunction}) => {
  return (
    <div>
        <div>
          <button onClick={propFunction}>
          <Icon
                  icon="material-symbols:close"
                  width="20"
                  height="20"
                />
          </button>
            {children}
        </div>
    </div>
  )
}