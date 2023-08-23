'use client'

import { FC } from "react";
import {
    generatorSlice,
    selectedNumbers,
    useDispatch,
    useSelector
} from '@/lib/redux'
import styles from './virtual.module.css'

interface VirtualKeyboardInterface {
    className?: string
}

const Pads: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const VirtualKeyboard: FC<VirtualKeyboardInterface> = ({ className }: VirtualKeyboardInterface) => {

    const dispatch = useDispatch()
    const selectedPads = useSelector(selectedNumbers)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = Number(e.currentTarget.textContent)
        dispatch(generatorSlice.actions.pressNumber(value))
    };

    return (
        <div className={`${className}`}>
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
        </div>
    )

}

export default VirtualKeyboard