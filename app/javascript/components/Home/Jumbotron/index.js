import React from 'react'
import styles from './Jumbotron.module.css'
import styled from 'styled-components'


const Section = styled.section`
    background-color: #d74234;
    min-height: 550px;
    padding: 50px 0;
    color: #fff;
`

const Subhead = styled.p`
    font-size: 18px;
    font-weight: 500px;
`

const Header = styled.h1`
    color: #fff;
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
`

const Button = styled.button`
    display: inline-block;
    text-decoraton: none;
    cursor: pointer;
    border-radius: none;
    font-weight: bold;
    background: #fff;
    box-shadow: 0 0 0 3px #473528, -6px 6px #ef5f17, -6px 6px 0 3px #473228;
`
const Jumbotron = () => {
    return (
        <Section className={styles.homeSection_1}>
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-5">
                        <div className="pt-4 mt-4">
                            <Header>React For Rails Developers</Header>
                            <Subhead>Supercharge your Ruby on Rails Apps with React.js</Subhead>
                            <div className="cta-wrapper">
                                <Button className="btn fancy-btn">Get Started</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-7">
                        <div className="pt-4 mt-4 text-center">
                        <iframe width="560" height="315" 
                                src="https://www.youtube.com/embed/B0SxxHAImhc" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; 
                                autoplay; 
                                clipboard-write; 
                                encrypted-media; 
                                gyroscope; 
                                picture-in-picture" 
                                allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            
        </Section>
    )
}

export default Jumbotron
