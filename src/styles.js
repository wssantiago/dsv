import styled from 'styled-components'

const MainContainer = styled.div`
    background-color: #242D34;
    height: 100vh;
    font-family: 'Suez One';
    font-weight: 400;
    color: white;
    margin: 0;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10% auto 0 auto;
`;

const StyledTitle = styled.h1`
    font-size: 46px;
`;

const CardsContainer = styled.div`
    background: white;
    height: 50%;
    width: 50%;
    margin: 1.5% auto 0 auto;
    border-radius: 25px;
    padding: 0;
    border: 5px solid white;
    display: block;
    overflow: hidden;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: #0066ff;
        border-radius: 10px;
        :hover {
            background: #0085ff;
        }
        :active {
            background: #0043ff;
        }
    }
    ::-webkit-scrollbar-button {
        background: transparent;
    }
`;

const CardContainer = styled.div`
    background: white;
    height: 300px;
    margin: 0;
    display: flex;
`;

const Card = styled.a`
    text-decoration: none;
    margin: auto;
    background: white;
    height: 60%;
    width: 15%;
    padding: 0;
    cursor: pointer;
    transition: 0.3s;
    border-radius: .5rem;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    &:hover {
        transform: scale(1.04);
    }
    &:active {
        transform: translate(3px, -3px);
    }
`;

const CardImg = styled.div`
    background: #ffffff;
    height: 75%; 
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 40px;
    color: #0066ff;
`;

const CardName = styled.h2`
    font-size: 20px;
    background-color: #0066ff;
    height: 25%;
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;
    align-items: center;
    justify-content: center;
    display: flex;
    box-shadow: inset 0 0 0 0 white;
    margin: 0;
    color: white;
    transition: color .35s ease-in-out, box-shadow .35s ease-in-out;gray;
    &{Card}:hover {
        box-shadow: inset 150px 0 0 0 white;
        color: #0066ff;
    }
`;

const DSContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    border-bottom: 2px dashed #0066ff;
    width: 50%;
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
    background: white;
`;

const StyledArray = styled.h2`
    font-size: 32px;
    padding: .5%;
    display: block;
    background: white;
    color: #0066ff;
`;

const BodyContainer = styled.div`
    background: #242D34;
    width: 50%;
    height: 35%;
    display: block;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background: white;
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;
`;

const ElementContainer = styled.div.attrs(props => ({
    element: props.element
  }))`
    width: 100%;
    background: white;
    display: flex;
    transition: all .5s;
    padding-top: 2%;
    margin-bottom: 2%;
    height: ${props => props.element ? '30%' : '0%'};
    color: ${props => props.element ? '#0066ff' : 'white'};
    justify-content: center;
    align-items: center;
    font-size: 26px;
`;

const ButtonsContainer = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: 70%;
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;
`;

const StyledInputButton = styled.div`
    width: 25%;
    height: 10%;
    display: flex;
    border: 2px solid #0066ff;
    border-radius: .65rem;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 5%;
    box-shadow: inset rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    &{StyledButton}:active {
        transform: translate(0px, 3px);
    }
`;

const StyledInput = styled.input`
    width: 60%;
    height: 100%;
    padding: 5%;
    border-bottom-left-radius: .5rem;
    border-top-left-radius: .5rem; 
    box-sizing: border-box;
    border: none;
    background: white;
    &:focus {
        outline: none;
        border: 1px solid #0066ff;
        border-right: none;
    }
`;

const StyledButton = styled.button.attrs(props => ({
    solo: props.solo
  }))`
    width: ${props => props.solo == 'true' ? '10%' : '40%'};
    height: ${props => props.solo == 'true' ? '12%' : '100%'};
    border-bottom-right-radius: .5rem;
    border-top-right-radius: .5rem;
    border-top-left-radius: ${props => props.solo == 'true' ? '.5rem' : '0'};
    border-bottom-left-radius: ${props => props.solo == 'true' ? '.5rem' : '0'};
    background: #0066ff;
    box-shadow: ${props => props.solo == 'true' ? 'inset rgba(0, 0, 0, 0.11) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' : 'none'};
    color: white;
    transition: color .2s ease-in-out, box-shadow .2s ease-in-out;
    &:hover {
        box-shadow: inset 150px 0 0 0 white;
        color: #0066ff;
    }
    border: ${props => props.solo == 'true' ? '2px solid #0066ff' : 'none'};
    border-left: 2px solid #0066ff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: ${props => props.solo == 'true' ? '5%' : '0'};
`;


export { MainContainer, StyledTitle, TitleContainer, CardsContainer, CardContainer, Card, CardImg, CardName, DSContainer, StyledArray, ButtonsContainer, ElementContainer, BodyContainer, StyledInputButton, StyledInput, StyledButton };