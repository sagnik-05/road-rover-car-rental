import React from 'react'

function CarsList(props:any) {
  return (
    <div>
      {props.carsList.map((car:any, index:number)=>(
        <div>
            {car.name}
        </div>
      ))}
    </div>
  )
}

export default CarsList
