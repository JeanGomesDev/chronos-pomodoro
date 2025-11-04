import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading';
import MainTemplate from '../../templates/MainTemplate';

import styles from './styles.module.css';

export function History() {
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
                            {Array.from({ length: 20 })?.map((_, index) => {
                                return (
                                    <tr key={index}>
                                        <td>Study</td>
                                        <td>25 min</td>
                                        <td>04/20/2025 08:00</td>
                                        <td>Completed</td>
                                        <td>Focus</td>
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
