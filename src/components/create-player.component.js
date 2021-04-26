import React , { Component} from "react"
import axios from "axios"

export default class CreatePlayer extends Component {

    constructor(props){
        super(props);

        this.onChangePlayerName = this.onChangePlayerName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeNationality = this.onChangeNationality.bind(this);
        this.onChangeContract = this.onChangeContract.bind(this);
        this.onChangeClub = this.onChangeClub.bind(this);
        this.onSubmit =this.onSubmit.bind(this);

        this.state = {
            playername : '',
            age : '',
            nationality: '',
            contract:'',
            club:'',
            club_id:'',
        };
    }

   
    

    onChangePlayerName(e){
        this.setState({
            playername: e.target.value
        })
    }
    onChangeAge(e){
        this.setState({
            age: e.target.value
        })
    }
    onChangeNationality(e){
        this.setState({
            nationality: e.target.value
        })
    }
    onChangeContract(e){
        this.setState({
            contract: e.target.value
        })
    }
    onChangeClub(e){
        this.setState({
            club: e.target.value
        })
    }
   
    onSubmit(e){
        e.preventDefault();
     //   console.log(this.props.match.params.id);
        const newPlayer = {
            playername : this.state.playername,
            age : this.state.age,
            nationality: this.state.nationality,
            contract:this.state.contract,
            club:this.state.club,
            club_id:this.props.match.params.id,
        }
        //console.log(newPlayer);

        axios.post('http://localhost:5000/players/add', newPlayer)
        .then(res => console.log(res))
        .catch(err=>console.log(err))
    }



    render(){
        return(
            <div>
                <h3>Create New Player</h3>
                <form onSubmit = {this.onSubmit} >
                    <div className = "form-group">
                        <label>Player Name: </label>
                        <input type = "text"
                            required
                            className="form-control"
                            value = {this.state.playername}
                            onChange = {this.onChangePlayerName} 
                        />
                    </div>
                    <div className = "form-group">
                        <label>Age: </label>
                        <input type = "text"
                            required
                            className="form-control"
                            value = {this.state.age}
                            onChange = {this.onChangeAge} 
                        />
                    </div>
                    <div className = "form-group">
                        <label>Nationality: </label>
                        <input type = "text"
                            className="form-control"
                            value = {this.state.nationality}
                            onChange = {this.onChangeNationality} 
                        />
                    </div>
                    <div className = "form-group">
                        <label>Contract: </label>
                        <input type = "text"
                            required
                            className="form-control"
                            value = {this.state.contract}
                            onChange = {this.onChangeContract} 
                        />
                    </div>
                    <div className = "form-group">
                        <label>Club: </label>
                        <input type = "text"
                            required
                            className="form-control"
                            value = {this.state.club}
                            onChange = {this.onChangeClub} 
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value = "create player" className = "btn btn-primary" />
                    </div>
                </form>
            
            </div>

        )
    }
}

