import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import speakerImg from '../assets/speakerImg.png'
import Footer from '../components/Footer'
import leftPattern from '../assets/leftPattern.png'
import rightPattern from '../assets/rightPattern.png'
import speaker from '../assets/speaker.jpg'
import { ToastContainer, toast } from 'react-toastify';
const Events = () => {
    const [loading, setLoading] = useState(false)
    const formRef = useRef(null)

    const scriptUrl = "https://script.google.com/macros/s/AKfycbwtDYZ-mz30vcn21q91LYRNRHXuQuzYEF-jdFtg6ravA1W-B882fGsBty0wSHIE7hH9pg/exec"

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        fetch(scriptUrl, 
        { method: 'POST', 
        body: new FormData(formRef.current)})
        .then(response => {
            if(response.status === 200 || 201){
                setLoading(false)
                toast.success('Congratulation🎉, You have successfully registered for the event', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    toastClassName: 'toast'
                    });
                    //clear form
                    formRef.current.reset()
            }else{
                setLoading(false)
                toast.error('Oops! Something went wrong, please try again', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
        })
        .catch(error => console.error('Error!', error.message))
    }

  return (
    <StyledEvents id="events">
        <ToastContainer />
                  <div className="left-pattern">
                    {/* <img src={leftPattern} alt="left-pattern" /> */}
                </div>
                <div className="right-pattern">
                    <img src={rightPattern} alt="right-pattern" />
                </div>
       
        <div className="events-container">
     
            <div className="upcoming-header">
                <h1>Upcoming Events</h1>
            </div>
            <div className="about-event">
                <div className="text-content">
                    <div className="topic-tag">
                        <h6>Topic</h6>
                    </div>
                    <div className="event-title">
                        <h2>
                        Getting started as a software engineer 
                        </h2>
                    </div>
                    <div className="event-description">
                    <p>
                    Becoming a software engineer takes a healthy level of ambition, hard-work, and adaptability, analyzing user requirements, writing and testing code, researching, designing and developing user-focused software.
                    </p>
                    <p> 
                    In this session, we'll discuss some of the important steps and skills you need to gather in getting started as a software engineer.
                    </p>
                    </div>
                </div>
                <div className="speaker-details">
                    <div className="speaker-img">
                        <div className="img-container">
                            <img src={speaker} alt="speaker" />
                        </div>
                    </div>
                    <div className="speaker-name">
                        <h4 className="speaker-name">
                        Caleb Olojo
                        </h4>
                        <h4 className="speaker-role">
                            Software Engineer
                        </h4>
                    </div>
                </div>
            </div>
            <div className="events-form">
                <div className="form-title">
                    <h2>Fill this form to join the session</h2>
                </div>
                <div className="form-container">
                    <form onSubmit={handleSubmit} ref={formRef}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>    
                            <input type="text" name="phone" id="phone" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="occupation">Occupation</label>
                            <input type="text" name="occupation" id="occupation" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="softwarejourney">Where are you in your Software Development Journey?</label>
                           <select name="softwarejourney" id="softwarejourney" required>
                                 <option value=""> </option>
                                 <option value="I'm not a software developer">I'm not a software developer</option>
                                    <option value="I want to learn software development">I want to learn software development</option>
                                    <option value="I just started out in software development some months back">I just started out in software development some months back</option>
                                    <option value="I have been doing software development for some years">I have been doing software development for some years</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="howyouknew">Where did you hear about the session?</label>
                           <select name="howyouknew" id="howyouknew" required>
                                <option value=""> </option>
                                 <option value="LinkedIn">Linkedln</option>
                                    <option value="Instagram">Instagram</option>
                                    <option value="My friend">My friend</option>
                                    <option value="Twitter">Twitter</option>
                                    <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <button type="submit">
                                {loading ? "Loading..." : "Register"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
    </StyledEvents>
  )
}

export default Events

const StyledEvents = styled.div`
    background-color: #FDFAEA;
   position: relative;
    @media (max-width: 768px) {
        
    }
    .toast{
        font-family: 'EuclidCircularA', sans-serif;
    }
            .left-pattern{
                position: absolute;
                top: 0;
                left: 0;
                width: 30%;
                height: 100%;
                z-index: 1;
                background: url(${leftPattern});
                background-repeat: no-repeat;
                background-size: contain;
                @media (max-width: 768px) {
                    display: none;
                }
            }
            .right-pattern{
                position: absolute;
                top: 0;
                right: 0;
                width: 30%;
                height: 100%;
                z-index: 1;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }

                @media (max-width: 768px) {
                    display: none;
                }
            }
     
    
    .events-container{
        z-index: 3;
        max-width: 48.5rem;
        padding: 6.5625rem 7.625rem 2rem 7.625rem;
        position: relative;
        @media (max-width: 768px) {
            max-width: 100%;
            padding: 5.25rem 1rem 0.25rem 2.375rem;
        }
        .upcoming-header{
            margin-bottom: 4.375rem;
            @media (max-width: 768px) {
                margin-bottom: 2.375rem;
            }
            h1{
                font-size: 2.5rem;
                text-transform: uppercase;
                font-weight: 700;
                line-height: 3.4rem;
                font-family: 'Recoleta-Bold', sans-serif;
            }
        }
        .about-event{
            @media (max-width: 768px) {
                display: flex;
                flex-direction: column-reverse;

            }
            .text-content{
                .topic-tag{
                    display: flex;
                    margin-bottom: 1.5625rem;
                    h6{
                        padding: 0.625rem 1.625rem;
                        font-size: 0.75rem;
                        font-family: 'EuclidCircularAMedium';
                        font-weight: 700;
                        background-color: #5FC152;
                        color: #FDFAEA;
                        border-radius: 6.25rem;
                        text-transform: uppercase;
                    }
                }
                .event-title{
                    margin-bottom: 1.5625rem;
                    h2{
                        font-size: 1.875rem;
                        font-family: 'EuclidCircularAMedium';
                        font-weight: 700;
                        max-width: 18.4375rem;

                        @media (max-width: 768px) {
                            font-size: 1.7rem;
                            max-width: 100%;
                            line-height: 1.6rem;
                        }
                    }
                }
                .event-description{
                    margin-bottom: 1.5625rem;
                    @media (max-width: 768px) {
                        margin-bottom: 2.6875rem;
                    }
                    p{
                        font-size: 1.5625rem;
                        font-family: 'EuclidCircularA';
                        font-weight: 400;
                        line-height: 2.304375rem;
                        color: #303030;

                        @media (max-width: 768px) {
                            font-size: 1.25rem;
                            line-height: 1.84375rem;
                        }
                    }
                }
            }
            .speaker-details{
                display: flex;
                align-items: center;
                column-gap: 2.3125rem;
                @media (max-width: 768px) {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 1.0625rem;
                    margin-bottom: 1.0625rem;
                }
                .speaker-img{
                    .img-container{
                        width: 4.8125rem;
                        height: 4.8125rem;
                        @media (max-width: 768px) {
                            width: 11.0625rem;
                            height: 11.0625rem;
                        }
                        img{
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            border-radius: 50%;
                        }
                    }
                }
                .speaker-name{
                        font-size: 1.125rem;
                        font-family: 'EuclidCircularAMedium';
                        font-weight: 700;
                        line-height: 1.659375rem;
                        color: #000000;
                }
                .speaker-role{
                        font-size: 1.125rem;
                        font-family: 'EuclidCircularA';
                        font-weight: 300;
                        line-height: 1.659375rem;
                        color: #303030;
                }
            }
        }
        .events-form{
           
            margin-top: 6.1875rem;
            @media (max-width: 768px) {
                margin-top: 0.375rem;
            }
            .form-title{
                margin-bottom: 1.5625rem;
                h2{
                    font-size: 1.875rem;
                    font-family: 'EuclidCircularAMedium';
                    font-weight: 700;
                  
                    color: #000000;  
                    
                    @media (max-width: 768px) {
                        font-size: 1.25rem;
                    }
                }   
            }
            .form-container{
                padding-right: 2.5rem;
                form{
                    .form-group{
                        margin-bottom: 1.5625rem;
                   
                        label{
                            display: block;
                            margin-bottom: 0.375rem;
                            font-size: 0.75rem;
                            font-family: 'EuclidCircularARegular';
                            font-weight: 400;
                            line-height: 1.659375rem;
                            color: #130E0B;

                            @media (max-width: 768px) {
                                font-size: 0.75rem;
                            }
                        }
                        input[type="text"],[type="email"]{
                            z-index: 3;
                            width: 98%;
                            height: 2.6875rem;
                            font-family: 'EuclidCircularA';
                            padding: 0.0175rem 0.5rem;
                            font-size: 1rem;
                            background-color: #FDFAEA;
                            border: 1px solid #C4C4C4;
                            outline: none;
                            border-radius: 0.3125rem;
                            @media (max-width: 768px) {
                                width: 100%;
                            }
                        }
                        select{

                            width: 100%;
                            height: 2.6875rem;
                            font-family: 'EuclidCircularA';
                            padding: 0.0175rem 0.5rem;
                            font-size: 1rem;
                            background-color: #FDFAEA;
                            border: 1px solid #C4C4C4;
                            outline: none;
                            border-radius: 0.3125rem;
                            @media (max-width: 768px) {
                                width: 106%;
                            }
                        }
                        button{
                            width: 100%;
                            height: 2.6875rem;
                            font-family: 'EuclidCircularAMedium';
                            font-size: 1.125rem;
                            font-weight: 700;
                            font-size: 1rem;
                            background-color: #5FC152;
                            border: none;
                            outline: none;
                            border-radius: 0.3125rem;
                            color: #FDFAEA;
                            @media (max-width: 768px) {
                                width: 106%;
                            }
                        }
                    }
                }
            }
        }
    }
`
