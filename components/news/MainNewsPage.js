import React from 'react';
import List from '@mui/material/List';
import { ListItem } from '@mui/material';
import NewsItem from './NewsItem';

const MainNewsPage = (newsData) => {
    return (
        <List
            sx={{
                width: '100%',
                bgcolor: 'background.paper',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyItems: 'center',
            }}
        >
            {newsData?.content?.map((it) => {
                return (
                    <ListItem key={it.id} sx={{ display: 'flex', justifyContent: 'center', maxWidth: '900px' }}>
                        <NewsItem
                            id={it.id}
                            headline={it.headline}
                            summary={it.summary}
                            attribution={it.attribution}
                            date={it.date}
                            link={it.link}
                        />
                    </ListItem>
                );
            })}
        </List>
    );
};

export default MainNewsPage;
