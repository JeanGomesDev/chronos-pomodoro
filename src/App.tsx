import './styles/theme.css';
import './styles/global.css';

import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContent/TaskContextProvider';
import { MessagesContainer } from './components/MessagesContainer';

function App() {
    return (
        <TaskContextProvider>
            <MessagesContainer>
                <Home />
            </MessagesContainer>
        </TaskContextProvider>
    )
}

export default App;