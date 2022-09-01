import React, { FC } from 'react'
import { ListType } from '../component.type'

const List: FC<ListType> = ({ content, className }) => {
  const displayList = (array: string[]) => {
    return array.map((item: string, key: number) => {
      return <li>{item}</li>
    })
  }
  return (
    <ul className={`${className ? className : ''} list-disc`}>
      {displayList(content)}
    </ul>
  )
}
export default List
