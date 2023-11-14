import React from 'react';

export default function VideoPlayer() {
  return (
    <div>
      {/* Paste the embed code here */}
      <iframe width="560" 
      height="315" 
      src="https://www.youtube.com/embed/FMtUqoxfR50" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen>        
      </iframe>
    </div>
  );
}

