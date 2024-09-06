import React from 'react'
import StoriesHot from '../components/HotStories'
import StoryNew from '../components/StoryNew'
import StoryCompleted from '../components/StoryCompleted'

const Home = () => {
  return (
    <div className="body">
        <main className="main-home">
          <StoriesHot/>
          <StoryNew/>
          <StoryCompleted/>
        </main>

    </div>
  )
}

export default Home