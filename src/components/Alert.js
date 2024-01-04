import React from 'react'

function Alert(props) {
    
    const capitalize  = (word) => {
        if (word) {
            if (word === "danger") {word ="error"}
            let lower = word.toLowerCase()
            return lower.charAt(0).toUpperCase() + lower.slice(1)
        }
    }
  return (
    <div style={{height:'20px',zIndex:1,position:'absolute'}}>
      
    {props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    {props.alert.msg}
    </div>}
    </div>
  )
}

export default Alert
