import styled from "styled-components/macro";

export const Grid = styled.section`
    display: grid;
    position: inherit;
    grid-template-columns: 30% 30% 30%;
    padding: 3%;
    overflow: hidden;
`;

export const Wrap = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    max-width: 1800px;
    margin: auto;
    width: 100%;

    @media (max-width: 1600px) {
        flex-direction: column;
    }
`;

export const Button = styled.button`
    display: block;
    border-radius: 25%;
    box-shadow: 0 0 10px 10px #0ff;
    margin: auto;
    color: #fff;
    background-color: #1f7869;
    opacity: 0.6;
`;
