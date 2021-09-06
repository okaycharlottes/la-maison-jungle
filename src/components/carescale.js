


    const info = 
        {
            1: 'peu',
            2:'modérement',
            3:'beaucoup'
        };
    
    

const CareScale=({scaleValue,careType} )=>{
    const scaleType = careType === "light" ? '☀️': '💧'
    const range = [1,2,3];
    

    return (
        <div onClick={() =>
            alert(
                `Cette plante requiert ${info[scaleValue]} ${
                    careType === 'light' ? 'de lumière' : "d'arrosage"
                }`
            )}
        >
            {range.map((rangeElem)=>
                scaleValue >= rangeElem ? <span key=
                {rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )


}





export default CareScale