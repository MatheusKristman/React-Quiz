const data = [
    {
        id: 1,
        question: 'Qual é a capital da França?',
        answers: [
            { answer: 'Nova York', result: false },
            { answer: 'Londres', result: false },
            { answer: 'Paris', result: true },
            { answer: 'Dublim', result: false }
        ]
    },
    {
        id: 2,
        question: 'Quem é o CEO da Tesla?',
        answers: [
            { answer: 'Jeff Bezos', result: false },
            { answer: 'Elon Musk', result: true },
            { answer: 'Bill Gates', result: false },
            { answer: 'Hideo Kojima', result: false }
        ]
    },
    {
        id: 3,
        question: 'O iPhone foi criado por qual empresa?',
        answers: [
            { answer: 'Apple', result: true },
            { answer: 'Intel', result: false },
            { answer: 'Amazon', result: false },
            { answer: 'Microsoft', result: false }
        ]
    },
    {
        id: 4,
        question: 'Qual é o console que tem como exclusico o jogo Halo?',
        answers: [
            { answer: 'Playstation 5', result: false },
            { answer: 'Nintendo Switch', result: false },
            { answer: 'Steam Deck', result: false },
            { answer: 'Xbox Series X', result: true }
        ]
    }
];

export default data;
