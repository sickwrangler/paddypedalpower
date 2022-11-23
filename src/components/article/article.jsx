import React from 'react';
import './article.css';


const article = () => {
  return (
    
    <div className="velo-wrapper section_padding" id="challenge">
      <h2 className='article_title gradient_text'>The hill</h2>
      <div className='article_equation'>
        <div>everest elevation = 8849 m</div>    <div>/</div>    <div>y tumblr elevation = 384 m</div>    <div>=</div>    <div>23 summits.  </div>
        </div>
      <div className='article-content'>
      <p className='article_summary'>Y Tumblr or The Tumble or Keepers hill. Whatever you call it, it is a massive hill. Windings it way from Govilion and the Monmouthshire and Brecon canal all the way up and over the Blorenge mountain. A total elevation gain of 384m</p>
      <iframe title="Y Tumblr" src="https://veloviewer.com/segments/6665321/embed" width="700" height="500"></iframe>
      </div>
    </div>
  )
}

export default article;