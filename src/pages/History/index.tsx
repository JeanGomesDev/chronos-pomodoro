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
import { useEffect, useState } from 'react';
import { TaskActionTypes } from '../../contexts/TaskContent/taskActions';
import { showMessage } from '../../adapters/showMessage';

export function History() {
    const { dispatch, state } = useTaskContext();
    const hasTasks = state.tasks.length > 0;

    const [confirmClearHistory, setConfirmClearHistory] = useState(false);
    const [sortTasksOptions, setSortTasksOptions] = useState<SortTasksOptions>(
        () => {
            return {
                tasks: sortTasks({ tasks: state.tasks }),
                field: 'startDate',
                direction: 'desc',
            }
        }
    )

    useEffect(() => {
        setSortTasksOptions(prevState => ({
            ...prevState,
            tasks: sortTasks({
                tasks: state.tasks,
                direction: prevState.direction,
                field: prevState.field,
            }),
        }))
    }, [state.tasks]);

    useEffect(() => {
        if (!confirmClearHistory) return;

        setConfirmClearHistory(false);

        dispatch({ type: TaskActionTypes.RESET_STATE });
    }, [confirmClearHistory, dispatch]);

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

    const handleResetHistory = () => {
        showMessage.dismiss();
        showMessage.confirm('Are you sure?', confirmation => {
            setConfirmClearHistory(confirmation);
        });
    };

    return (
        <MainTemplate>
            <Container>
                <Heading>
                    <span>History</span>
                    {hasTasks && (
                        <span className={styles.buttonContainer}>
                            <DefaultButton
                                icon={<TrashIcon />}
                                color='red'
                                aria-label='Delete all history'
                                title='Clear history'
                                onClick={handleResetHistory}
                            />
                        </span>
                    )}
                </Heading>
            </Container>

            <Container>
                {hasTasks && (
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
                )}
                {!hasTasks && (
                    <p className={styles.noTasks}>No tasks completed yet.</p>
                )}
            </Container>
        </MainTemplate>
    );
}
