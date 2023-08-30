import React, { useState} from 'react'
import Image from 'next/image'
function CarCard(props:any) {
    const [car, setCar] = useState(props.car)
  return (
    <div>
      <h2>{car.name}</h2>
      <span>{car.price}</span>
      <span>
        <Image src={car.image?.url}
        alt={car.name}
        width={220}
        height={200}
        className=' w-[250px] h-[150px] mb-3 object-contain'/>
      </span>
    </div>
  )
}

export default CarCard
