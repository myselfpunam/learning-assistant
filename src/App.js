import logo from './logo.svg';
import './App.css';
import Shop from './Components/Shop/Shop';


function App() {
  return (
    <div >
      <nav class="navbar bg-dark mb-4">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1 text-warning ">Learning Assistant</span>
  </div>
</nav>
      <Shop></Shop>
    </div>
  );
}

export default App;
