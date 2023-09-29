"use client";
import { Input } from "./ui/input";
import { useState } from "react";

export default function Navbar(){
    const handleKeyDown = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          window.location.replace("/search/"+ value)
        }
      }
    const [value, setValue] = useState('');
    return(
        <header className="flex flex-col">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <div >
                <a className="flex items-center" href="/">
                    <img src="/logo.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
                    <div className="text-lg font-semibold pl-3">UpStore</div>
                </a>
            </div>
            <div className="ml-auto flex items-center space-x-4">
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="search" placeholder="Suche..." onKeyDown={handleKeyDown} value={value}
    onChange={e => { setValue(e.currentTarget.value); }} />
            </div>
            </div>
          </div>
        </div>
        </header>
    )
}