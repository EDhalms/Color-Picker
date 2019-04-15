import React from 'react';

class ColorPiker extends React.Component{
    state = {
        red: 0,
        green: 0,
        blue: 0,
        hex: ''
    };

    componentDidMount() {
        this.setState({
            hex: this.rgbToHex(this.state.red, this.state.green, this.state.blue)
        })
    }

    componentToHex = (color) => {
        console.log('color - ', color);
        let hex = Number(color).toString(16);
        console.log('hex - ', hex);
        return hex.length === 1 ? "0" + hex : hex;
    };

    rgbToHex = (r, g, b) => {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    };

    handleRange = (event, color) => {
        // console.log(event.target.value);
        this.setState({
            [color]: event.target.value
        }, () => {
            console.log('red - ', this.state.red);
            this.setState({
                hex: this.rgbToHex(this.state.red, this.state.green, this.state.blue)
            })
        })
    };

    render() {
        return(
            <div style={{backgroundColor: this.state.hex}}>
                <h1>ColorPiker</h1>
                <p>{this.state.hex}</p>
                <div>
                    <label>R
                        <input
                            onChange={(event) => this.handleRange(event, 'red')}
                            type="range"
                            min="0"
                            max="255"
                            step="1"
                            value={this.state.red}
                        />
                    </label>
                </div>
                <div>
                    <label>G
                        <input
                            onChange={(event) => this.handleRange(event, 'green')}
                            type="range"
                            min="0"
                            max="255"
                            step="1"
                            value={this.state.green}
                        />
                    </label>
                </div>
               <div>
                   <label>B
                       <input
                           onChange={(event) => this.handleRange(event, 'blue')}
                           type="range"
                           min="0"
                           max="255"
                           step="1"
                           value={this.state.blue}
                       />
                   </label>
               </div>


            </div>
        )
    }

}

export default ColorPiker;