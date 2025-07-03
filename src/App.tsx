import './styles/theme.css';
import './styles/global.css';
import Heading from './components/Heading/Heading';
import { TimerIcon } from 'lucide-react';

function App() {
    return (
        <>
            <Heading> teste
                <button><TimerIcon /> </button>
            </Heading>
        </>
    )
}

export default App;