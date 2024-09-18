import SelectLabels from '@/app/components/material/select/SelectLabels';
import Link from 'next/link'
import React from 'react'

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) =>  {

  return (
    <div>    
    <Link href={"/"}>Back</Link>
    {children}
    </div>

  )
}
export default MainLayout
