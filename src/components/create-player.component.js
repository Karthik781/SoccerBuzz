import React , { Component} from "react"

export default class CreatePlayer extends Component {

    constructor(props){
        super(props);


        this.state = {
            playername : '',
            age : '',
            nationality: '',
            contract:'',
            club:'',
            club_id:'',
        }
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

