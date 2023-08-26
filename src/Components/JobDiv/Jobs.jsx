import React from 'react'
import {BiTimeFive} from 'react-icons/bi'

const Data = [
  {
    id: 1,
    location: 'canada',
    time: 'Now',
    title: 'Web Developer',
    desc: 'We are always available to help you with any questions you may have.',
    company: 'Novac Linus Co.',
  },
  {
    id: 2,
    location: 'costarika',
    time: 'Now',
    title: 'React Developer',
    desc: 'We are always available to help you with any questions you may have.',
    company: 'Manufacturing.',
  },
  {
    id: 3,
    location: 'Swiss',
    time: 'Now',
    title: 'Cyber Security',
    desc: 'We are always available to help you with any questions you may have.',
    company: 'Google',
  },
  {
    id: 4,
    location: 'Indonesia',
    time: 'Now',
    title: 'Quality Assurance',
    desc: 'We are always available to help you with any questions you may have.',
    company: 'Tokopedia.',
  },
  {
    id: 5,
    location: 'Indonesia',
    time: 'Now',
    title: 'Project Management',
    desc: 'We are always available to help you with any questions you may have.',
    company: 'Tokopedia',
  },
  {
    id: 6,
    location: 'Malaysia',
    time: 'Now',
    title: 'Web Developer',
    desc: 'We are always available to help you with any questions you may have.',
    company: 'Primus',
  },
  {
    id: 7,
    location: 'Jakarta',
    time: 'Now',
    title: 'Web Developer',
    desc: 'We are always available to help you with any questions you may have.',
    company: 'Shopee',
  },
  {
    id: 8,
    location: 'Magelang',
    time: 'Now',
    title: 'Web Developer',
    desc: 'We are always available to help you with any questions you may have.',
    company: 'Affilio',
  },
]

const Jobs = () => {
  return (
    <div>
      <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>

      {
        Data.map(({ id,location,time,title,desc,company }) =>{
          return (
            <div key={id} className='group group/ite singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>

          <span className='flex justify-between items-center gap-4'>          
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
            <span className='flex items-center gap-1 text-[#ccc]'>
              <BiTimeFive/>{time}
            </span>
          </span>
          <h6 className='text-[#ccc]'>{location}</h6>

          <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
           {desc}
          </p>

          <div className='company flex items-center'>
            <BiTimeFive className='w-[10%] gap-2 group-hover:text-white'/>
            <span className='text-[14] py-[1rem] block group-hover:text-white'>{company}</span>
          </div>

          <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-textColor'>Apply Now
          </button>

        </div>
          )
                      
        })
      }
        
      </div>
    </div>
  )
}

export default Jobs