import './DropDown.css'

export const DropDown = (props) => {
    return (
        <div className='drop-down'>
            <label>{props.label}</label>
            <select required={props.requerid} value={props.value} onChange={event => props.onSelect(event.target.value)}>
                <option value=''>Selecione...</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )

}