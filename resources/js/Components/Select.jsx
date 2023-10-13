export default function Select({name, value, onChange, defaultMessage, data}){
    return (
        <select name={name} id={name} value={value} onChange={onChange}>
            <option value={"default"} disabled>{defaultMessage}</option>
            {data.map((data,index) => {
                return(
                    <option key={index} id={name} value={data.id}>{data.name}</option>
                )
            })}
        </select>
    )

}
