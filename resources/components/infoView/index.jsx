import { default as React } from 'react';
import { default as Button} from './button';

export default React.createClass({
  render(){
    return(
      <div className="info_text">
        <p> This is a personal project by me, Martin.
          The idea was spawned when I was looking at my collection of games, trying to figure out what to play.
          I Realise there are other services LIKE this, but I have yet to see one utilize React.js in the same way.
        </p> 
      </div>
    );
  }
});
