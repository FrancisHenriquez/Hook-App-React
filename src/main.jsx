import React from 'react'
import ReactDOM from 'react-dom/client'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memories } from './06-memos/Memories'
import { MemoriesHook } from './06-memos/MemoriesHook'
// import { FormWithCustomHook } from './02-UseEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { SimpleForm } from './02-UseEffect/SimpleForm'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <MemoriesHook />
  //  </React.StrictMode>
)
