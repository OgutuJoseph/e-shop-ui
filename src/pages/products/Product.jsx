import React from 'react';
import styled from 'styled-components';

/** import css different media types */
import { mobile } from '../../responsive';

/** import components */
import Announcement from '../../components/announcement/Announcement';
import Navbar from '../../components/navbar/Navbar';
import Newsletter from '../../components/newsletter/Newsletter';
import Footer from '../../components/footer/Footer';

/** import material ui icons */
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

/** styled components */
const Container = styled.div`

`
const Wrapper = styled.div`
    display: flex;
    padding: 50px;

    ${mobile({ padding: '10px', flexDirection: 'column' })}
`
const ImgContainer = styled.div`
    flex: 1;
`
const Img = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;

    ${mobile({ height: '40vh' })}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;

    ${mobile({ padding: '10px' })}
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;

    ${mobile({ width: '100%' })}
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${mobile({ width: '100%' })}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`
const Button = styled.button`
    padding: 15px; 
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: #f8f4f4;
    }
`

const Product = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Img src='/images/logos/product-logo.jpg' />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>
                        There are many variations of Lorem Ipsum, but majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveIcon />
                            <Amount>1</Amount>
                            <AddIcon />
                        </AmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product;