import React from 'react'
import styles from './Jumbotron.module.css'
import styled from 'styled-components'


const Section = styled.section`
    background-color: #d74234;
    min-height: 550px;
    padding: 50px 0;
    color: #fff;
`
const Jumbotron = () => {
    return (
        <Section className={styles.homeSection_1}>
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-5">
                        <div className="pt-4 mt-4">
                            <h1>React For Rails Developers</h1>
                            <p>Supercharge your Ruby on Rails Apps with React.js</p>
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
