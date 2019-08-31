import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"


export default class CreateExercises extends Component {
    constructor(props){
        super(props);

        this.OnChangeUsername = this.OnChangeUsername.bind(this)
        this.OnChangeDescription = this.OnChangeDescription.bind(this)
        this.OnChangeDuration = this.OnChangeDuration.bind(this)
        this.OnChangeDate = this.OnChangeDate.bind(this)
        this.OnSubmit = this.OnSubmit.bind(this)

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users:[]
        }
    }

    //load before everything
    componentDidMount() {
        this.setState({
            users: ['test user'],
            username: 'test user'
        })
    }

    OnChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    OnChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    OnChangeDuration(e) {
        this.setState({
            duration: e.target.value
        })
    }

    OnChangeDate(date) {
        this.setState({
            date: date
        })
    }

    OnSubmit(e){
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.dates
        }

        console.log(exercise);

        //take the person back to home page
        window.location = '/';  
    }

    render(){
        return(
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className = "form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.OnChangeUsername}>
                            {
                                this.state.users.map(function(user){
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                        </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.OnChangeDescription}
                            />      
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.OnchangeDuration}
                            />      
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>    
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />     
                    </div>
                </form>
            </div>
        )
    }
}