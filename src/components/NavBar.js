import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const NavBar = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const { pathname } = useLocation();
  const initialUserData = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};
  const [user, setUser] = useState(initialUserData);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/main");
      } else {
        navigate("/");
      }
    });
  }, [auth]);
  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        localStorage.setItem("user", JSON.stringify(result.user));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const search = (e) => {
    e.preventDefault();
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
    console.log("navbar search", keyword);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Link to="/" style={{ marginRight: "10px" }}>
          <img
            width={100}
            src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png"
            alt="netflix-logo"
          />
        </Link>

        {pathname === "/" ? (
          <Button variant="dark" className="login-button" onClick={login}>
            LOGIN
          </Button>
        ) : (
          <>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link
                  to="/main"
                  className="nav-item"
                  style={{ marginBottom: "5px" }}
                >
                  Home
                </Link>
                <Link to="/movies" className="nav-item">
                  Movies
                </Link>
              </Nav>
              <Form className="d-flex" onSubmit={search}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 nav-input"
                  aria-label="Search"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <Button variant="outline-danger" className="search-button">
                  <FaSearch />
                </Button>
              </Form>
              <div className="logout-area">
                <img
                  className="user-img"
                  src={user?.photoURL}
                  alt={user?.displayName}
                />
                <div onClick={logout} className="logout-dropdown">
                  LOGOUT
                </div>
              </div>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
