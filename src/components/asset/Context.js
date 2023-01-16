import { createContext,  useContext, useState } from 'react';


export const AppContext = createContext(null)

export const AppProvider =({children})=>{
    const [data, setData] = useState({name:'', age:''})
    const [toogle, setToogle] = useState(false)

    const updateData =(e)=>{
        setData(e.target.value)
    }

    const updateToogle =(e)=>{
        setToogle(!toogle)
    }

  
    const globalData ={data, updateData, updateToogle}
    return <AppContext.Provider value={globalData} >
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
  }
  