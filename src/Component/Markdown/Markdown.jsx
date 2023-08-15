import React, { useState } from 'react';
import './Markdown.css'
import ReactMarkdown from 'react-markdown'


const Markdown = () => {
  const [markdown, setMarkdown] = useState("Welcome to markdown")
  return (
    <div>
      <div className='center-div'>
      <textarea className='left-side'
      value={markdown} onChange={(e)=>{setMarkdown(e.target.value)}}></textarea>
      <div className='right-side'>
      <ReactMarkdown>{markdown}</ReactMarkdown>
      
      </div>
      </div>
    </div>
  );
}

export default Markdown;
