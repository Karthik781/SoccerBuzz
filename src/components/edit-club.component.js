import React , { Component} from "react"
import axios from "axios"

export default class EditClub extends Component {

    constructor(props){
        super(props)
        console.log(this.props.match)
        this.onChangeClubName = this.onChangeClubName.bind(this)
        this.onChangeShortName = this.onChangeShortName.bind(this)
        this.onChangeFounded = this.onChangeFounded.bind(this)
        this.onChangeCountry = this.onChangeCountry.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeLeague = this.onChangeLeague.bind(this)

        this.state = {
            clubname : '',
            shortname : '',
            founded : '',
            country : '',
            league:'',
            players : []
        }
    }
    

    componentDidMount(){
        axios.get('http://localhost:5000/clubs/' + this.props.match.params.id )
            .then(res => {
                this.setState({
                    clubname : res.data.clubname,
                    shortname: res.data.shortname,
                    founded : res.data.founded,
                    country: res.data.country,
                    league: res.data.league,
                })
            }).catch(err => console.log(err))
    }

    onChangeClubName(e){
        this.setState({
            clubname : e.target.value
        });
    } 

    onChangeShortName(e){
        this.setState({
            shortname: e.target.value
        });
    }

    onChangeFounded(e){
        this.setState({
            founded: e.target.value
        });
    }

    onChangeCountry(e){
        this.setState({
            country: e.target.value
        });
    }

    onChangeLeague(e){
        this.setState({
            league: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const newClub = {
            clubname : this.state.clubname,
            shortname : this.state.shortname,
            founded :this.state.founded,
            country: this.state.country,
            league: this.state.league,
        }

        console.log(newClub)
        
        axios.post('http://localhost:5000/clubs/edit/' + this.props.match.params.id , newClub)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        window.location = '/clubs/all'
    }

    render(){
        return(
            <div>
                <h3>Create New Club</h3>
                <form onSubmit = {this.onSubmit} >
                    <div className = "form-group">
                        <label>Club Name: </label>
                        <input type = "text"
                            required
                            className="form-control"
                            value = {this.state.clubname}
                            onChange = {this.onChangeClubName} 
                        />
                    </div>
                    <div className = "form-group">
                        <label>Short Name: </label>
                        <input type = "text"
                            required
                            className="form-control"
                            value = {this.state.shortname}
                            onChange = {this.onChangeShortName} 
                        />
                    </div>
                    <div className = "form-group">
                        <label>Founded: </label>
                        <input type = "text"
                            className="form-control"
                            value = {this.state.founded}
                            onChange = {this.onChangeFounded} 
                        />
                    </div>
                    <div className = "form-group">
                        <label>Country: </label>
                        <input type = "text"
                            required
                            className="form-control"
                            value = {this.state.country}
                            onChange = {this.onChangeCountry} 
                        />
                    </div>
                    <div className = "form-group">
                        <label>League: </label>
                        <input type = "text"
                            required
                            className="form-control"
                            value = {this.state.league}
                            onChange = {this.onChangeLeague} 
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value = "Update club" className = "btn btn-primary" />
                    </div>
                </form>
            </div>

        )
    }
}