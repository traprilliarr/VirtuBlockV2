import CardAbout from '@/common/component/element/CardAbout'
import H1 from '@/common/component/element/H1'
import { Why_Choose_Me } from '@/common/constant/Why_Choose_Me'
import React from 'react'

export default function Why_choose_Me() {
  return (
    <div className="w-full items-start mt-36 lg:flex-row flex-col flex px-5 lg:px-10">
    <div className="basis-[40%] max-md:py-10">
      <H1
        title="Why choose us"
        className="md:!text-3xl  !text-[#EEEEEE] !text-2xl !justify-start "
      />
    </div>
    <div className="w-full flex flex-col gap-10">
      <H1
        title="We pride on creating innovative and user-centric designs"
        className="md:!text-2xl !font-semibold !text-[#EEEEEE] !text-2xl !justify-start "
      />
      <div className="w-full">
        <CardAbout
          className=""
          whyChooseme={Why_Choose_Me}
        />
      </div>
    </div>
  </div>
  )
}
