import React from 'react';
import styled from 'styled-components';

/** import material components */


/** import material icons */

/** styled components */
const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
    return (
        <Container>
            Super deal! Free shipping on orders over $900.
        </Container>
    )
}

export default Announcement;