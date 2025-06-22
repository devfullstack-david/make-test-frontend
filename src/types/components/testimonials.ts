export const testimonials = [
    {
      image: '-',
      name: 'Vinicius Carmo',
      rating: 5,
      comment: `
        O Make test oferece realmente 
        uma plataforma pronta para gerir avaliações
        a serem realizadas sendo que por vantagem temos
        a economia do papel
      `
    },
    {
      image: '-',
      name: 'Henrique Tolentino',
      rating: 5,
      comment: `
        Com o Make test pude avaliar de forma
        econômica um equipe inteira, parabéns aos
        desenvolvedores
      `
    },
    {
      image: '-',
      name: 'Mayara Aguiar',
      rating: 5,
      comment: `
        Amei a interface, as funcionalidades. 
        Ele me atendeu de uma forma surpreendente
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