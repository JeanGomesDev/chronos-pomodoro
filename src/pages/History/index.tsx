import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading';
import MainTemplate from '../../templates/MainTemplate';

import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContent/useTaskContext';

export function History() {

    const {state} = useTaskContext();

    return (
        <MainTemplate>
            <Container>
                <Heading>
                    <span>History</span>
                    <span className={styles.buttonContainer}>
                        <DefaultButton
                            icon={<TrashIcon />}
                            color='red'
                            aria-label='Delete all history'
                            title='Clear history'
                        />
                    </span>
                </Heading>
            </Container>

            <Container>
                <div className={styles.responsiveTable}>
                    <table>
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Duration</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Type</th>
                            </tr>
                        </thead>

                        <tbody>
                            {state.tasks?.map((task) => {
                                return (
                                    <tr key={task.id}>
                                        <td>{task.name}</td>
                                        <td>{task.duration}</td>
                                        <td>{new Date(task.startDate).toISOString()}</td>
                                        <td>{task.interruptDate}</td>
                                        <td>{task.type}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </Container>
        </MainTemplate>
    );
}
