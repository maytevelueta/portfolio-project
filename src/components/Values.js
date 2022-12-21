const Values = ({values, title}) => {
    return ( 
        <div>
        <h2>{ title }</h2>
        <div className="values-list">
            {values.map((value) => (
                <div className="value-preview" key={value.id}>
                    <h2>{ value.title }</h2>
                    <p>{ value.body }</p> 
                </div>
            ))}
        </div>
        </div>
     );
}
 
export default Values;