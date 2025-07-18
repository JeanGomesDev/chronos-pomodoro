import './styles/theme.css';
import './styles/global.css';

import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContent/TaskContextProvider';

function App() {
    return (
        <TaskContextProvider>
            <Home />
        </TaskContextProvider>
    )
}

export default App;