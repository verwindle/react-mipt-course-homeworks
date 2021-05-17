import React from 'react';
import { Title, Subtitle, Paragraph, Wrap } from './styles/header';
import { string2IDEncoder } from '../../utils/scripts/stringEncoder';

export default function Header({children, ...restProps}) {
    return (
        <Wrap>{children}</Wrap>
    );
};

Header.Title = function HeaderTitle({children, ...restProps}) {
    return <Title key={string2IDEncoder('key')} {...restProps}>{children}</Title>;
};

Header.Subtitle = function HeaderSubtitle({children, ...restProps}) {
    return <Subtitle key={string2IDEncoder('key')} {...restProps}>{children}</Subtitle>;
};

Header.Paragraph = function HeaderParagraph({children, alignment='justify', direction, ...restProps}) {
    return <Paragraph key={string2IDEncoder('key')} alignment={alignment} {...restProps}>{children}</Paragraph>;
};
