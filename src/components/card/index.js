import React from 'react';
import { Grid } from '../header/styles/header';
import { Card, Item, Image, Code } from './styles/card';
import { string2IDEncoder } from '../../utils/scripts/stringEncoder';

export default function DataGrid({children, ...restProps}) {
    return (
        <Grid {...restProps}>{children}</Grid>
    );
};

DataGrid.Card = function GridCard({children, key, ...restProps}) {
    return <Card key={string2IDEncoder('key')} {...restProps}>{children}</Card>;
};

DataGrid.Item = function CardItem({children, key, direction='row', border, ...restProps}) {
    return <Item key={string2IDEncoder('key')} direction={direction} border={border} {...restProps}>{children}</Item>;
};

DataGrid.Image = function CardImage({children, src, alt, ...restProps}) {
    return <Image key={string2IDEncoder('key')} src={src} alt={alt} {...restProps}>{children}</Image>;
};

DataGrid.Code = function CardCode({children, ...restProps}) {
    return <Code key={string2IDEncoder('key')} {...restProps}>{children}</Code>;
};
