import { default as React } from 'react';
import { ProgressBar } from 'react-bootstrap';

export default React.createClass({
  render(){
    var currPros= 22;
    return (
      <div className="progressbar">
        <ProgressBar  label='%(percent)s%' bsStyle='info' now={currPros}/>
      </div>
  }
});