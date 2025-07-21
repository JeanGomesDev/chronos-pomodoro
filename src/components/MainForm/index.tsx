import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContent/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";


export function MainForm() {
    const { state, setState } = useTaskContext();

    const taskNameInput = useRef<HTMLInputElement>(null);

    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (taskNameInput.current === null) return;

        const taskName = taskNameInput.current.value.trim();

        if (!taskName) {
            alert('Please enter a task name');
            return;
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType,
        }

        const secondsRemaining = newTask.duration * 60;

        setState(prevState => {
            return {
                ...prevState,
                config: {
                    ...prevState.config
                },
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
                tasks: [...prevState.tasks, newTask],
            }
        })
    }

    function handleInterruptTask() {
        setState(prevState => {
            return {
                ...prevState,
                activeTask: null,
                secondsRemaining: 0,
                formattedSecondsRemaining: '00:00',
            };
        });
    }

    return (
        <form onSubmit={handleCreateNewTask} className="form" action="">
            <div className="formRow">
                <DefaultInput
                    id="input"
                    type='text'
                    labelText='Task'
                    placeholder='Digite algo'
                    ref={taskNameInput}
                    disabled={!!state.activeTask}
                />
            </div>

            <div className="formRow">
                <p>Next interval is 25 min</p>
            </div>

            {state.currentCycle > 0 && (
                <div className="formRow">
                    <Cycles />
                </div>
            )}

            <div className="formRow">
                {!state.activeTask && (
                    <DefaultButton
                        icon={<PlayCircleIcon />}
                        title='Start new task'
                        aria-label="Start new task"
                        type="submit"
                    />
                )}
                {!!state.activeTask && (
                    <DefaultButton
                        icon={<StopCircleIcon />}
                        color="red"
                        title='Stop task'
                        aria-label="Stop task"
                        type="button"
                        onClick={handleInterruptTask}
                    />
                )}
            </div>
        </form>
    )
}