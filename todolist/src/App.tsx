import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from './components/ListItem'

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Terminar 5 projetos React", done: false },
    { id: 2, name: "Comprar bolo na padaria", done: false },
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* Área de adicionar nova tarefa */}

        {list.map((item, index) => (
          <ListItem/>
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
