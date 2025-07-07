import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container/index';
import { Logo } from './components/Logo';
import { CountDown } from './components/CountDown';
import { Menu } from './components/Menu';
import { DefaultInput } from './components/DefaultInput';


function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            <Container>
                <CountDown />
            </Container>

            <Container>
                <form className="form" action="">
                    <div className="formRow">
                        <DefaultInput
                            id="input"
                            type='text'
                            labelText='Task'
                            placeholder='Digite algo'
                        />
                    </div>

                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="formRow">
                        <p>Ciclos</p>
                        <p>0 0 0 0 0 0</p>
                    </div>

                    <div className="formRow">
                        <button>Enviar</button>
                    </div>
                </form>
            </Container>
        </>
    )
}

export default App;