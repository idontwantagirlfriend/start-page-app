import React from "react";

class ThemeToggler extends React.Component {
  onToggleTheme = () => {
    this.props.themeData.handleToggleTheme();
  };
  render() {
    const text = this.props.themeData.nightModeIsOn ? "ON" : "OFF";
    return (
      <button
        className="bg-white bg-gradient rounded rounded-pill px-1"
        onClick={this.onToggleTheme}
      >
        Switch night mode: {text}
      </button>
    );
  }
}

export default ThemeToggler;
