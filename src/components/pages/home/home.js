import { Link } from "react-router-dom";
import Header from "../../header";

const linkStyle = {
    textDecoration: "underline #000",
    color: "#2F9889",
};

const navigationStyle = {
    position: "fixed",
    width: "91%",
    left: "4%",
    top: "50%",
    flexDirection: "row",
};

export default function Home() {
    return (
        <>
            <Header.Title>Welcome to React course</Header.Title>
            <Header.Subtitle>Made by Zarubin Vsevolod</Header.Subtitle>
            <Header style={navigationStyle}>
                <Link style={linkStyle} to={"/hw1"}>
                    <Header.Subtitle>HW1</Header.Subtitle>
                </Link>
                <Link style={linkStyle} to={"/hw2"}>
                    <Header.Subtitle>HW2</Header.Subtitle>
                </Link>
                <Link style={linkStyle} to={"/hw3"}>
                    <Header.Subtitle>HW3</Header.Subtitle>
                </Link>
                <Link style={linkStyle} to={"/hw4"}>
                    <Header.Subtitle>HW4</Header.Subtitle>
                </Link>
                <Link style={linkStyle} to={"/hw5"}>
                    <Header.Subtitle>HW5</Header.Subtitle>
                </Link>
            </Header>
        </>
    );
}
