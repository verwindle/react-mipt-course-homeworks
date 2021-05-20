import { Link } from "react-router-dom";
import boardData from "../../../fixtures/board";
import DOM from "../../dom";
import DataGrid from "../../card";
import Header from "../../header";

const boardsFixture = boardData;
const boardsURL = "https://431243-co32399.tmweb.ru/api/board";
export { boardsFixture, boardsURL };

export default function boardCard(board) {
    return (
        <DataGrid.Card data={JSON.stringify(board)}>
            <DataGrid.Item border={"none none inset none"}>
                <Header.Subtitle>{board.title}</Header.Subtitle>
                <Header.Subtitle>{`category:\t${board.category.value}`}</Header.Subtitle>
            </DataGrid.Item>
            <DataGrid.Item border={"double none none double"}>
                <DataGrid.Image src={board.icon.value} alt={"Where is the image Lebowski?"}></DataGrid.Image>
            </DataGrid.Item>
            <DataGrid.Item direction={"column"} border={"none none none double"}>
                <Header.Subtitle>{`Owner credits:`}</Header.Subtitle>
                <Header.Paragraph alignment={"left"}>{`Name:\t${board.owner.name}`}</Header.Paragraph>
                <Header.Paragraph alignment={"right"}>{`Email:\t${board.owner.email}`}</Header.Paragraph>
                <Header.Paragraph alignment={"justify"}>{`id:\t${board.owner._id}`}</Header.Paragraph>
            </DataGrid.Item>
            <DataGrid.Item border={"none none none double"} direction={"column"}>
                <Header.Subtitle>{`Key:\t${board.key}`}</Header.Subtitle>
                <Header.Paragraph alignment={"left"} direction={"column"}>
                    {`Has tasks:\t${board.tasks.length}`}
                </Header.Paragraph>
            </DataGrid.Item>
            <Link style={{ textDecoration: "none" }} to={`tasks/board?=${board.key}`}>
                <DataGrid.Item>
                    <DOM.Button>Check my INFO</DOM.Button>
                </DataGrid.Item>
            </Link>
        </DataGrid.Card>
    );
}
