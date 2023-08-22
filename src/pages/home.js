import React,{useEffect, useMemo,useState,useRef} from 'react'
import { usePeer,useSocket,useGlobals} from '../contexts/globalContextProvider'
export default function home() {
  const peer = usePeer()
  const socket = useSocket()
  const {localstream}=useGlobals()
  const [vidsrc,setvidsrc]=useState(null)
  const vidRef=useRef(null)
  useEffect(() => {
    // peer.createOffer()
    async function getStream(){
      const stream=await localstream.startStream()
      vidRef.current.srcObject=stream
    }
    getStream()
  } )
  const [room,setRoom]=useState('dummyRoom')
  return (<>
    <div>home is home</div>
    <input type="" name="" value={room} onChange={e=>{setRoom(e.target.value)}}/>
    <button type="" onClick={()=>{socket.join(room)}}>Join Room  </button>
    <br/>
    <button type=""  onClick={()=>{peer.createOffer()}}>Connect to peer</button>
    <video width="" height=""  ref={vidRef}   autoPlay>
      
    </video>
    </>
  )
}
