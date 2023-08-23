'use client'

import { generatorSlice, selectedNumbers, useDispatch, useSelector } from "@/lib/redux";
import VirtualKeyboard from './components/VirtualKeyboard/VirtualKeyboard';
import styles from './styles/layout.module.css'
import { useRouter } from 'next/navigation'

export default function IndexPage() {
  const selectedPads = useSelector(selectedNumbers)
  const dispatch = useDispatch()
  const router = useRouter()

  return (
    <div className="grid grid-col-1 justify-center">
      <input
        type="text"
        name="cardNo"
        placeholder="Here are numbers for configuring token"
        className="mx-auto w-64 p-1 rounded border border-green mb-4 outline-none text-grey md:w-96 md:p-3"
        aria-label="randomize numbers"
        value={selectedPads.join(',')}
        readOnly
      />
      <VirtualKeyboard className={`${styles.virtualKeyboard} mb-4`} />
      <div className={styles.buttonLayout}>
        <button
          className="p-1 w-full mx-auto text-center bg-green text-white rounded cursor-pointer hover:bg-greenshade text-base font-normal sm:text-lg sm:font-medium md:text-xl md:font-semibold"
          onClick={() => dispatch(generatorSlice.actions.removeNumbers())}
        >
          Initialize
        </button>

        <div className="w-4" />

        <button
          className="p-1 w-full mx-auto text-center bg-green text-white rounded cursor-pointer hover:bg-greenshade text-base font-normal sm:text-lg sm:font-medium md:text-xl md:font-semibold"
          onClick={() => router.push('/verify')}
        >
          Generate
        </button>
      </div>

    </div>
  )
}
