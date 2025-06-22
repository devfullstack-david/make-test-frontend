export type QuestionProps = {
    question: string;
    answer: string;
}

export const questions: QuestionProps[] = [
    {
        question: 'O Maketest tem a opção de médias ponderadas e simples?',
        answer: 'Com certeza, ao criar uma avaliação existe a opção de saber se a nota média será calculada por simples ou ponderada'
    },
    {
        question: 'O Maketest permite a criação de equipes a ser avaliadas?',
        answer: 'Sim, a fim de economizar tempo, o usuário administrador pode criar equipes de usuários comuns para atribuir a avaliação a determinado grupo'
    },
    {
        question: 'O Maketest é adaptado a diferentes telas de dispositivos?',
        answer: 'Com certeza, nosso design é feito pensando em ser responsivo e adaptável a telas de diferentes dispositivos'
    },
    {
        question: 'No Maketest existe a possibilidade de diferentes tipos de respostas?',
        answer: 'Com certeza, podem ser usadas desde um campo de texto ou até mesmo opções como radios fields'
    },
    {
        question: 'No Maketest existe a possibilidade de rever as informações antes de finalizar a criação de uma avaliação?',
        answer: 'Com certeza, temos a última parte da criação que se chama revisão das informações'
    },
]