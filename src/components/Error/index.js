import React from "react";

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render = () =>
    this.state.hasError ? (
      <div>
        <h2>Something went wrong!</h2>
      </div>
    ) : (
      this.props.children
    );
}

export default Error;
