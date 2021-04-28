import React , { Component} from "react"
import {Link} from "react-router-dom"
import axios from "../../node_modules/axios";

const PlayerView = (props) => {
    console.log(props);
    return(
        <tr>
            <td>{props.player.playername}</td>
            <td>{props.player.age}</td>
            <td>{props.player.nationality}</td>
            {/* <td><button onClick={props.deleteClub(props.club._id)}>delete</button> </td> */}
            <td>{props.player.contract}</td>
            <td>{props.player.club}</td>
            <td> 
                <Link to = {"/players/edit/" + props.player._id}>edit</Link>
            </td>
        </tr>
    )
}

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
    }

    playerList(){
        return(
            this.state.players.map(currentPlayer => {
                return <PlayerView player = {currentPlayer} key = {currentPlayer._id} />
            })
        )
    }

    render(){
        return(
            <div>
            <h2>Players List: </h2>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Player Name</th>
                        <th>Age</th>
                        <th>Nationality</th>
                        <th>contract(years)</th>
                        <th>club</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.playerList()}
                </tbody>
            </table>
        </div>

        )
    }
}
