import { useTaskContext } from '../../contexts/TaskContent/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css';

export function Cycles() {

    const { state } = useTaskContext();

    const cycleStep = Array.from({ length: state.currentCycle });

    const cycleDescriptionMap = {
        workTime: 'Focus',
        shortBreakTime: 'Short Break',
        longBreakTime: 'Long Break',
    }

    return (
        <div className={styles.cycles}>
            <span>Cycles:</span>
            <div className={styles.cycleDots}>
                {cycleStep?.map((_, index) => {
                    const nextCycle = getNextCycle(index)
                    const nextCycleType = getNextCycleType(nextCycle)
                    return (
                        <span
                            key={nextCycle}
                            className={`${styles.cycleDot} ${styles[nextCycleType]}`}
                            aria-label={`focus click indicator ${cycleDescriptionMap[nextCycleType]}`}
                            title={`focus click indicator ${cycleDescriptionMap[nextCycleType]}`}
                        ></span>

                    )
                })}
            </div>
        </div>
    )
}