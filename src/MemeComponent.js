import React from "react";
import Data from "./Data"

export default function MemeComponent(){
    var [meme,setMeme]=React.useState({topText:"",bottomText:"",randomImage:""});
    
    var [memesData,setMemesData]=React.useState({});
    React.useEffect(()=>{
        console.log('inside use effect')
        Data().then(memes=>setMemesData(memes));
    },[]);

    function submition(event){
        event.preventDefault();
        var randomItem=memesData.data.memes[Math.floor(Math.random()*memesData.data.memes.length)-1];
        console.log('imagesource-'+randomItem.url);
        setMeme(prevMeme=>({...prevMeme,randomImage:randomItem.url}));
    }
    function txtChange(event){
        const setProp=(event.target.className==='topInput')?"topText":"bottomText";
        setMeme((meme)=>({...meme,[setProp]:event.target.value}));
    }
    return (
        <main>
            <form className="inputFields" onSubmit={submition}>
                <input type="text" className="topInput" placeholder="Top text" onChange={txtChange}/>
                <input type="text" className="bottomInput" onChange={txtChange} placeholder="Bottom text"/>
                <button>Get a new meme image 🖼</button>
            </form>
            {meme.randomImage.length > 0 && 
                <div className="actualMeme">
                    <img src={meme.randomImage}/>
                    <h2 className="topText memeText">{meme.topText}</h2>
                    <h2 className="bottomText memeText">{meme.bottomText}</h2>
                </div>
            }
        </main>
    );
}