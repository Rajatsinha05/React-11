import React, { memo } from 'react'

const Test = ({click,text}) => {
    console.log("calling Testing ");

    return (
        <div>{text}</div>
    )
}

export default memo(Test)