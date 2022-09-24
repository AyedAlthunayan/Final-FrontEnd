import {Button, Heading, HStack, Image, Input, VStack} from '@chakra-ui/react'
import React, {useState} from 'react'
import Footer from '../components/Footer'
import ImgLogin from "../img/ImgLogin.jpg"
import IconUni from "../img/IconUni.png"
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios";
import {APIs} from "../const/APIs";
import Swal from "sweetalert2";
import Cookies from 'universal-cookie';

function AdminLogin() {
    const [user, setUser] = useState({
        email: '', password: '',
    })
    const history = new useNavigate();
    const handleSubmit = async () => {
        axios.post(APIs.ADMIN.LOGIN, user).then(res => {
            Swal.fire({
                icon: 'success',
                title: `Login Successfully`,
                text: ' Successfully logged in.',
                showConfirmButton: false,
                timer: 1500
            })
            const cookies = new Cookies();
            sessionStorage.setItem("admin", JSON.stringify(res.data))
            cookies.set('student', res.data);
            console.log(cookies.get('admin')); // student
            history("/")
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: `Something went wront`,
                text: err.response.message,
                showConfirmButton: false,
                timer: 1500
            })
        })
    }


    return (<>
        <div className="row" style={{marginBottom: '15rem', marginTop: '5rem'}}>
            <div className="col-md-12 col-lg-6 col-sm-12 col-xl-6">
                <img width={"50%"} height={"50%"} src={ImgLogin} alt="ImgLogin"/>
            </div>
            <div className="col-md-12 mt-xl-5 col-lg-6 col-sm-12 col-xl-6">
                <VStack justifyContent='center' width='25rem' spacing='5' backgroundColor='#F4F3F3'
                        padding='2rem' borderRadius='5' border='gray solid 1px'>
                    <Heading><Image src={IconUni} width='3rem'/>نموذج تسجيل الدخول</Heading>
                    <Input type='email' onChange={(e) => setUser({...user, email: e.target.value})}
                           value={user.email} textAlign='right' placeholder='الايميل'/>
                    <Input type='password' onChange={(e) => setUser({...user, password: e.target.value})}
                           value={user.password} textAlign='right' placeholder='كلمة المرور'/>
                    <HStack spacing='10'>
                        <Link to=''>
                            <Button onClick={(e) => handleSubmit(e)} color='white'
                                    _hover={{backgroundColor: '#FFD05E', color: 'black'}}
                                    backgroundColor='black'>Submit</Button>
                        </Link>
                    </HStack>
                </VStack>
            </div>
        </div>

        <Footer/>
    </>)
}

export default AdminLogin
