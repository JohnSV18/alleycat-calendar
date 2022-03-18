import React, { Component } from "react";
import RaceDataService from "../services/raceServices";
import '../CreateRace/CreateRace.css';
export default class CreateRace extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.saveRace = this.saveRace.bind(this);
    this.newRace = this.newRace.bind(this);
    this.state = {
      id: null,
      title: "",
      description: "",
      location: "",
      published: false,
      submitted: false
    };
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }
  saveRace() {
    var data = {
      title: this.state.title,
      description: this.state.description,
      location: this.state.location
    };
    RaceDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          location: response.data.location,
          published: response.data.published,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  newRace() {
    this.setState({
      id: null,
      title: "",
      description: "",
      location: "",
      published: false,
      submitted: false
    });
  }
  render() {
    return (
      <div className="container">
        <div className="CreateRace">
            {this.state.submitted ? (
            <div>
                <h4>You submitted successfully!</h4>
                <button className="btn btn-success" onClick={this.newRace}>
                Add
                </button>
            </div>
            ) : (
            <div>
                <div className="race-title">
                <label htmlFor="title">Race Title:</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="ex. Blah blah alleycat 2022"
                    required
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                    name="title"
                />
                </div>
                <div className="race-description">
                <label htmlFor="description">Description of the race you're organizing:</label>
                <input
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="ex. Annual summer alleycat race"
                    required
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    name="description"
                />
                </div>
                <div className="race-location">
                <label htmlFor="description">Start Location for the race:</label>
                <input
                    type="text"
                    className="form-control"
                    id="location"
                    placeholder="ex. New York City, NY"
                    required
                    value={this.state.location}
                    onChange={this.onChangeLocation}
                    name="location"
                />
                </div>
                <button onClick={this.saveRace} className="RaceButton">
                Create the Race!
                </button>
            </div>
            )}
        </div>
      </div>
    );
  }
}