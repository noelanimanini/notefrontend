import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
  };

  signUpChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const avatarStyle = { backgroundColor: "pink" };
    const buttonStyle = { margin: "8px 0" };
    return (
      <div className="signupparent">
        <div className="signup">
          <form>
            <div>
              <Grid align="center">
                <Avatar style={avatarStyle}>
                  <FaceIcon></FaceIcon>
                </Avatar>
                <h2>Sign Up</h2>
              </Grid>
              <TextField
                label="Create an Username"
                placeholder="Enter Username"
                name="username"
                fullWidth
                required
                onChange={(e) => this.signUpChange(e)}
              />

              <TextField
                label="Create a Password"
                placeholder="Enter Password"
                type="password"
                name="password"
                fullWidth
                required
                onChange={(e) => this.signUpChange(e)}
              />

              <Button
                type="submit"
                value="submit"
                background-color="white"
                fullWidth
                variant="contained"
                style={buttonStyle}
                onClick={(e) => this.props.handleSignUp(e, this.state)}
              >
                Create an Account
              </Button>
              <Typography>
                {" "}
                Have an account?
                <Link to="/login">Login</Link>
              </Typography>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
