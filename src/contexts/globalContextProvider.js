import React, {createContext,useContext,useState,useMemo} from 'react'
import { io } from "socket.io-client";
import webrtc from '../services/webrtc'
import localStream from '../services/localStream'
const globalsContext = createContext()
const socketContext = createContext()
const peerContext = createContext()
const useSocket = () => useContext(socketContext)
const usePeer = () => useContext(peerContext)
const useGlobals = () => useContext(globalsContext)
export default  function GlobalContextProvider({children}){
    const localstream=useMemo(()=>new localStream(),[])
    // const stream=localstream.startStream()
    const [globals, setGlobals] = useState("")
    // const [peer, setPeer] = useState({})
    const socket = useMemo(() => io("http://localhost:5500"), []);
    socket.toRoom=(msg)=>{
        socket.emit('message-to-room','dummyRoom',msg)
    }
    socket.on('room-joined',msg=>console.log(`Joined ${msg.roomname}`))
    socket.join=(roomname)=>{
        socket.emit('join-room-public',roomname)
        console.log(`joining ${roomname}`)
    }
    // socket.emit('join-room-public','dummyRoom')

    const peer = useMemo(()=>{
        return new webrtc(socket)
    }, []);
    socket.on('room-message',msg=>{
        // console.log(msg)
        switch(msg.type){
          case 'offer':
            peer.createAnswer(msg)
            break;
          case 'answer':
            peer.verifyAnswer(msg)
            break;
          case 'candidate':
            peer.handleCandidate(msg)
            break;
          default:
            console.log('unknown msg type')
        }
      })
    return <globalsContext.Provider value={{globals,setGlobals,localstream}}>
        <socketContext.Provider value={socket}>
        <peerContext.Provider value={peer}>
        {children}
        </peerContext.Provider>
        </socketContext.Provider>
    </globalsContext.Provider>

}
export {useSocket,usePeer,useGlobals}