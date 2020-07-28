import React from 'react'

export default props =>
    <div className={props.responsivity}>
        <div className="form-group">
            <label>{props.label}</label>
            <input type="text" className="form-control"
                name={props.inputName} placeholder="Informe seu nome" onChange={e => props.change(e)}
                value={props.value}
            />
        </div>
    </div>