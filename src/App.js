import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail.js';
import './App.css';

function App() {
  // TODO: Add routes to books & views
  return (
    <BrowserRouter>
      <main className="container">
        <h1>Library Catalog</h1>
        <Link to="/books">Book List</Link>
        <Switch>
          <Route exact path="/books" component={BookList} />
          <Route exact path="/books/:id" component={BookDetail} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
