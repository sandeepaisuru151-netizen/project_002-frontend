import { Route, Routes } from "react-router-dom";
import HomePage from "./homePage";
import AdminPage from "./adminPage";
import { useState } from "react";

export default function TestPage() {

   const[emotion,setEmotion]= useState("😎")

    
    return (
        <div className=" w-full h-screen flex justify-center items-center bg-primary text-secondary flex-col ">

            <div className=" w-[300px] h-[300px] border-[6px] flex justify-center items-center text-secondary  ">
               { emotion }
            </div>
           
           <div className=" w-[300px] flex flex-row justify-center ">
 
                <button onClick={
                    ()=>{
                        setEmotion("😢")
                    } }
                     className="bg-accent w-[70px] h-[30px] text-white border-primary " >Sad</button>
                <button onClick={
                    ()=>{
                        setEmotion ( "😊")
                    }
                }
                 className="bg-accent w-[70px] h-[30px] text-white border-primary " >Happy</button>
                <button onClick={
                    ()=>{
                        setEmotion ("😡")
                    }
                }
                 className="bg-accent w-[70px] h-[30px] text-white border-primary " >Angry</button>

           </div>

        </div>
    )
}