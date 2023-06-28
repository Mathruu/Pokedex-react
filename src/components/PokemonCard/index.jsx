import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import { type } from '@testing-library/user-event/dist/type';

export default function PokemonCard({name, image, types, order}) {

    const typeHandler = () => {
        if (types[1]) {
            return types[0].type.name + " | " + types[1].type.name;
        }
        return types[0].type.name;
    };

return (
    <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <div className='zoom-container'>
                <CardMedia component="img" height="140" image={image} className="zoom-image"/>
            </div>
                <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 'bold' }}>
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="subtitle2" component="div" style={{ fontWeight: 'bold' }}>
                            {"#0" + order}
                        </Typography>
                        <Typography gutterBottom variant="caption" component="div">
                            {typeHandler()}
                        </Typography>
                    </Box>
                </CardContent>
        </CardActionArea>
    </Card>
);
}
