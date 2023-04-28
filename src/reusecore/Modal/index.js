import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import logo from "../../assets/images/app/logo_eprogram.webp";
import Button from "../../reusecore/Button";
import axios from "axios";
import { navigate } from "gatsby";

const OverlayContainer = styled.div`
background-color: rgba(0, 0, 0, 0.5);
width: 100vw;
height: 100vh;
display: flex;
position: fixed;
z-index: 999;
justify-content: center;
align-items: center;
.image {
    width: 200px
}
input {
    height: 45px;
    border:none;
    background: #fff;
    width: 100%;
    padding: 20px 30px;
    font-size: 15px;
    border-radius: 10px;
    box-shadow: rgba(206, 206, 206, 0.78) 0px 1px 23px -8px;
}
.email-card {
    z-index: 9999;
    position: relative;
    margin-top: -200px;
    width: 450px;
    height: auto!important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
    min-height: 320px;
    border-radius: 7px;
    background-color: white!important;
}
.form {
    padding-inline: 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
}
.button {
    width: 100%!important
}
.flash {
    width: 90%;
    height: 45px;
    position: absolute;
    top: -15px;
    background-color: green;
    display: flex;
    flex-direction: row;
    gap: 5px;
    justify-content: start;
    align-items: center;
    padding-left: 20px;
    border-radius: 7px;
    color: white;
    animation: fadeInOut;
}
.data-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;
    width: 100%;
}
.email-input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%
}
@media only screen and (max-width: 600px) {
    .email-card {
        width: 85%;
    }
    
}
@media only screen and (max-width: 400px) {
    .email-card {
        width: 90%;
    }
    
}
`;

const Modal = ({ open, setOpen }) => {
    const [email, setEmail] = useState("");
    const [reqError, setReqError] = useState(false);
    const [validError, setValidError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setReqError(null), 2500)
        return () => clearTimeout(timer);

    }, [reqError])

    const emailCheck = () => {
        const isValid = /\S+@\S+\.\S+/.test(email);
        setEmail(email);
        if (!isValid)
            setValidError("Email invalide");
        else {
            setLoading(true);
            axios.post(`${process.env.GATSBY_BACK_API}/email-check`, {
                email: email,
            })
                .then(response => {
                    console.log(response.data);
                    if (response.data.customers && response.data.customers.length) {
                        if (response.data.customers[0]?.tags)
                        {
                            window.location.assign(`https://eprogram.store/?email=${email}&view=${response.data.customers[0]?.tags}`);
                            setLoading(true);
                            setOpen(false);
                        }
                    }
                    else {
                        axios.post(`${process.env.GATSBY_BACK_API}/company-check`, {
                            email: email,
                        })
                            .then(response => {
                                if (response.data[0]?.name)
                                {
                                    window.location.assign(`https://eprogram.store/account/register?email=${email}&view=${response.data[0]?.name}`);
                                    setLoading(true);
                                    setOpen(false);
                                }
                                else {
                                    setOpen(false);
                                    navigate("#pricing")
                                }
                            })
                            .catch(error => {
                                setReqError("company check error", error);
                            });
                    }
                })
                .catch(error => {
                    setReqError("Api error", error)
                });
        }
    }

    return (
        <OverlayContainer onClick={() => { setOpen(false) }}>
            <div className="email-card" onClick={(e) => e.stopPropagation()}>
                {/* {reqError && <div className='flash'>{reqError}</div>} */}
                <div className='data-container'>
                    <img loading="lazy" className="image" src={logo} alt="Logo eProgram" />
                    <div className="form">
                        <span>Veuillez entrer votre Email</span>
                        <div className='email-input'>
                            <input type='text' placeholder='Email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {validError && <span style={{ paddingLeft: "10px", fontSize: "14px", color: "red" }}>{validError}</span>}
                        </div>
                        <Button className="button" onClick={() => { emailCheck() }}>
                            {!loading ? <span>Vérifier mon éligibilité</span> :
                            <span>Chargement...</span>
                            }
                        </Button>
                    </div>
                </div>
            </div>
        </OverlayContainer>
    )

}
export default Modal;