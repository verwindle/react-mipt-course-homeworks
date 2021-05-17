import styled from 'styled-components/macro';

export const Grid = styled.section`
    display: grid;
    width: 100%;
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

export const Title = styled.h1`
    font-size: 46px;
    font-weight: 0;
    line-height: 1.5;
    text-align: center;
    -webkit-box-shadow: 0 2px 5px 3px #2F9889;
    moz-box-shadow: 0 2px 5px 3px #2F9889;
    box-shadow: 0 2px 5px 3px #2F9889;
    padding: 10px 5%;
    color: #222;

    @media (max-width: 1000px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.h3`
    font-size: 24px;
    text-align: center;
    margin-bottom: 1rem;
    padding: 0 10%;
    color: #333;

    @media (max-width: 600px) {
        font-size: 26px;
    }
`;

export const Paragraph = styled.p`
    text-align: ${({ alignment }) => alignment};
    padding: 0 .5rem;
    width: 97%;

    @media (max-width: 700px) {
        font-size: 18px;
    }
`;
