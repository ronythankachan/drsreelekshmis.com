import React from 'react'

const TestPage = (props) => {
    return (
        <Container>
            <h1>hello</h1>
            <p>world</p>
        </Container>
    )
}

const Container = (props)=>{
    return(
        <div className="container">
            {props.children}
        </div>
    );
}
export default TestPage
