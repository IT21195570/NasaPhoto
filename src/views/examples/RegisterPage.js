import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";
import { auth } from "../../firebase";

function RegisterPage() {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignUpActivate, setIsSignUpActive] = useState(null);
  const [error, setError] = useState(null);

  const handleMethodChange = () => {
    setIsSignUpActive(!isSignUpActivate);
  };

  const handleSignUp = () => {
    if (!email || !password || password !== confirmPassword) {
      setError("Passwords do not match or fields are empty");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("Successfully registered");
        navigate('/login-page');
      })
      .catch((error) => {
        const errorCode = error.errorCode;
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(errorCode, errorMessage);
      });
  };

  const handleSignin = () => {
    if (!email || !password) return;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("Successfully logged in");
        navigate('/landing-page');
      })
      .catch((error) => {
        const errorCode = error.errorCode;
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(errorCode, errorMessage);
      });
  };

  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleConfirmPassword = (event) => setConfirmPassword(event.target.value);

  return (
    <>
      <div className="page-header" style={{
          backgroundImage: "url(" + require("assets/img/galaxy.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}> {/* Adjust the alpha value to decrease the opacity */}
                {isSignUpActivate &&  <h3 className="title mx-auto">Welcome Back</h3>}
                {!isSignUpActivate &&  <h3 className="title mx-auto">Welcome</h3>}
                <Form className="register-form">
                  <label>Email</label>
                  <Input placeholder="Email" type="text" onChange={handleEmail} />
                  <label>Password</label>
                  <Input placeholder="Password" type="password" onChange={handlePassword} />
                  {!isSignUpActivate && (
                    <>
                      <label>Confirm Password</label>
                      <Input placeholder="Confirm Password" type="password" onChange={handleConfirmPassword} />
                    </>
                  )}
                  <Button block className="btn-round" color="danger" onClick={isSignUpActivate ? handleSignin : handleSignUp}>
                    {isSignUpActivate ? 'Login' : 'Register'}
                  </Button>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                </Form>
                <div className="forgot">
                  <Button className="btn-link" color="danger" href="#pablo">
                    Forgot password?
                  </Button>
                  <Button className="btn-link" color="danger" href="#pablo" onClick={handleMethodChange}>
                    {isSignUpActivate ? 'Create an account?' : 'Already have an account?'}
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>© {new Date().getFullYear()} NASA TEAM</h6>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
