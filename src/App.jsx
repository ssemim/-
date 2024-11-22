/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import './index.css' 

import React, { useEffect }  from 'react'; 

import { useState,useRef } from 'react'; 
import PlayListData from './loading.js'

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { PiDownloadSimpleFill } from "react-icons/pi";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

function App() {


  let [Music,MusicChange] = useState(0);

  const downloadFileAtURL=(url)=>{
    const aTag = document.createElement('a')
    aTag.href=url
    aTag.setAttribute('download',PlayListData[Music].SongName+'.wav');
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const Player = () => (
    <AudioPlayer
      autoPlay
      src={PlayListData[Music].Audio}
      onPlay={e => console.log("onPlay")}
      // other props here
    />
  );

  return (
    <div className='wrapper'>

       <div className="playListBody">

       <div className='NowPlaying'>
       <span> &nbsp; NOW PLAYING ... </span>

        <div className='AlbumImage'>

<div className='imgandpass'>
        <div className='passing'onClick={()=>{
          
          if(Music>0){MusicChange(Music-1)}
          else{MusicChange(11)}
          
          
          }}><FaChevronLeft  size={70} color="white"/></div>
          <img className='IMG' src={PlayListData[Music].TitleImg}></img>
          <div className='passing'onClick={()=>{

        if(11>Music){MusicChange(Music+1)}
        else{MusicChange(0)}



          }}><FaChevronRight size={70} color="white" /></div>
          </div>
<div className='icons'>
        <Player/>
          </div>




        </div>

        <div className='SongName'>{PlayListData[Music].SongName}</div>
     


        <div className='PlayList'>
          
             <div className='li'> <div className='songs' onClick={()=>{MusicChange(0)}}>{PlayListData[0].SongName}</div> 
            <div className='download'><PiDownloadSimpleFill onClick={()=>{MusicChange(0), downloadFileAtURL(PlayListData[0].Audio)}}/></div></div>
             <div className='li'> <div className='songs'onClick={()=>{MusicChange(1)}} >{PlayListData[1].SongName}</div> <div className='download'> <PiDownloadSimpleFill onClick={()=>{MusicChange(1), setTimeout(downloadFileAtURL(PlayListData[1].Audio),1000)}}/></div></div>
             <div className='li'> <div className='songs'onClick={()=>{MusicChange(2)}}>{PlayListData[2].SongName}</div> <div className='download'> <PiDownloadSimpleFill onClick={()=>{MusicChange(2), setTimeout(downloadFileAtURL(PlayListData[2].Audio),1000)}}/></div></div>
             <div className='li'> <div className='songs'onClick={()=>{MusicChange(3)}}>{PlayListData[3].SongName}</div> <div className='download'> <PiDownloadSimpleFill onClick={()=>{MusicChange(3), setTimeout(downloadFileAtURL(PlayListData[3].Audio),1000)}}/></div></div>
             <div className='li'> <div className='songs'onClick={()=>{MusicChange(4)}}>{PlayListData[4].SongName}</div> <div className='download'> <PiDownloadSimpleFill onClick={()=>{MusicChange(4),setTimeout(downloadFileAtURL(PlayListData[4].Audio),1000)}}/></div></div>
             <div className='li'> <div className='songs'onClick={()=>{MusicChange(5)}}>{PlayListData[5].SongName}</div> <div className='download'> <PiDownloadSimpleFill onClick={()=>{MusicChange(5),downloadFileAtURL(PlayListData[5].Audio)}}/></div></div>
             <div className='li'> <div className='songs'onClick={()=>{MusicChange(6)}}>{PlayListData[6].SongName}</div> <div className='download'> <PiDownloadSimpleFill onClick={()=>{MusicChange(6),downloadFileAtURL(PlayListData[6].Audio)}}/></div></div>
             <div className='li'> <div className='songs'onClick={()=>{MusicChange(7)}}>{PlayListData[7].SongName}</div> <div className='download'> <PiDownloadSimpleFill onClick={()=>{MusicChange(7),downloadFileAtURL(PlayListData[7].Audio)}}/></div></div>
             <div className='li'> <div className='songs'onClick={()=>{MusicChange(8)}}>{PlayListData[8].SongName} </div> <div className='download'> <PiDownloadSimpleFill onClick={()=>{MusicChange(8),downloadFileAtURL(PlayListData[8].Audio)}}/></div></div>
             <div className='li'> <div className='songs'onClick={()=>{MusicChange(9)}}>{PlayListData[9].SongName} </div> <div className='download'> <PiDownloadSimpleFill onClick={()=>{MusicChange(9),downloadFileAtURL(PlayListData[9].Audio)}}/></div></div>
             <div className='li'> <div className='songs'onClick={()=>{MusicChange(10)}}>{PlayListData[10].SongName} </div> <div className='download'> <PiDownloadSimpleFill onClick={()=>{MusicChange(10),downloadFileAtURL(PlayListData[10].Audio)}}/></div></div>
             <div className='li'> <div className='songs'onClick={()=>{MusicChange(11)}}>{PlayListData[11].SongName} </div> <div className='download'> <PiDownloadSimpleFill onClick={()=>{MusicChange(11),downloadFileAtURL(PlayListData[11].Audio)}}/></div></div>
            
          </div>  

</div>
       </div>
      
    </div>
  )
}





export default App
