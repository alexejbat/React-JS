import logo from './logo.svg';
import styles from './App.module.css';
import {ListGroup} from './components/ListGroup'
import {ListGroupItem} from './components/ListGroupItem'
import {Message} from './components/Message'

console.log(styles)

function App() {
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
      <Message tag={'h3'} disabled={true}>
          Привет! Меня зовут Алексей, я начинаю изучать React.js!
      </Message>
      <ListGroup>
        <ListGroupItem tag={'a'} active={true}>
          item 1
        </ListGroupItem>
        <ListGroupItem disabled={true}>
          item 2
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default App;
