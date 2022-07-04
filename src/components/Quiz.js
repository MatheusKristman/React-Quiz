import React, { useState } from 'react';
import '../App.css';
import Data from '../Data';

const Quiz = () => {
    const [index, setIndex] = useState(1);
    const [hits, setHits] = useState(0);

    const handleHits = (result) => {
        if (index >= 5) {
            setIndex(5);
        } else {
            setIndex(index + 1);
        }

        if (result) {
            setHits(hits + 1);
        }
    };

    return (
        <>
            {Data.filter((item) => item.id === index).map((item, i) => (
                <div key={i} className='container'>
                    <div className='questions'>
                        <h1>Questão {item.id}/4</h1>
                        <h4>{item.question}</h4>
                    </div>
                    <div className='answers'>
                        <button onClick={() => handleHits(item.answers[0].result)}>
                            {item.answers[0].answer}
                        </button>
                        <button onClick={() => handleHits(item.answers[1].result)}>
                            {item.answers[1].answer}
                        </button>
                        <button onClick={() => handleHits(item.answers[2].result)}>
                            {item.answers[2].answer}
                        </button>
                        <button onClick={() => handleHits(item.answers[3].result)}>
                            {item.answers[3].answer}
                        </button>
                    </div>
                </div>
            ))}
            {index === 5 && (
                <div className='container-win'>
                    <h1>
                        {hits === index - 1
                            ? `Você acertou todas as Perguntas`
                            : `Você acertou ${hits} perguntas`}
                    </h1>
                    <button onClick={() => window.location.reload()}>Recomeçar</button>
                </div>
            )}
        </>
    );
};

export default Quiz;
