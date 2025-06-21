'use client';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const Testimonials = () => {
  const testimonials = [
    {
      image: '/images/person1.jpg',
      name: 'Vinicius Carmo',
      rating: 5,
      comment: `
        O Make test oferece realmente 
        uma plataforma pronta para gerir avaliações
        a serem realizadas sendo que por vantagem temos
        a economia do papel
      `
    },
  ];

  return (
    <>
      {testimonials.map((t, i) => (
        <Card
          key={i}
          sx={{
            maxWidth: 400,
            mx: 'auto',
            borderRadius: 3,
            boxShadow: 4,
            backgroundColor: 'var(--primary)',
            mt: 2,
          }}
        >
          <CardContent>
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Avatar 
                src={t.image}
                alt={t.name[0]}
              />
              <Typography
                textAlign={'center'}
                color='white'
                fontWeight={'bolder'}
                variant='h6'
              >
                {t.name}
              </Typography>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              mb: 1,
              mt: 3,
            }}>
              <Rating value={t.rating} precision={0.5} readOnly />
              <Typography
                color='white' 
                variant="body2" 
                sx={{ ml: 1 }}
              >
                {t.rating} / 5
              </Typography>
            </Box>

            <Typography 
              variant="body2"
              color="white"
            >
              {t.comment}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default Testimonials;
