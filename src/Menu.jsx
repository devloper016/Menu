import React from 'react'
import MenuItem from './MenuItem'
export default function Menu({items}) {
  return (
    <section className='section-center'>
        {items.map((item)=>{
            const {id,title,price,img,category,desc} = item;
            return <MenuItem key={id} {...item}></MenuItem>
        })}
    </section>
  )
}
