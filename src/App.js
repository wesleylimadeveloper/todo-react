import { useState } from 'react';
import { Container, Area, Header } from './App.styles';

import { AddArea } from './components/AddArea';
import { ListItem } from './components/ListItem';

const App = () => {
  const [list, setList] = useState([
    { id: 1, name: 'Comprar o curso de ReactJS', done: false },
    { id: 2, name: 'Comprar o curso de NodeJS', done: false },
    { id: 3, name: 'Estudar React Native', done: false },
  ]);

  const handleAddTask = (taskName) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}

      </Area>
    </Container>
  );
}

export default App;