import './Dropdown.css'

const Dropdown = (props) => {
    return (
        <div className="dropdown">
            <label htmlFor="">{props.label}</label>
            <select value={props.value} onChange={props.onChange}>
                {props.options.map(option => { return <option key={option}>{option}</option>})}
            </select>
        </div>
    )
}

export default Dropdown;