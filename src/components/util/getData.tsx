"use client"
import React, { useEffect, useState } from 'react'
import {get, ref} from "firebase/database"
import { db } from '@/src/firebase/firebase'
const getData = () => {

    const [note, SetNotes] = useState<Array<any>>([])

    useEffect(() =>{
        const getNotes = ref(db, 'notes');

        get(getNotes).then((snapshot) => {
          if(snapshot.exists()){
            const useArray = Object.entries(snapshot.val()).map(([id, notes]) => {
            return {
                id,
                notes,
            };
            });
            SetNotes(useArray)
          }
          else{
            console.log("error")
          }
        }).catch((error) =>{
            console.log(error)
        })

        
    },[])

  return (
    <div>getData</div>
  )
}

export default getData