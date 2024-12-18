import React from 'react';
import Header from './main/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Banner from './main/Banner';
import Section from './main/Section';

function App() {

  const bannerData = {
    title:"좀비버스: 뉴 블러드",
    description:
    "좀비 바이러스가 퍼진 대혼란 속, 생존자들의 피 끓는 사투가 시작된다. 어디서든 무자비한 좀비 떼와 맞서 싸우는 극한의 생존 서바이벌!",
    videoUrl: "https://www.youtube.com/embed/e4QY_z5Ttps?autoplay=1&mute=1&loop=1&playlist=e4QY_z5Ttps",
  }

  const popularMovies = [
    { title: "영화 1", image: "https://source.unsplash.com/random/200x300?movie" },
    { title: "영화 2", image: "https://source.unsplash.com/random/200x300?action" },
    { title: "영화 3", image: "https://source.unsplash.com/random/200x300?adventure" },
    { title: "영화 4", image: "https://source.unsplash.com/random/200x300?adventure" },
    { title: "영화 5", image: "https://source.unsplash.com/random/200x300?adventure" },
    { title: "영화 6", image: "https://source.unsplash.com/random/200x300?adventure" },
  ];

  const newReleases = [
    { title: "영화 1", image: "https://source.unsplash.com/random/200x300?movie" },
    { title: "영화 2", image: "https://source.unsplash.com/random/200x300?action" },
    { title: "영화 3", image: "https://source.unsplash.com/random/200x300?adventure" },
    { title: "영화 4", image: "https://source.unsplash.com/random/200x300?adventure" },
    { title: "영화 5", image: "https://source.unsplash.com/random/200x300?adventure" },
    { title: "영화 6", image: "https://source.unsplash.com/random/200x300?adventure" },
  ];

  return (
    <Router>
      <div className="app">
        <Header />
        <Banner 
          title={bannerData.title}
          description={bannerData.description}
          videoUrl={bannerData.videoUrl}
        />
        <Section title="인기 영화" items={popularMovies} />
        <Section title="새로 올라온 콘텐츠" items={newReleases} />
      </div>
    </Router>
  );
}

export default App;