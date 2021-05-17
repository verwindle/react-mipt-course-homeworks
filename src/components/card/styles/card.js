import styled from 'styled-components/macro';

export const Card = styled.div`
    display: flex;    
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    max-width: 500px;
    margin: auto;
    width: 95%;
    height: 90%;
    background: #A7DDDF;
    -moz-box-shadow: 1px 2px 3px rgba(0,0,0,.5);
    -webkit-box-shadow: 1px 2px 3px rgba(0,0,0,.5);
    box-shadow: 1px 2px 3px rgba(0,0,0,.5);
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
    border: thick #322322;
    border-style: ${({ border }) => border};
    overflow: hidden;
`;

export const Image = styled.img`
    max-width: 600px;
`;

export const Code = styled.span`
    width: 100%;
    color: #0E710A;
    margin: .5rem 0;
`;
