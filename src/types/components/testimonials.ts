export const testimonials = [
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

export type TestimonialsProps = {
    name: string,
    image: string,
    comment: string,
    rating: number,
    index: number
}