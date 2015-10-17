import { default as React } from 'react';

export default React.createClass({
  render() {
    <form onSubmit={this.props.onSubmit} />
    return (
      <div className="form">
        {this.props.children}
      </div>
    )
  }
});
