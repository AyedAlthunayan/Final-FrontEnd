import {Avatar, Box, Button, Divider, Heading, HStack, Input, Text, VStack, Wrap, WrapItem} from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import Footer from '../components/Footer'
import ImgBody from "../img/ImgBody.jpeg"
import {APIs} from "../const/APIs";
import axios from "axios";
import Cookies from "universal-cookie";
import {useNavigate, Link} from "react-router-dom";
import Header from "../components/Header";

function Home() {
    const [professors, setProfessors] = useState([])
    const cookies = new Cookies();
    const history = new useNavigate();
    const [filteredData, setFilteredData] = useState([]);
    const [loginUser, setLoginUser] = useState({})
    useEffect(() => {
        if (cookies.get("student")!=undefined) {
            setLoginUser(cookies.get('student'));
        } else {
            history("/login")
        }
        axios.get(APIs.PROFESSOR.GET_ALL_PROFESSOR_API).then(res => {
            setProfessors(res.data)
        }).catch(err => {
            console.log(err.response.message)
        })

    }, [])
    const [search, setSearchProfessor] = useState({})
    const searchProfessor = () => {
        for (const item of professors) {
            if (item.professorName.toLowerCase() === search.professorName.toLowerCase()) {
                setSearchProfessor(item)
                history(`/professor/${item.id}`)
                return
            }
        }
    }

    const handleFilterProfessors = (e) => {
        const searchWord = e.target.value;
        const newFilteredProfessors = professors.filter((value) => {
            return value.professorName.includes(searchWord);
        })
        setFilteredData(newFilteredProfessors);
    };

    return (<>
        <Header/>
        <VStack spacing='500' backgroundImage={ImgBody} backgroundSize='cover'>
            {/* Body */}
            <VStack spacing='50'>
                <Heading color='#EEE'>ابحث عن الاستاذ الجامعي</Heading>
                <HStack spacing='3'>
                    <Button  onClick={(e) => searchProfessor(e)}
                            _hover={{backgroundColor: "#FFD05E", color: "black"}} width='7rem'
                            backgroundColor='black' color='white' borderRadius='50'>بحث</Button>
                    <VStack
                        align='stretch'
                    >
                        {/*<Input onChange={(e)=> setSearchProfessor({...search, name: e.target.value})}*/}
                        <Input textAlign='right' onChange={(e) => {
                            handleFilterProfessors(e);
                            setSearchProfessor({...search, professorName: e.target.value})
                        }}
                               placeholder='ادخل اسم الاستاذ' border='solid 2px ' borderColor='black' width='22rem'
                               borderRadius='10' backgroundColor='white'/>
                        {
                            filteredData.length != 0 && (
                                <Box p={3} backgroundColor='white'>
                                    {
                                        filteredData.map(curProfessor => {
                                            return (
                                                <>
                                                    <Link
                                                        to={`professor/${curProfessor.id}`}>
                                                        <Wrap my={1}>
                                                            <WrapItem>
                                                                <Avatar  size='sm' name={curProfessor.professorName} src='https://bit.ly/tioluwani-kolawole' />
                                                            </WrapItem>
                                                            <WrapItem>
                                                                <Text fontSize='xl'>{curProfessor.professorName} ({curProfessor.universityName})</Text>
                                                            </WrapItem>
                                                        </Wrap>
                                                    </Link>
                                                    <Divider orientation='horizontal' />
                                                </>)
                                        })
                                    }
                                </Box>
                            )
                        }

                    </VStack>

                </HStack>
            </VStack>
            <Footer/>
        </VStack>
    </>)
}

export default Home
