import React from 'react'

type ActionButtonProps = {
    title: string;
    bgColor: string
    txtColor: string
}

const ActionButton = ({ title, bgColor, txtColor }: ActionButtonProps) => {
    return (
        <button
          style={{
           width: "fit-content",
           paddingTop: "12px",
           paddingBottom: "11px",
           paddingLeft: "50px",
           paddingRight: "48px",
           backgroundColor: bgColor,
           border: `1px solid ${bgColor}`,
           fontFamily: "Times New Roman",
           fontSize: "18px",
           lineHeight: "130%", 
           color: txtColor,
           cursor: "pointer"
          }}  
        >
            {title}
        </button>
    )
}

export default ActionButton