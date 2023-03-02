import React from 'react'

type Props = {}

export default function Main({}: Props) {
  return (
    <main>
      <article className="main-article" data-index="0" data-status="active">
        <div className="article-image-section article-section"></div>
        <div className="article-description-section article-section">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            eveniet voluptates sed quod iste recusandae atque nesciunt corrupti,
            quidem debitis, cum sapiente, labore error praesentium ipsam numquam
            explicabo dolores itaque?
          </p>
        </div>
        <div className="article-title-section article-section">
          <h2>Flor Mazza, Canon Rebel T7</h2>
        </div>
        <div className="article-nav-section article-section">
          <div className="nav-section-arrow left" onclick="handleLeftClick()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </div>
          <div className="nav-section-arrow right" onclick="handleRightClick()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      </article>
      <article className="main-article" data-index="1" data-status="inactive">
        <div className="article-image-section article-section"></div>
        <div className="article-description-section article-section">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            eveniet voluptates sed quod iste recusandae atque nesciunt corrupti,
            quidem debitis, cum sapiente, labore error praesentium ipsam numquam
            explicabo dolores itaque?
          </p>
        </div>
        <div className="article-title-section article-section">
          <h2>Gaston Rotger, Sony Alpha III</h2>
        </div>
        <div className="article-nav-section article-section">
          <div className="nav-section-arrow left" onclick="handleLeftClick()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </div>
          <div className="nav-section-arrow right" onclick="handleRightClick()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      </article>
      <article className="main-article" data-index="2" data-status="inactive">
        <div className="article-image-section article-section"></div>
        <div className="article-description-section article-section">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            eveniet voluptates sed quod iste recusandae atque nesciunt corrupti,
            quidem debitis, cum sapiente, labore error praesentium ipsam numquam
            explicabo dolores itaque?
          </p>
        </div>
        <div className="article-title-section article-section">
          <h2>Federico Abril, Canon Rebel 7T</h2>
        </div>
        <div className="article-nav-section article-section">
          <div className="nav-section-arrow left" onClick="handleLeftClick()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </div>
          <div className="nav-section-arrow right" onClick="handleRightClick()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      </article>
    </main>
  );
}