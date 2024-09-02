import ReactPortal from "./ReactPortal";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {X} from "lucide-react"

interface BuyModalProp {
    children: React.ReactNode ;
    isOpen: boolean ;
    handleClose: () => void ;
}

const Modal = ({children, isOpen, handleClose} : BuyModalProp) => {

    //close modal on key press
    useEffect(() => {

        const closeOnEscapeKey = (e : KeyboardEvent) => e.key === 'Escape' ? handleClose() : null ;

        document.body.addEventListener('keydown', closeOnEscapeKey) ;

        return () => {
            document.body.removeEventListener('keydown',closeOnEscapeKey) ;
        };

    },[handleClose])

    //disable scroll on modal load
    useEffect(() => {
        document.body.style.overflow = 'hidden' ;

        return () => {
            document.body.style.overflow = 'unset' ;
        };

    },[isOpen])

    if(!isOpen) return null ;

    return (
        <ReactPortal wrapperId="react-portal-modal-container">
                <div className="fixed top-0 left-0 z-40 w-screen h-screen bg-slate-100/70 ">
                    <div className="fixed rounded flex flex-col box-border min-w-fit p-5 inset-y-32 inset-x-2 md:inset-x-96">
                        <div className="w-full h-full rounded-md flex flex-col items-center relative p-8 bg-white shadow-md overflow-auto">
                            <Button onClick={handleClose} className="py-2 px-8 self-end">
                                <X/>
                            </Button>

                            <div className="box-border h-5/6">{children}</div>
                        </div>
                    </div>
                </div> 
        </ReactPortal>
    )
}

export default Modal;