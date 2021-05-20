import { Wrap, Grid, Button } from "./styles/common";
import { string2IDEncoder } from "../../utils/scripts/stringEncoder";

export default function DOM({ children, ...restProps }) {
    return <Wrap {...restProps}>{children}</Wrap>;
}

DOM.Wrap = function HeaderTitle({ children, ...restProps }) {
    return (
        <Wrap key={string2IDEncoder("key")} {...restProps}>
            {children}
        </Wrap>
    );
};

DOM.Grid = function HeaderTitle({ children, ...restProps }) {
    return (
        <Grid key={string2IDEncoder("key")} {...restProps}>
            {children}
        </Grid>
    );
};

DOM.Button = function HeaderTitle({ children, ...restProps }) {
    return (
        <Button key={string2IDEncoder("key")} {...restProps}>
            {children}
        </Button>
    );
};
