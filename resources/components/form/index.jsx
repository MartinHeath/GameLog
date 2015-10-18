import { default as React } from 'react';

export default React.createClass({
  render() {
    <form onSubmit={this.props.onSubmit} />
    return (
      <div className="form">
        <form>
          {this.props.children}
        </form>
      </div>
    )
  }
});
