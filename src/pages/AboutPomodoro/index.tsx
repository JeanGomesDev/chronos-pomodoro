import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHTML";
import { Heading } from "../../components/Heading";
import { RouterLink } from "../../components/RouterLink";
import MainTemplate from "../../templates/MainTemplate";

export function AboutPomodoro() {
    return (
        <MainTemplate>
            <Container>
                <GenericHtml>

                    <Heading>The Pomodoro Technique 🍅</Heading>

                    <p>
                        The Pomodoro Technique is a productivity method created by{" "}
                        <strong>Francesco Cirillo</strong>. It consists of breaking work into 
                        time blocks (the famous "Pomodoros") separated by short breaks.
                        The goal is to maintain full focus for short periods while ensuring 
                        rest to prevent mental fatigue.
                    </p>

                    <img src='https://placehold.co/1920x1080' alt='' />

                    <h2>How does the traditional Pomodoro work?</h2>
                    <ul>
                        <li>
                            <strong>1. Choose a task</strong> you want to work on.
                        </li>
                        <li>
                            <strong>2. Work on it for 25 minutes</strong> without interruptions.
                        </li>
                        <li>
                            <strong>3. Take a short 5-minute break</strong>.
                        </li>
                        <li>
                            <strong>4. Every 4 cycles, take a long break</strong>{" "}
                            (usually 15 to 30 minutes).
                        </li>
                    </ul>

                    <h2>
                        But <strong>Chronos Pomodoro</strong> takes it one step further 🚀
                    </h2>

                    <p>
                        Our app follows the original concept but adds some improvements 
                        and customization options to make the process even more efficient:
                    </p>

                    <h3>⚙️ Customizable time settings</h3>
                    <p>
                        You can set your own focus time, short break, and long break durations!  
                        Just head over to the{" "}
                        <RouterLink href='/settings'>settings page</RouterLink> and adjust the minutes 
                        as you prefer.
                    </p>

                    <h3>🔁 Organized sequential cycles</h3>
                    <p>
                        After each completed cycle, a new task is automatically added 
                        to your history, and the app suggests the next cycle 
                        (focus or break).
                    </p>
                    <p>
                        <strong>Our default pattern:</strong>
                    </p>
                    <ul>
                        <li>
                            <strong>Odd cycles:</strong> Work (focus).
                        </li>
                        <li>
                            <strong>Even cycles:</strong> Short break.
                        </li>
                        <li>
                            <strong>Cycle 8:</strong> Long special break to reset 
                            the full round.
                        </li>
                    </ul>

                    <h3>🍅 Cycle visualization</h3>
                    <p>
                        Below the timer, you’ll see colored dots representing each cycle:
                    </p>
                    <ul>
                        <li>🟡 Yellow: Work cycle (focus).</li>
                        <li>🟢 Green: Short break.</li>
                        <li>🔵 Blue: Long break (appears every 8 cycles).</li>
                    </ul>

                    <p>
                        This way, you’ll always know exactly where you are in the process 
                        and what’s coming next. No need to write it down or do mental math anymore!
                    </p>

                    <h3>📊 Automatic history</h3>
                    <p>
                        All your completed and interrupted tasks are saved in the{" "}
                        <RouterLink href='/history'>history</RouterLink>, so you can track your 
                        progress over time.
                    </p>

                    <h2>Why use Chronos Pomodoro?</h2>
                    <ul>
                        <li>✅ Organize your focus clearly.</li>
                        <li>✅ Work and rest in the right balance.</li>
                        <li>✅ Customize your own cycles and durations.</li>
                        <li>✅ Track your progress automatically.</li>
                    </ul>

                    <p>
                        <strong>Ready to focus?</strong> Let’s{" "}
                        <RouterLink href='/'>go back to the homepage</RouterLink> and start your 
                        Pomodoros! 🍅🚀
                    </p>

                    <p>
                        <em>"Full focus — no rush, no pause, just flow!"</em> 💪🧘‍♂️
                    </p>

                </GenericHtml>
            </Container>
        </MainTemplate>
    );
}
