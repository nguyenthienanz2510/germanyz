import React from 'react'
import { ScaleLoader } from 'react-spinners'
import { useLoadingContext } from '../../context/loading'

export default function SpinnerComponent() {
  const { loading } = useLoadingContext()
  return (
    <>
      {loading && (
        <div className='z-[100] fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-[rgba(0,0,0,0.4)]'>
          <ScaleLoader color="#cfb160" />
        </div>
      )}
    </>
  )
}
