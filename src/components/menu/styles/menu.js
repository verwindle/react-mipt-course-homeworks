import styled from "styled-components/macro";

export const Menu = styled.main`
    position: absolute;
    top: 40%;
    left: 25%;
    width: 50%;
`;

export const UL = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    border: #1f7869 3px solid;
    background: ${({ background }) => background};
    z-index: 0;
`;

export const LI = styled.li`
    border: #1f7869 2px;
    border-style: solid solid none solid;
`;

export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: ${(props) => `${props.dept * 18}px`};
    align-items: center;
    max-width: 1000px;
    margin: auto;
    padding: 0 2%;
    border-radius: 5%;
    border: double thick #322322;
`;

export const Arrow = styled.span`
    display: flex;
    height: 25px;
    width: 35px;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &::after {
        content: "";
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;

        border-top: 4px solid #000;

        transform: ${(props) => (props.toggle ? "rotate(180deg)" : "rotate(0deg)")};
    }
`;
