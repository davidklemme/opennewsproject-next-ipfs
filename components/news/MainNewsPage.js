import React from 'react';
import List from '@mui/material/List';
import { ListItem } from '@mui/material';
import NewsItem from './NewsItem';

const MainNewsPage = ({ content }) => {
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
            {content.map((it) => {
                return (
                    <ListItem key={it.id} sx={{ display: 'flex', justifyContent: 'center', width: '600px' }}>
                        <NewsItem id={it.id} headline={it.headline} summary={it.summary} />
                    </ListItem>
                );
            })}
        </List>
    );
};

export default MainNewsPage;
