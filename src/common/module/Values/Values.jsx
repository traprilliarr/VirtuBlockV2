import H1 from '@/common/component/element/H1'
import React from 'react'
import ValuesCard from './components/ValuesCard'

export default function Values() {
  return (
    <div className="h-auto max-w-[1500px] py-10  px-5 lg:px-10 relative overflow-hidden flex-col flex justify-center  w-full ">
    <div className="w-full flex gap-5 flex-col py-5 justify-center items-center">
      <div className="w-auto px-8 py-1 rounded-full border-[1px] border-[#3D3B40]">
        <h1 className="text-[#3D3B40] text-lg font-medium">Our Values</h1>
      </div>
      <H1
        title="Values At Visionize AI"
        className="md:!text-5xl !text-xl !text-[#3D3B40] w-full font-medium !justify-center"
      />
    </div>
    <div className='w-full'>
        <ValuesCard />
    </div>
  </div>
  )
}
