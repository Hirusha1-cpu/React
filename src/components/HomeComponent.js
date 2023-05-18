import React from 'react';
import ReactDOM from'react-dom';
import {Card, CardImg,CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

function RenderCard({item}){
    if (!item || !item.name) {
        return null; // Render nothing if item or item.name is undefined
      }
    return(
        <Card>
            {/* <CardImg top width='100%' src={item.image} alt={item.name}/> */}
            {/* {item.image && <CardImg top width="100%" src={item.image} alt={item.name} />} */}
            <CardBody>
                <CardTitle>
                    {item.name}
                </CardTitle>
                {item.designation? <CardSubtitle>{item.designation}</CardSubtitle>: null}
                <CardText>{item.designation}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props){
    return(
        <div className='container'>
            <div className='row align-items-start'>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.dish}/>
                </div>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.promotion}/>
                </div>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.leader}/>
                </div>
            </div>

        </div>
    )
}

export default Home;