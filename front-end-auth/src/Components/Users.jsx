import React, { Component } from "react";
import axios from 'axios';

export default class Users extends Component {
    constructor() {
        super()

        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        try {
            let { data } = await axios.get('/users')
            this.setState({ users: data.payload })
        } catch (err) {
            console.log('ERROR', err)
        }
    }

    render() {
        return (
            <ul>
                {
                    this.state.users.map((user, i) => {
                        return (
                            <li className="user-item" key={i}>
                                <p>id:{user.id} user:{user.username}</p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

