import { default as React } from 'react';
import { ProgressBar } from 'react-bootstrap';

export default React.createClass({
  render(){
    var currPros= 42;
    var complete = 22;
    var givUp= 20;
    var notPlayed = 58;
    var progBar = <ProgressBar className="simple" bsStyle='warning' now={currPros} />
    var stackBar=
    <ProgressBar className="detail">
      <ProgressBar striped active label="%(percent)s%" bsStyle="success" now={complete} key={1}/>
      <ProgressBar label="%(percent)s%" bsStyle="info" now={givUp} key={2}/>
      <ProgressBar striped label="%(percent)s%" bsStyle="danger" now={notPlayed} key={3}/>
    </ProgressBar>
    return (
      <div className="progressbar">
        {stackBar}
      </div>
    );
  }
});
