import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading';
import MainTemplate from '../../templates/MainTemplate';

import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContent/useTaskContext';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { sortTasks, type SortTasksOptions } from '../../utils/sortTasks';
import { useState } from 'react';

export function History() {
    const { state } = useTaskContext();
    const [sortTasksOptions, setSortTasksOptions] = useState<SortTasksOptions>(
        () => {
            return {
                tasks: sortTasks({ tasks: state.tasks }),
                field: 'startDate',
                direction: 'desc',
            }
        }
    )

    const handleSortTasks = ({ field }: Pick<SortTasksOptions, 'field'>) => {
        const newDirection = sortTasksOptions.direction === 'desc' ? 'asc' : 'desc';

        setSortTasksOptions({
            tasks: sortTasks({
                direction: newDirection,
                tasks: sortTasksOptions.tasks,
                field,
            }),
            field,
            direction: newDirection,
        })
    };


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
                                <th onClick={() => handleSortTasks({ field: 'name' })} className={styles.thSort}>Task ↕</th>
                                <th onClick={() => handleSortTasks({ field: 'duration' })} className={styles.thSort}>Duration ↕</th>
                                <th onClick={() => handleSortTasks({ field: 'startDate' })} className={styles.thSort}>Date ↕</th>
                                <th>Status</th>
                                <th>Type</th>
                            </tr>
                        </thead>

                        <tbody>
                            {sortTasksOptions.tasks?.map((task) => {
                                return (
                                    <tr key={task.id}>
                                        <td>{task.name}</td>
                                        <td>{task.duration}</td>
                                        <td>{formatDate(task.startDate)}</td>
                                        <td>{getTaskStatus(task, state.activeTask)}</td>
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
