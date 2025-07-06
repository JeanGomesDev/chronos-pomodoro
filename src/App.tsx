import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container/index';
import { Heading } from './components/Heading/index';


function App() {
    return (
        <>
            <Container>
                <Heading>Welcome to My App</Heading>
            </Container>
        </>
    )
}

export default App;