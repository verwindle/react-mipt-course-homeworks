import styled from "styled-components/macro";

export const Card = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    max-width: 500px;
    margin: 0 0 0 18%;
    width: 95%;
    height: 90%;
    background: #a7dddf;
    -moz-box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
    border-radius: 7%;

    @media (max-width: 300px) {
        flex-direction: column;
    }
`;

export const Item = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    padding: 0 3%;
    width: 85%;
    justify-content: ${({ justify }) => justify};
    border: thick #322322;
    border-style: ${({ border }) => border};
    overflow: hidden;
`;

export const Image = styled.img`
    margin: 1rem auto;
    max-width: 600px;
`;
