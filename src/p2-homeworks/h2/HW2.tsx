import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'low' | "middle"
export type AffairMass = {
    _id: number
    name: string
    priority:string
}
export type AffairType = Array<AffairMass> // need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
let defaultAffairs: Array<AffairMass> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairMass>, filter: FilterType): Array<AffairMass> => { // need to fix any
    if (filter === 'all') return affairs
    else {
        return affairs = affairs.filter( f => f.priority === filter )
    }
}
export const deleteAffair = (affairs: Array<AffairMass>, _id: number): Array<AffairMass> => { // need to fix any
    return affairs = affairs.filter( f => f._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairMass>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => {
        setAffairs(deleteAffair(affairs, _id))
    } // need to fix any

    return (
        <div>
            <hr/>
            <h3>homeworks 2</h3>

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
