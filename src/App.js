import './normalize.css';
import './skeleton.css';
import Form from './components/Form'
function App() {
  return (
    <div>
      <h1>Loan Calculator</h1>
      <div className="container">
        <Form />
      </div>
    </div>
  );
}

export default App;
