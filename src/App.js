import BookList from './components/book/BookList';
import './App.css';
import { Link, Route, Router, Switch } from 'react-router-dom';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Router>
        <h1>Library Catalog</h1>
        <Link to="/books">Book List</Link>
        <Switch>
          <Route path="/books" component={BookList} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
