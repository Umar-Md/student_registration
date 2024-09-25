import { Provider } from 'react-redux';
import { store } from './redux/store';
import StudentForm from './components/StudentForm'; 

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 style={{ marginLeft:'400px' }}>Student Form</h1>
        <StudentForm /> 
      </div>
    </Provider>
  );
}

export default App;
