import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div
        className="py-2 border align-items-center justify-content-center bg-primary bg-gradient"
        style={styles.footer}
      >
        <p className="text-white">Copyright footer</p>
      </div>
    );
  }
}
const styles = {
  footer: {
    opacity: "0.75",
  },
};
export default Footer;
