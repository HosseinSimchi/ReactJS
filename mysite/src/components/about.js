import {useState} from 'react'

const About = () => {
    const [getname, setname] = useState('Hossein Simchi')
    return (
        <>
            <h1>
                About page : {getname}
            </h1>
        </>
    )
}

export default About;
