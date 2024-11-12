import StoriesCard from "../components/StoriesCard/StoriesCard";
import Navbar from "../components/NavBar/NavBar";
import { useFetchStories } from '../hooks/hookMyStories';

const MyStories = () => {

    const { data: stories, loading: loadingStories } = useFetchStories();

    return (
        <>
            <Navbar Page={'My Stories'}/>
            <main className="App-home">
                <div className="container">
                    <h2>My Stories</h2>
                    <div>
                        {loadingStories ? (
                            <p>Loading Stories...</p>
                        ) : stories && stories.length > 0 ? (
                            stories.map((stories) => (
                                <StoriesCard key={stories._id} stories={stories} />
                            ))
                        ) : (
                            <p>No Stories</p>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
};

export default MyStories;