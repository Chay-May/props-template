import React from "react";

function Garagem2(props){
    const carro1 = {
        nomeCarro: "Ford Verona",
        anoLancamento: 1989,
        corVeiculo: "ciano",
        nacional: true
    }

    const carro2 = {
        nomeCarro: "Chevrolet Kadett",
        anoLancamento: 1989,
        corVeiculo: "magenta",
        nacional: false
    }

    const carro3 = {
        nomeCarro: "Chevrolet Ipanema",
        anoLancamento: 1989,
        corVeiculo: "oliva",
        nacional: false
    }

return (
    <div>
        <h1>Garagem {props.ano}</h1>
        <button onClick={() => props.funcaoAno(props.ano)}>Bem-vinde!</button>
        <Carro 
      carro={props.carro1}/>
      <Carro 
      carro={props.carro2}/>
      <Carro 
      carro={props.carro3}/>

    </div>
)
}
export default Garagem2;