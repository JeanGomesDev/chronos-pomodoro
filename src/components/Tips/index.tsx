import { getNextCycleType } from '../../utils/getNextCycleType';
import { useTaskContext } from '../../contexts/TaskContent/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';

export function Tips() {
    const { state } = useTaskContext();
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCyleType = getNextCycleType(nextCycle);

    const tipsForWhenActiveTask = {
        workTime: <span>Focus for <b>{state.config.workTime}</b> min</span>,
        shortBreakTime: <span>Rest for <b>{state.config.shortBreakTime} min</b></span>,
        longBreakTime: <span>Long break</span>,
    };

    const tipsForNoActiveTask = {
        workTime: (
            <span>
                Next cycle is <b>{state.config.workTime} min</b>
            </span>
        ),
        shortBreakTime: (
            <span>Next break is <b>{state.config.shortBreakTime} min</b></span>
        ),
        longBreakTime: <span>Next break will be long</span>,
    };

    return (
        <>
            {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
            {!state.activeTask && tipsForNoActiveTask[nextCyleType]}
        </>
    );
}
