import React, { Component } from 'react'
class Tip extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.match.params.tipicId}
            </div>
        )
    }
}
export default Tip