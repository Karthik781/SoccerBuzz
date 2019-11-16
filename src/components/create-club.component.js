import React , { Component} from "react"
import axios from "axios"

export default class CreateClub extends Component {

    constructor(props){
        super(props)

        this.onChangeClubName = this.onChangeClubName.bind(this)
        this.onChangeShortName = this.onChangeShortName.bind(this)
        this.onChangeFounded = this.onChangeFounded.bind(this)
        this.onChangeCountry = this.onChangeCountry.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            clubname : '',
            shortname : '',
            founded : '',
            country : '',
            players : []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/clubs/all')
            .then(response => {
                if(response.data.length > 0){
                    console.log(response.data)
                }
            })
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

    onSubmit(e){
        e.preventDefault();

        const newClub = {
            clubname : this.state.clubname,
            shortname : this.state.shortname,
            founded :this.state.founded,
            country: this.state.country
        }

        console.log(newClub)
        
        axios.post('http://localhost:5000/clubs/add', newClub)
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
                    <div className="form-group">
                        <input type="submit" value = "create club" className = "btn btn-primary" />
                    </div>
                </form>
            </div>

        )
    }
}