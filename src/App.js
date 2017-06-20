import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {withRouter} from 'react-router';

import './styles/App.css';

// Component imports
import Navbar from './Navbar';
import ChallengeView from './ChallengeView';
import CurriculumComplete from './CurriculumComplete';
import GetStarted from './GetStarted';
import Map from './Map';

// data
import ChallengesJSON from './challenges.json';

class App extends Component {
  constructor(props) {
    super(props);

    // get the JSON file challenges list
    const { challenges, last_edit, chapters } = ChallengesJSON;

    // if the localStorage does not exists or the challenges list is not authentic
    // set the localStorage with the challenges list from the JSON File.
    if ( !localStorage.getItem('fcc-python-challenges') || !this.isChallengesAuthentic(last_edit) ) {
      localStorage.setItem('fcc-python-challenges-last-edit', last_edit);
      localStorage.setItem('fcc-python-challenges-chapters', JSON.stringify(chapters))
      this.setChallengeList(this.flatten(challenges));
    }

    // set the challenges list state
    this.state = {
      challenges: this.getChallengeList(),
      mapWidth: "0"
    }
  }

  // helper function to condense the multidimensional challenges list
  flatten = list => list.reduce((a, b) => a.concat(b), []);

  // setter and getter for localStorage challenge object
  setChallengeList = challenges => localStorage.setItem('fcc-python-challenges', JSON.stringify(challenges));
  getChallengeList = () => JSON.parse(localStorage.getItem('fcc-python-challenges'));

  // check if last_edit dates differ
  isChallengesAuthentic = (last_edit) => {
    const date = localStorage.getItem('fcc-python-challenges-last-edit');
    return parseInt(date, 10) === last_edit;
  }

  // given a new list of challenges updates localStorage and state
  // note: setState triggers a rerender
  handleUpdateChallenges = (newChallengesList) => {
    this.setChallengeList(newChallengesList);
    this.setState({
      challenges: newChallengesList
    });
  }

  // click event attached to 'Next Button'
  handleAdvanceToNextChallenge = (currentChallengeIndex) => {
    // get challenges list from state
    const { challenges } = this.state;
    // set the next index by incrementing current index
    const nextChallengeIndex = currentChallengeIndex + 1;
    // if this is the last challenge
    if ( nextChallengeIndex === challenges.length ) {
      // curriculum complete page
      this.props.history.push('/curriculum-complete');
    } else {
      // get next challenge Object
      const nextChallenge = challenges[nextChallengeIndex];
      // determine the next path
      const nextPath = nextChallenge.title.toLowerCase().replace(" ", "-");
      // push the path to router with a custom state object
      this.props.history.push(nextPath, { completedChallenge: currentChallengeIndex });
    }
  }

  // click event attached to 'Prev Button'
  handleAdvanceToPrevChallenge = (currentChallengeIndex) => {
    // get challenges list from state
    const { challenges } = this.state;
    // set the prev index by decrementing current index
    const prevChallengeIndex = currentChallengeIndex - 1;
    // get the prev challenge
    const prevChallenge = challenges[prevChallengeIndex];
    // get the prev path
    const prevPath = prevChallenge.title.toLowerCase().replace(" ", "-");

    // push to history, no custom state needed
    this.props.history.push(prevPath);
  }

  // when the history is pushed we are pushing new props to the App component
  componentWillReceiveProps(nextProps) {
    // get the next title ( this is the path )
    const nextChallengeTitle = nextProps.match.params.challengeTitle;
    // get the challenge Array[]
    let nextChallenges = this.state.challenges;
    // get the index of the next challenge
    const nextChallengeIndex = this.getIndex(nextChallenges, nextChallengeTitle);

    // complete the current challenge if nextProps was clicked
    // this is the custom state object passed to the history.push(...) method
    if ( nextProps.location.state ) {
      const completedChallengeIndex = nextProps.location.state.completedChallenge;
      // if the index exists set the completed value to true
      if ( completedChallengeIndex ) {
        nextChallenges[completedChallengeIndex].completed = true;
      }
      // if we update the challenge list,
      // setState with the handleUpdateChallenges method
      this.handleUpdateChallenges(nextChallenges);
    }

  }

  // helper method for finding the index of an element
  getIndex = ( challenges, challengeTitle ) => (
    challenges.findIndex(c => (
      c.title.toLowerCase().replace(" ", "-") === challengeTitle
    ))
  )

  // used to open and close the map
  toggleMap = () => {
    const { mapWidth } = this.state;
    this.setState({
      mapWidth: mapWidth === "250px" ? "0" : "250px"
    });
  }

  render() {
    return (
      <div className="app">
        <Navbar />

        {/* The first 'match' will be rendered. */}
        <Switch>

          <Route path={`${this.props.match.url}curriculum-complete`} component={CurriculumComplete} />

          <Route path={`${this.props.match.url}:challengeTitle`} render={props => (
            <ChallengeView {...props}
              challenges={this.state.challenges}
              handleAdvanceToPrevChallenge={this.handleAdvanceToPrevChallenge}
              handleAdvanceToNextChallenge={this.handleAdvanceToNextChallenge}
              toggleMap={this.toggleMap}/>
          )} />

          <Route path={`${this.props.match.url}`} component={GetStarted} />

          <Redirect to='/python-coding-challenges' />
        </Switch>


        <Map
          challengesList={this.state.challenges}
          width={this.state.mapWidth}
          toggleMap={this.toggleMap}
        />
      </div>
    );
  }
}

export default withRouter(App);
