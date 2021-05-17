import React, { useState } from 'react';
import DataGrid from './card';
import Header from './header';

export default function Grid({children, fetchURL, fixture, responseContent, ...restProps}) {
    const APIResponse = fetch(fetchURL).then((resp) => resp.status === 200 ? resp.json() : responseContent);
    const [boards, setBoardsData] = useState(APIResponse);

    // APIResponse.then((value) => console.log('value', value));
    setTimeout(() => {
        APIResponse.then((value) => setBoardsData(value));
    }, 30000);

    console.log('fixture', fixture);
    console.log('fetchURL', fetchURL);
    console.log('responseContent', boards);

    return (
        <DataGrid responseContent={boards} fixture fetchURL>{children}
            {responseContent.map((obj) => (
                <DataGrid.Card data={JSON.stringify(obj)}>
                    <DataGrid.Item border={'none none inset none'}>
                        <Header.Subtitle>{obj.title}</Header.Subtitle>
                        <Header.Subtitle>{`category:\t${obj.category.value}`}</Header.Subtitle>
                    </DataGrid.Item>
                    <DataGrid.Item>
                        <DataGrid.Image src={obj.icon.value} alt={'Where is the image Lebowski?'}>
                        </DataGrid.Image>
                    </DataGrid.Item>
                    <DataGrid.Item direction={'column'} border={'none none none double'}>
                        <Header.Paragraph alignment={'left'}>{`Name:\t${obj.owner.name}`}</Header.Paragraph>
                        <Header.Paragraph alignment={'right'}>{`Email:\t${obj.owner.email}`}</Header.Paragraph>
                    </DataGrid.Item>
                </DataGrid.Card>
            ))}
        </DataGrid>
    );
};



