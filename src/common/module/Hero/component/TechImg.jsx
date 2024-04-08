'use client'
import {  useEffect, useState } from 'react';


import InfiniteLoopSlider from '@/common/component/element/InfiniteLoopSlider';
import { Tech } from '@/common/constant/Tech';
import ComponentTransition from '@/common/component/element/ComponentTransition';
import Image from '@/common/component/element/Image';

const Tag = ({ icon }) => (
  <div className='flex items-center overflow-hidden  rounded-full py-2 px-5 w-max '>
    <div className='w-[50px]'>
    <Image 
    className="w-full h-auto object-cover"
    src={icon}
    alt="aa"
    width={400}
    height={400}
    priority
    />
    </div>
  </div>
);

const TechImg = () => {
  const [shuffledSkills, setShuffledSkills] = useState([]);
  
  useEffect(() => {
    const skillsArray = Object.entries(Tech);
    const shuffledArray = [...skillsArray].sort(() => Math.random() - 0.5);
    setShuffledSkills(shuffledArray);
  }, []);

  const sliders = Array.from({ length: 2 }, (_, index) => {
    const sliderSkills = [...shuffledSkills].sort(() => Math.random() - 0.5);
    return (
      <InfiniteLoopSlider key={index}>
        {sliderSkills.map(([title, icon], index) => (
          <Tag key={index} icon={icon} title={title} />
        ))}
      </InfiniteLoopSlider>
    );
  });

  return (
    <ComponentTransition className='w-full overflow-hidden'>
      <div className='flex overflow-hidden w-full justify-start items-start'>
        <div className='relative flex flex-row flex-nowrap  justify-center py-2 w-full overflow-hidden'>
          {sliders}
          <div className='w-full inset-0 bg-gradient-to-l from-[#ede3fe] from-0% to-transparent to-5% absolute'>
          </div>
          <div className='w-full inset-0 bg-gradient-to-r from-[#ede3fe] from-0% to-transparent to-5% absolute'>
          </div>
        </div>
      </div>
    </ComponentTransition>
  );
};

export default TechImg;
