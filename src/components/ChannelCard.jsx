import React from 'react';

import { CheckCircle } from '@mui/icons-material';
import { Box , CardContent , CardMedia , Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail }) => {
  return (
    <Box
    sx={{ 
        boxShadow: 'none',
        borderRaduis: '20px',

    }}>
        <Link to={`/channel/${ channelDetail?.id?.channelId }`}>
            <CardContent sx={{ display: 'flex' , flexDirection: 'column' , justifyContent: 'center' , textAlign: 'center' , color: '#fff'}}>
                <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url}/>
            </CardContent>
        </Link>
    </Box>
  );
}

export default ChannelCard;
