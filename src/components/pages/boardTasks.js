import { useState } from "react";
import { Link } from "react-router-dom";
import RenderTaskMenu from "./tasks/tasks";
import DOM from "../dom";
import Header from "../header";

const headerStyle = {
    content: "a",
    whiteSpace: "pre",
    position: "absolute",
    top: "8%",
};

export default function TasksRender({ fetchURL, fixture }) {
    const APIResponse = fetch(fetchURL).then((resp) => (resp.status === 200 ? resp.json() : fixture));
    let [responseContent, setResponseData] = useState(APIResponse);

    setTimeout(() => {
        APIResponse.then((value) => setResponseData(value));
    }, 30000);
    responseContent = responseContent instanceof Promise ? fixture : responseContent;

    return (
        <DOM fetchURL={fetchURL} fixture={JSON.stringify(responseContent)}>
            <Link style={{ textDecoration: "none", position: "absolute", top: "4%", left: "54%" }} to={`/home`}>
                <DOM.Button>Go Home</DOM.Button>
            </Link>
            <Link style={{ textDecoration: "none", position: "absolute", top: "4%", left: "40%" }} to={`/boards`}>
                <DOM.Button>Return to Boards</DOM.Button>
            </Link>
            <DOM.Wrap>
                <Header.Title style={headerStyle}>
                    {`Tasks Data for ${responseContent.title}\n`}
                    {`of owner:\n`}
                    {`name:\t${responseContent.owner.name}`}
                    {`email:\t${responseContent.owner.email}`}
                </Header.Title>
                {RenderTaskMenu(responseContent.tasks)};
            </DOM.Wrap>
        </DOM>
    );
}
