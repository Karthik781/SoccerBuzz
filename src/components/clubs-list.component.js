import React , { Component} from "react"
// import { Link } from 'react-router-dom'
import axios from 'axios'

const ClubView = props => (
    <tr>
        <td>{props.club.clubname}</td>
        <td>{props.club.shortname}</td>
        <td>{props.club.founded}</td>
        <td>{props.club.country}</td>
    </tr>
)

export default class ClubsList extends Component {

    constructor(props){
        super(props)

        this.state = {
            clubs : []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/clubs/all')
            .then(response => {
                this.setState({ clubs : response.data})
            }).catch(err => { console.log(err)})
    }

    exerciseList(){
        return (
            this.state.clubs.map(currentClub => {
                return <ClubView club = {currentClub} key = {currentClub._id} />
            })
        )
    }

    render(){
        return(
            <div>
                <h2>Clubs List: </h2>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Club Name</th>
                            <th>Short Name</th>
                            <th>Founded</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>

        )
    }
}