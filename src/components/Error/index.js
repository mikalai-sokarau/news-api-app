import React from "react";

class Error extends React.Component {
  state = { hasError: false };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong!</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default Error;
