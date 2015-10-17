import { default as React } from 'react';
import { default as className } from 'react';
import { default as ProgressBar } from '../progressbar';
import { default as ButtonMenu } from '../buttonMenu';

export default React.createClass({
  render(){
    console.log("asd");
    return (
      <div className="wrapper">
        <ButtonMenu />
        <p> Welcome. Please choose wisely, for a wrong choice can lead to thy
          doom.
        </p>
        </div>
    );
  }
});
