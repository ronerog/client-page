import React from "react";
import './styles.css'

const Row = ({ record }) => {
    const keys = Object.keys(record)
    return (
        (<tr key={record.id}>
            {
            keys.map(key => <td key={key}>{record[key]}</td>)
            }
        </tr>)
    )
}

export default function Table({ data }) {

    const keys = Object.keys(data[0])
    return (
        
        <table className="custom-table">
            <thead>
            <tr>
                {
                    keys.map(key => <th key={key}>{key}</th>)
                }
            </tr>
            </thead>
            <tbody>
               {data.map(record => <Row record={record} />)}
            </tbody>
        </table>
    )
}