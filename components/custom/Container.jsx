import React from 'react'
import { LeftBar } from '@/components/custom/LeftBar/LeftBar'
import { Callendar } from '@/components/custom/Callendar/Callendar'

export const Container = () => {
  return (
    <div className="containerBox">
          <LeftBar />
          <Callendar />
      </div>
  )
}