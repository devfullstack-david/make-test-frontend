'use client';

import { TestimonialsProps } from '@/types/components/testimonials';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const Testimonials = (props: TestimonialsProps) => {
  return (
        <Card
          key={props.index}
          sx={{
            maxWidth: 400,
            mx: 'auto',
            borderRadius: 3,
            boxShadow: 4,
            backgroundColor: 'var(--primary)',
            mt: 2,
            height: '200px',
            padding: '20px'
          }}
        >
          <CardContent>
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Avatar 
                src={props.image}
                alt={props.name[0]}
              />
              <Typography
                textAlign={'center'}
                color='white'
                fontWeight={'bolder'}
                variant='h6'
              >
                {props.name}
              </Typography>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              mb: 1,
              mt: 3,
            }}>
              <Rating 
                value={props.rating} 
                precision={0.5} 
                readOnly 
              />
              <Typography
                color='white' 
                variant="body2" 
                sx={{ ml: 1 }}
              >
                {props.rating} / 5
              </Typography>
            </Box>

            <Typography 
              variant="body2"
              color="white"
            >
              {props.comment}
            </Typography>
          </CardContent>
        </Card>
  );
};

export default Testimonials;
