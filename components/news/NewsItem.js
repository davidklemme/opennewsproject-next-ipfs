import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const NewsItem = ({ id, headline, summary, date, pic, attribution }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="200"
                image={pic ? pic : 'https://picsum.photos/600/200'}
                alt={headline}
            />
            <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                    {headline}
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '5px' }}>
                    <Typography variant="body2" color="gray">
                        {attribution}
                    </Typography>
                    <Typography variant="body2" color="lightgray">
                        {date}
                    </Typography>
                </div>
                <Typography variant="body1" color="text.secondary">
                    {summary}
                </Typography>
            </CardContent>
        </Card>
    );
};
export default NewsItem;
