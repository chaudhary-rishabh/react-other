import './App.css'
import PropTypes from 'prop-types';
import Todo from './Todo';
function App() {
  
  return (
    <div>
      <Todo/>
    </div>
  )
}


const Header = ({title}) => {
return (
    <div>
        <p>{title}</p>
    </div>
)
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};


export default App
