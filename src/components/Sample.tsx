import React, { useContext, useEffect, useState } from 'react'
import { Dropdown } from 'uikit'
import { SelectItem } from '../uikit/components/Dropdown'
import { GlobalContext } from 'store/globalContext'

const Sample = () => {
  // get static data from context
  const { data, isMulti, setIsMulti } = useContext<any>(GlobalContext)

  // default select: 1st item ==> [data[0]]
  // default select: none ==> []
  const [value1, setValue1] = useState<SelectItem[] | undefined>([data[0]])

  // default select: 1st item ==> [data[0]]
  const [value2, setValue2] = useState<SelectItem | undefined>(data[0])

  // Temp Code
  if (isMulti) {
    return (
      <>
        {/* Multi Select */}
        <Dropdown
          multiple
          placeholder="placeholder"
          data={data}
          value={value1}
          setValue={setValue1}
          onChange={(item: any) => setValue1(item)}
        />


        {/* Temp Code: Switch Button */}
        <TempCode />
      </>
    )
  } else {
    return (
      <>
        {/* Single Select */}
        <Dropdown
          placeholder="placeholder"
          data={data}
          value={value2}
          setValue={setValue2}
          onChange={(item: any) => setValue2(item)}
        />

        {/* Temp Code: Switch Button */}
        <TempCode />
      </>
    )
  }

}

export default Sample


const TempCode = () => {
  const { isMulti, setIsMulti } = useContext<any>(GlobalContext)

  return (
    <label className="switch">
      <h2 className='switch-title'>{isMulti ? "Multi Select" : "Single Select"}</h2>
      <input type="checkbox" checked={isMulti} onChange={event => setIsMulti(event.target.checked)} />
      <span className="slider round" />
    </label>
  )
}