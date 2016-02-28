import {compose} from 'react-komposer';
import DemoContainer from '../components/Demo/People.jsx';

const composer = (props, onData) => {
  fetch('//api.github.com/users')
    .then(response => response.json())
    .then(people => onData(null, {people}));
};

export default compose(composer)(DemoContainer);
