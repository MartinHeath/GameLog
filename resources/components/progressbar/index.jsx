import { default as React } from 'react';
import { ProgressBar } from 'react-bootstrap';

export default React.createClass({
  render(){
    var currPros= 42;
    var complete = 22;
    var givUp= 20;
    var notPlayed = 68;
    var progBar = <ProgressBar bsStyle='warning' now={currPros} onDoubleClick={this.detail()} />
   function detail(){};
    return (
      <div className="progressbar">
        {progBar}
      </div>
    );
  }
});
