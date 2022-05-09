import React from 'react'
import { socialsData } from '../data/socialsObject';

const socials = ()=> {
    return (
        <div className='mt-5 text-center'>
            { socialsData.map((data, index) => {
                return (
                    <a href={ data.path } className={data.className} key={index}>
                        { data.icon }
                    </a>
                )
            } ) }
        </div>
    )
}

export default socials;