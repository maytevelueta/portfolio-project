const Values = ({values, title}) => {
    return ( 
        <div>
        <h2 style={{ marginBottom: "2rem" }}>{ title }</h2>
        <div className="values-container">
            {values.map((value) => (
                <div className="value-preview" key={value.id}>
                    <h2 className="values-text" style={{ color: "#85586F" }}>{ value.title }</h2>
                    <p className="values-text">{ value.body }</p> 
                </div>
            ))}
        </div>
        </div>
     );
}
 
export default Values;