import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const avatarStyle = { backgroundColor: "pink" };
    const buttonStyle = { margin: "8px 0" };
    return (
      <div className="loginParent">
        <div className="login">
          <form>
            <Grid>
              <Paper elevation={10} className="login">
                <Grid align="center">
                  <Avatar style={avatarStyle}>
                    <LockOutlinedIcon></LockOutlinedIcon>
                  </Avatar>
                  <h2>Sign In</h2>
                </Grid>
                <TextField
                  label="Username"
                  placeholder="Enter Username"
                  onChange={(e) => this.handleChange(e)}
                  name="username"
                  fullWidth
                  required
                />

                <TextField
                  label="Password"
                  placeholder="Enter Password"
                  type="password"
                  onChange={(e) => this.handleChange(e)}
                  name="password"
                  fullWidth
                  required
                />
                <FormControlLabel
                  control={<Checkbox name="checkedB" color="primary" />}
                  label="Remember Me"
                />
                <Button
                  type="submit"
                  value="submit"
                  background-color="white"
                  fullWidth
                  variant="contained"
                  style={buttonStyle}
                  onClick={(e) => this.props.handleLogin(e, this.state)}
                >
                  Sign In
                </Button>
                <Typography>
                  {" "}
                  Don't have an account?
                  <Link to="/signup">Sign Up</Link>
                </Typography>
                {/* <Typography>
                        <Link href="#" >
                        Forgot Password?
                        </Link>
                        </Typography>
                        <Typography> Do you have an account?
                        <Link to="/asdfas" >
                        Sign Up
                        </Link>
                      </Typography> */}
                {/* for the links above, consult https://material-ui.com/guides/composition/#link when you have time. */}
              </Paper>
            </Grid>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
