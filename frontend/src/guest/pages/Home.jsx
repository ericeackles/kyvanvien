import React from 'react'
import StoriesHot from '../components/HotStories'
import StoryNew from '../components/StoryNew'
import StoryCompleted from '../components/StoryCompleted'
import ReadingHistory from '../components/ReadingHistory'

const Home = () => {
  return (
    <div className="body">
        <main className="main-home">
          <ReadingHistory/>
          <StoriesHot/>
          <StoryNew/>
          <StoryCompleted/>
        </main>

    </div>
  )
}

export default Home