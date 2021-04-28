import React , { Component} from "react"
import axios from "../../node_modules/axios";

export default class PlayerList extends Component {

    constructor(props){
        super(props)

        this.state = {
            players: [],
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/players')
        .then(res=> {
            this.setState({players : res.data})
        }).catch(err=> console.log(err))

        console.log(this.state);
    }

    render(){
        return(
            <div>
                <h1> This is PlayerList Component </h1>
            </div>

        )
    }
}
