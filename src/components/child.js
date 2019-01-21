import React, {Component} from 'react'
export default ({match}) => {
    console.log(match)
    return (
        <div>
            {match.params.id}
        </div>
    )
}