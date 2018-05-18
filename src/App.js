import React from 'react';
import './App.css';
import TempInput from './TempInput';

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p className="green" >The water would boil.</p>;
  }
    return <p className="red" >The water would not boil.</p>;
}
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.celsiusChange = this.celsiusChange.bind(this);
    this.farenheitChange = this.farenheitChange.bind(this);
    this.state = {temperature: '',
    scale : 'c'
    };
  }

  celsiusChange(temperature){
    this.setState({temperature, scale:'c'});
  }
  farenheitChange(temperature){
    this.setState({temperature, scale:'f'});
  }
  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale==='f'? tryConvert(temperature,toCelsius) : temperature;
    const farenheit = scale==='c'? tryConvert(temperature,toFahrenheit) : temperature;
    return (
      <div className="App">
        <TempInput onTempChange={this.celsiusChange} temp={celsius} scale='c'/>
        <TempInput onTempChange={this.farenheitChange} temp={farenheit} scale='f'/>
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default App;
