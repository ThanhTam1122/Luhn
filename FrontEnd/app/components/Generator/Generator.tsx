'use client'

/* Instruments */
import {
    generatorSlice,
    selectedNumbers
    useDispatch,
    useSelector
} from '@/lib/redux'
import { useRouter } from 'next/navigation'


const Pads: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]


export const Generator: React.FC = () => {
    const dispatch = useDispatch()
    const nums = useSelector(selectedNumbers)
    const router = useRouter()
  
    return (
      <div style={{ width: '300px' }}>
        <input
          type="text"
          name="cardNo"
          placeholder="Here are numbers for configuring token"
          className={`${styles.textbox} mx-auto w-64 p-1 rounded border border-green mb-4 outline-none text-grey md:w-96 md:p-3`}
          aria-label="randomize numbers"
          value={selectedPads.join(',')}
          readOnly
        />
        <div className={styles.row}>
          {
            Pads.map((pad: PadType, index: number) => {
  
              return (
                <button
                  className={styles.button}
                  key={index}
                  disabled={selectedPads.includes(pad.tag)}
                  onClick={(e) => {
                    switch (pad.action) {
                      case 'number':
                        dispatch(generatorSlice.actions.pressPad(pad.tag))
                        break;
                      case 'remove':
                        dispatch(generatorSlice.actions.removePads())
                        break;
                      case 'enter':
                        if(selectedPads.length > 1)  
                          router.push('/verify')
                        else
                          alert('select two numbers at least')
                        break;
                    }
                  }}
                >
                  {
                    pad.action === 'number' ?
                      pad.tag :
                      pad.action === 'remove' ?
                        'X'
                        :
                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.6749 9.99185C23.6667 9.11438 23.3132 8.27544 22.6908 7.65684L15.5357 0.485004C15.2232 0.174362 14.8004 0 14.3598 0C13.9192 0 13.4965 0.174362 13.184 0.485004C13.0276 0.640054 12.9036 0.824522 12.8189 1.02777C12.7342 1.23101 12.6906 1.44901 12.6906 1.66919C12.6906 1.88937 12.7342 2.10737 12.8189 2.31061C12.9036 2.51386 13.0276 2.69833 13.184 2.85338L18.6713 8.32398H1.99258C1.55023 8.32398 1.126 8.49971 0.813215 8.81249C0.500429 9.12528 0.324707 9.54951 0.324707 9.99185C0.324707 10.4342 0.500429 10.8584 0.813215 11.1712C1.126 11.484 1.55023 11.6597 1.99258 11.6597H18.6713L13.184 17.147C12.8699 17.4589 12.6926 17.8827 12.691 18.3253C12.6895 18.7679 12.8638 19.193 13.1756 19.507C13.4875 19.8211 13.9113 19.9984 14.3539 20C14.7965 20.0016 15.2216 19.8272 15.5357 19.5154L22.6908 12.3435C23.3173 11.7208 23.6711 10.8751 23.6749 9.99185Z" fill="black" />
                        </svg>
                  }
                </button>
              )
            })
          }
        </div>
      </div>
    )
  }
  