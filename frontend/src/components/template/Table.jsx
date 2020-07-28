import React from 'react'

const renderColumns = (columns) => {
    let colunas = []
    const arrayColumms = columns.split(' ')
    for (let i = 0; i < arrayColumms.length; i++) {
        colunas.push(<th>{arrayColumms[i]}</th>)
    }
    return colunas
}


export default props =>
    <table className={`table ${props.margin}`}>
        <thead>
            <tr>
                {renderColumns(props.columns)}
            </tr>
        </thead>
        <tbody>
            {props.rows}
        </tbody>
    </table>