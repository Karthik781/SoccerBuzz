import React , { Component} from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'

const ClubView = props => (
    <tr>
        <td>{props.club.clubname}</td>
        <td>{props.club.shortname}</td>
        <td>{props.club.founded}</td>
        <td>{props.club.country}</td>
        {/* <td><button onClick={props.deleteClub(props.club._id)}>delete</button> </td> */}
        <td> 
            <Link to = {"/clubs/edit/" + props.club._id}>edit</Link>
        </td>
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

    clubList(){
        return (
            this.state.clubs.map(currentClub => {
                return <ClubView club = {currentClub} deleteClub = {this.deleteClub} key = {currentClub._id} />
            })
        )
    }
//Sort out deleting isuue
    // deleteClub(id){
    //     axios.delete('http://localhost:5000/clubs/'+id)
    //         .then(res => console.log(res.data))

    //     this.setState({
    //         clubs : this.state.clubs.filter(ele => ele._id !== id)
    //     })
    // }

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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.clubList()}
                    </tbody>
                </table>
            </div>

        )
    }
}