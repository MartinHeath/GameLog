import { default as React } from 'react';
import { default as IconButton } from '../icon-button';
import { imagePath } from '../../filters';

export default React.createClass({
  render(){
    return (
      <div className="buttonMenu">
        <IconButton id="full-menu" />
        <IconButton id="HOF"/>
        <IconButton id="info"/>
      </div>
    );
  }
});
