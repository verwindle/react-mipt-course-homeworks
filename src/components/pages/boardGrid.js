import { useState } from "react";
import { Link } from "react-router-dom";
import boardCard from "./board/board";
import DOM from "../dom";
import DataGrid from "../card";

export default function BoardRender({ fetchURL, fixture }) {
    const APIResponse = fetch(fetchURL).then((resp) => (resp.status === 200 ? resp.json() : fixture));
    let [responseContent, setResponseData] = useState(APIResponse);

    setTimeout(() => {
        APIResponse.then((value) => setResponseData(value));
    }, 30000);
    responseContent = responseContent instanceof Promise ? fixture : responseContent;

    return (
        <>
            <Link style={{ textDecoration: "none", position: "fixed", top: "4%", left: "47%" }} to={`/home`}>
                <DOM.Button>Go Home</DOM.Button>
            </Link>
            <DataGrid fetchURL={fetchURL} fixture={JSON.stringify(responseContent)}>
                {responseContent.map((obj) => boardCard(obj))}
            </DataGrid>
        </>
    );
}
