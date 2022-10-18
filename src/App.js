import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome = "Chayenne"
  const ano = 1989

  const carro = {
    nomeDoCarro: "Fusca",
    ano: 1970,
    cor: "Azul",
    flex: false
  }

  const carro2 = {
    nomeDoCarro: "Brasília",
    ano: 1965,
    cor: "Amarela",
    flex: false
  }

  const carro3 = {
    nomeDoCarro: "Gol",
    ano: 2010,
    cor: "Branco",
    flex: true
  }

  const carro4 = {
    nomeDoCarro: "Ford Verona",
    ano: 1989,
    cor: "ciano",
    nacional: true
}

const carro5 = {
    nomeDoCarro: "Chevrolet Kadett",
    ano: 1989,
    cor: "magenta",
    nacional: false
}

const carro6 = {
    nomeDoCarro: "Chevrolet Ipanema",
    ano: 1989,
    cor: "oliva",
    nacional: false
}

function apresentaGaragem (nome){
  alert(`Bem-vindos à garagem de ${nome}`)
}

function apresentaGaragemAno (ano){
  alert(`Bem-vindos à garagem de ${ano}`)
}

  return (
    <div>
      <Garagem
      // nome={nome}
      ano ={ano}
      veiculo={carro4}
      veiculo2={carro5}
      veiculo3={carro6}
      // funcao={apresentaGaragem}
      funcaoAno = {apresentaGaragemAno}
      />
    </div>
  );
}
