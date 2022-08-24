import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Badge } from "@mui/material";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdAddCircle } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

function Header() {
  const getData = useSelector((state) => state.cartreducer.carts);
  console.log(getData);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/home" className="text-decoration-none">
            <Navbar.Brand>Shoppee</Navbar.Brand>
          </NavLink>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <MdAddCircle
            style={{
              color: "white",
              fontSize: "20px",
              cursor: "pointer",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          />
          <Link to="/">
            <FiLogOut
              style={{
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            />
          </Link>
          <Link to="/cart-data">
            <Badge badgeContent={getData.length} color="primary">
              <FaShoppingCart
                style={{
                  color: "white",
                  fontSize: "20px",
                  cursor: "pointer",
                  marginLeft: "20px",
                }}
              />{" "}
            </Badge>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
