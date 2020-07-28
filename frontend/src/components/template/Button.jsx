import React from 'react'

export default props => 
    <button className={`btn btn-${props.styleBtn} ${props.margin}`} onClick={e => props.click(e)}>
        {props.icon ? (<i className={`fa fa-${props.icon}`}></i>): props.label}
    </button>