import React from 'react';

/** import components */
import Announcement from '../../components/announcement/Announcement';
import Navbar from '../../components/navbar/Navbar';
import Slider from '../../components/slider/Slider';

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            Home
        </div>
    )
}

export default Home;