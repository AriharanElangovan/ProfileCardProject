import React from "react";
export default function Data(){
    console.log('Inside fetch');
    return fetch('https://api.imgflip.com/get_memes').then(data => data.json()).then(meme => {
        console.log(meme);
        return meme;
    });
    
}