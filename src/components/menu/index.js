import React from "react";

import { Paragraph } from "../header/styles/header";
import { Item, UL, LI, Arrow, Menu } from "./styles/menu";
import { string2IDEncoder } from "../../utils/scripts/stringEncoder";

export default function TaskMenu({ children, ...restProps }) {
    return <Menu {...restProps}>{children}</Menu>;
}

TaskMenu.Item = function TaskItem({ children, key, ...restProps }) {
    return (
        <Item key={string2IDEncoder("key")} {...restProps}>
            {children}
        </Item>
    );
};

TaskMenu.UL = function TaskList({ children, key, background, ...restProps }) {
    return (
        <UL key={string2IDEncoder("key")} background={background} {...restProps}>
            {children}
        </UL>
    );
};

TaskMenu.LI = function TaskOption({ children, key, ...restProps }) {
    return (
        <LI key={string2IDEncoder("key")} {...restProps}>
            {children}
        </LI>
    );
};

TaskMenu.Label = function TaskText({ children, key, alignment, ...restProps }) {
    const labelStyle = {
        content: "a",
        whiteSpace: "pre",
        cursor: "help",
    };
    return (
        <Paragraph key={string2IDEncoder("key")} style={labelStyle} alignment={alignment} {...restProps}>
            {children}
        </Paragraph>
    );
};

TaskMenu.Arrow = function TaskMark({ children, key, ...restProps }) {
    return (
        <Arrow key={string2IDEncoder("key")} {...restProps}>
            {children}
        </Arrow>
    );
};
