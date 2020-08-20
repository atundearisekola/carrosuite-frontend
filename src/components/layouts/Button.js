import React from 'react'
import {Button} from 'antd'
const ButtonUI = (props) => {
    const { type,text }
    return (
        <Button className= {`btn btn-${type}`}>
            
        </Button>
    )
}

export default ButtonUI
