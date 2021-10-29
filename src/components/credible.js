import * as React from 'react';
import {
    headerText
} from '../styles/layout.module.css'
import { StaticImage } from "gatsby-plugin-image"

const Credible = (props) => {

    return (
        <section style={{margin: '0 auto 0 auto'}}>
            <h1 className={headerText}>Achievements</h1>
            <StaticImage src="../images/udacity.jpg" alt="My Udacity Nanodegree certificate for completing their Full Stack JavaScript Developer program" />
            <div style={{height: '20px'}}></div>
            <StaticImage src="../images/degree.jpg" alt="My Bachelor of Science degree in Computer Science from University of California, Irvine" />
        </section>
    )
}   

export default Credible;