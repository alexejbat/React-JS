import logo from './logo.svg';
import faker from 'faker';
import styles from './App.module.css';
import { ListData } from './components/exaple/ListData';
import {ListGroup} from './components/ListGroup';
import {ListGroupItem} from './components/ListGroupItem';
import {Message} from './components/Message';
import {CounterClass} from './components/exaple/CounterClass'
import {useStage, useState} from 'react'
import { FormExample } from './components/exaple/FormExample';
import { CounterFunction } from './components/exaple/CounterFunction';

console.log(styles)

const list = Array.from({
  length: 10,

}).map(() => faker.name.findName())

function App() {

  const [show, setShow] = useState(true);

  return (
    <div className={styles.app}>
      <header className="App-header">
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Message tag={'h4'} disabled={true}>
          Привет! Меня зовут Алексей, я начинаю изучать React.js!
      </Message>
      {/* <ListGroup>
        <ListGroupItem tag={'a'} active={true}>
          item 1
        </ListGroupItem>
        <ListGroupItem disabled={true}>
          item 2
        </ListGroupItem>
      </ListGroup> */}

    <ListData list={list}/>

    <button onClick={() => setShow(!show)}>setShow</button>  
    {

      show &&
      <CounterClass/>

    }
    {

    show &&
    <CounterFunction/>

    }
    <FormExample/>
    </div>
  );
}

export default App;
