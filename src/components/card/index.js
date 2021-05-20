import React from "react";
import DOM from "../dom";
import { Card, Item, Image, Button } from "./styles/card";
import { string2IDEncoder } from "../../utils/scripts/stringEncoder";

export default function DataGrid({ children, ...restProps }) {
    return <DOM.Grid {...restProps}>{children}</DOM.Grid>;
}

DataGrid.Card = function GridCard({ children, key, ...restProps }) {
    return (
        <Card key={string2IDEncoder("key")} {...restProps}>
            {children}
        </Card>
    );
};

DataGrid.Item = function CardItem({ children, key, direction = "row", justify = "center", border, ...restProps }) {
    return (
        <Item key={string2IDEncoder("key")} direction={direction} justify={justify} border={border} {...restProps}>
            {children}
        </Item>
    );
};

DataGrid.Image = function CardImage({ children, src, alt, ...restProps }) {
    return (
        <Image key={string2IDEncoder("key")} src={src} alt={alt} {...restProps}>
            {children}
        </Image>
    );
};
