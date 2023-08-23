import { FC } from "react";
import {
    generatorSlice,
    selectedNumbers,
    useDispatch,
    useSelector
} from '@/lib/redux'
import styles from './virtual.module.css'

const Pads: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const VirtualKeyboard: FC = () => {

    const dispatch = useDispatch()
    const selectedPads = useSelector(selectedNumbers)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = Number(e.currentTarget.textContent)
        dispatch(generatorSlice.actions.pressNumber(value))
    };

    return (
        <>
            {
                Pads.map((pad: number, index: number) => {
                    return (
                        <button
                            className={styles.button}
                            key={index}
                            disabled={selectedPads.includes(pad)}
                            onClick={(e) => handleClick(e)}
                        >
                            {pad}
                        </button>
                    )
                })
            }
        </>
    )

}

export default VirtualKeyboard