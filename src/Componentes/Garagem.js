import Carro from "./Carro";

function Garagem(props) {
  return (
    <div>
      <h1>Garagem {props.ano}</h1>
      <button onClick={() => props.funcao(props.nome)}>Boas vindas!</button>
      <Carro 
      carro={props.veiculo}/>
      <Carro 
      carro={props.veiculo2}/>
      <Carro 
      carro={props.veiculo3}/>
    </div>
  );
}

export default Garagem;
