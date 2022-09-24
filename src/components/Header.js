import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Cookies from "universal-cookie";
import {Button, Image} from "@chakra-ui/react";
import IconUni from "../img/IconUni.png";

function Header() {
    const [userData, setUserData] = useState({});
    const cookies = new Cookies();
    const history = useNavigate();
    useEffect(() => {
        if (cookies.get("student")) {
            setUserData(cookies.get('student'));
        } else {
            history("/login")
        }
    }, [])
    const signout = (e) => {
        e.preventDefault();
        const cookies = new Cookies();
        setUserData(cookies.remove('student'));
        history("/login")
        sessionStorage.removeItem("student")
        sessionStorage.removeItem("admin")
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Link to={"/"}><Image src={IconUni} width='3rem'/> قيمني</Link>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link href="href='https://chakra-ui.com/docs/components/link'"><FacebookIcon
                            style={{width: '50', height: '50', marginLeft: '3rem'}}/></Nav.Link>
                        <Nav.Link href="https://chakra-ui.com/docs/components/link"><TwitterIcon
                            style={{width: '50', height: '50', marginLeft: '3rem'}}/></Nav.Link>
                        <Nav.Link href="https://chakra-ui.com/docs/components/link"><LinkedInIcon
                            style={{width: '50', height: '50', marginLeft: '3rem'}}/></Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        {
                            (userData.nickName || JSON.parse(sessionStorage.getItem("admin"))) ?
                                <Button onClick={(e) => signout(e)} color='white'
                                        _hover={{backgroundColor: '#FFD05E', color: 'black'}}
                                        backgroundColor='black' >تسجيل الخروج</Button> :
                                <Button variant="outline-success">تسجيل الدخول</Button>
                        }
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
