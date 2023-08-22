import React from 'react'
import {useLocation,Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'
export default function BreadCrumb() {
    const location = useLocation();
    const paths=[{title:<Link to='/'>Home</Link>}]
    let str=''
    location.pathname.split('/').forEach(loc=>{
         if(loc){
             str+=`/${loc}`
             paths.push({title:<Link to={str}>{loc}</Link>})
         }
     })
    console.log(paths)
  return (
    <Breadcrumb
        items={paths}
       
  />
  )
}
