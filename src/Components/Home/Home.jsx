
import React, { useState } from 'react'
import './home.css'
import OnlineList from '../Online-list/OnlineList'
import Discussions from '../Discussions/Discussions'

export default function Home(){

    const [search,setSearch]=useState("")

    const onSearch=(e)=>{
        setSearch(e.target.value)
    }

    const onNewDiscussion=(e)=>{
        alert("New discussion")
    }

    return(

        <div>
            
            <header>
                <div className='head-header'>
                    <h5>Discussions</h5>
                    <button onClick={onNewDiscussion}>New</button>
                </div>
                
                <input type="search" className='search-input'  placeholder='Tapper le nom de la personne que vous recherchez' value={search} onChange={onSearch} />                
            </header>
            
            <OnlineList />
            <Discussions />

            <footer className='discussion-footer'>
            footer
            </footer>
        </div>

    )
}

