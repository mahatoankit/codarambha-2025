import React from 'react'

export const CodarambhaIcon = ({ className, size = 40 }) => (
  <div 
    className={`bg-gradient-to-br from-[#C12A37] to-red-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg ${className}`}
    style={{ width: size, height: size, fontSize: size * 0.4 }}
  >
    C
  </div>
)

export default CodarambhaIcon
