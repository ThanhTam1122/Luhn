'use client'

import { generatedToken, selectedNumbers, useDispatch, useSelector, verifyToken } from "@/lib/redux"
import { generatorAsync } from "@/lib/redux/slices/generatorSlice/thunks"
import { verifyAsync } from "@/lib/redux/slices/verifySlice/thunks"
import { useRouter } from "next/navigation"
import isEmpty from "lodash/isEmpty"

export default function VerifyPage() {
  const selectedPads = useSelector(selectedNumbers)
  const token = useSelector(generatedToken)
  const verifyMsg = useSelector(verifyToken)
  const dispatch = useDispatch()
  const router = useRouter()

  const handleGenerateClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (selectedPads.length < 2)
      alert(`Turn back and choose the numbers again`)
    else
      dispatch(generatorAsync(selectedPads))
  };

  const handleVerifyClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isEmpty(token))
      alert(`First, You should generate a token for verifying`)
    else
      dispatch(verifyAsync(token))
  };

  return (
    <div className="grid grid-col-1 justify-center">
      <input
        type="text"
        name="cardNo"
        placeholder="Here is the generated token"
        className="mx-auto w-64 p-1 rounded border border-green mb-4 outline-none text-grey md:w-96 md:p-3"
        aria-label="randomize numbers"
        value={token}
        readOnly
      />

      <button
        className="p-1 w-full mx-auto text-center bg-green text-white rounded mb-4 cursor-pointer hover:bg-greenshade text-base font-normal sm:text-lg sm:font-medium md:text-xl md:font-semibold"
        onClick={(e) => handleGenerateClick(e)}
      >
        Generate
      </button>

      <button
        className="p-1 w-full mx-auto text-center bg-green text-white mb-4 rounded cursor-pointer hover:bg-greenshade text-base font-normal sm:text-lg sm:font-medium md:text-xl md:font-semibold"
        onClick={(e) => handleVerifyClick(e)}
      >
        Verify
      </button>

      <button
        className="p-1 w-full mx-auto text-center bg-green text-white rounded cursor-pointer hover:bg-greenshade text-base font-normal sm:text-lg sm:font-medium md:text-xl md:font-semibold"
        onClick={() => router.push('/')}
      >
        Back
      </button>

      <div
        id="msg"
        className="text-base font-light sm:text-lg sm:font-medium md:text-xl md:font-semibold"
      >
        <p className="text-white w-64 p-1 text-center mt-4 md:w-96 md:p-3">
          {verifyMsg}
        </p>
      </div>
    </div>
  )
}
