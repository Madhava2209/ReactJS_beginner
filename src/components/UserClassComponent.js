import React from "react";

class UserClassComponent extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            userInfo: {
                name: 'John',
                location: 'Bangalore'
            }
        }
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/madhava2209")
        const json = await data.json()
        this.setState({
            userInfo: json
        })
        console.log('json', json)
    }
    render() {
        const {name, location} = this.state.userInfo
        return (
            <div className="user-card">
                <p>{name}</p>
                <p>Location: {location}</p>
            </div>
        )
    }
}

export default UserClassComponent