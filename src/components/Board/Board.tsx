import React from 'react';
import {AppBar} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import styled from '@emotion/styled'
import {BoardType} from "../../types/types";
import {Link} from "react-router-dom";

interface BoardProps{
    data: BoardType;
}

function Board ({data}: BoardProps) {

    const StyledToolbar = styled(Toolbar)`
        border-left: 5px solid #1a1aff;
        background-color: #e6ffff;
        color: black;
        font-size: 20px;
        display: grid !important;
        align-content: center;
        border-radius: 5px;
        backdrop-filter: blur( 12.0px );
        -webkit-backdrop-filter: blur( 12.0px );
        &:hover {
            box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14);
            transform: scale(1.01);
            transition: .2s; 
        }
    `

    const DefaultCell = styled.div`
      display: grid;
      align-items: center;
    `

    console.log(data);

    return <div style={{textAlign: "center", margin: "0% 0% 1.5% 0%", alignItems: "center"}}>
        <AppBar position="static">
            <Link to={`/board/${data._id}`}>
            <StyledToolbar>
                <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)"}}>
                    <div style={{display: "grid", gridTemplateColumns: "0.5fr 0.5fr", justifyItems: "center"}}>
                        <div style={{alignItems: "right"}}>
                            {data.icon && <img style={{width: "32px", borderRadius: "50%"}} src={data.icon.value}/>}
                        </div>
                        <div style={{textAlign: "left", display: "grid", alignItems: "center"}}>{data.title}</div>
                    </div>
                    <DefaultCell>
                        {data.key}
                    </DefaultCell>
                    <DefaultCell>
                        {data.owner.name}
                    </DefaultCell>
                    <DefaultCell>
                        {data.category.value}
                    </DefaultCell>
                </div>
                </StyledToolbar>
            </Link>
        </AppBar>
    </div>
}

export default Board;
