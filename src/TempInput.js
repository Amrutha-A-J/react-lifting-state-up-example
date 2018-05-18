import React from 'react';
import './TempInput.css';
const scaleList ={
    c:"Celsius",
    f:"Farenheit"
}
class TempInput extends React.Component {
    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
    }
    changeHandler(e){
        this.props.onTempChange(e.target.value);  
    }

    render() {
        const temperature = this.props.temp;
        const scale= this.props.scale;
        return (
            <div class="Temp">
                <p className="Temp-title">Enter the temperature in {scaleList[scale]}:</p>
                <input onChange={this.changeHandler} value={temperature}/>
            </div>
        );
    }
}

export default TempInput;
