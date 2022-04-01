import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const NewsItem = ({ id, headline, summary, date, pic, attribution }) => {
    return (
        <Card raised sx={{ display: 'flex', maxHeight: '300px' }}>
            <CardContent sx={{ width: '600px' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {headline}
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '20px' }}>
                    <Typography variant="body2" color="gray">
                        {attribution}
                    </Typography>
                    <Typography variant="body2" color="lightgray">
                        {date}
                    </Typography>
                </div>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '3',
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {summary}
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                height="300px"
                width="300px"
                image={pic ? pic : 'https://picsum.photos/300/300'}
                alt={headline}
                sx={{ width: '300px' }}
            />
        </Card>
    );
};
export default NewsItem;
