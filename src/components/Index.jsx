import React from 'react'
import Gif from './Gif'

function Index(props) {
    return (
        <div className="container d-flex flex-row">

            <div className="d-flex row text-center">
                {props.gifs.map((gif, index) =>{
                    return(<Gif title={gif.username} url={gif.url} />)
                })}
            </div>

        </div>
    )
}

export default Index;