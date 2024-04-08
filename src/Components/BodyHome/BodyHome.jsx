import React, { useEffect, useState } from 'react';
import SingleProfile from '../SingleProfile/SingleProfile'
import { Row, Col } from 'react-bootstrap';
import './BodyHome.css';

export default function BodyHome() {

    const [data, setData] = useState([]);
    
    const getProfiles = async ()=>{
        try{
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/`,
            {
            method:"GET",
            headers:{"Authorization": process.env.REACT_APP_API_KEY}
        })

        let json = await response.json();
        
        setData(json)

    }catch(err){
        console.log(err);
    }
}

        useEffect(()=>{
            getProfiles();
        }, []);

        useEffect(()=>{
            console.log(data);
        }, [data]);

    return(
        <Col xs={10} sm={8} lg={7} className='bodyHome-col offset-1 offset-sm-0'>
            <Row className='py-5'>
                {data.map(({area, bio, email, image, name, surname, title, username, _id})=>{
                    return(
                        <SingleProfile
                            key={_id}
                            area={area}
                            bio={bio}
                            email={email}
                            image={image}
                            name={name}
                            surname={surname}
                            title={title}
                            username={username}
                        />
                    )
                })}
            </Row>
        </Col>
    )
}