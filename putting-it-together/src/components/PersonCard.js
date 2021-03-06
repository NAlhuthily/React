import React, { Component }from 'react'

class PersonCard extends Component {
    state = {age:this.props.age}
    render() {
        const fun = () => {
        this.setState((state,props)=>({
            age:this.state.age+1
        }))
    }
        return (
        <div>
            <h1>{this.props.lastName}, {this.props.firstName}</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair color: {this.props.hairColor}</p>
            <button onClick={ fun } >Birthday button for {this.props.firstName}, {this.props.lastName} </button>
        </div>
    )
}
}

export default PersonCard