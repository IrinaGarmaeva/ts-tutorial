import { useEffect, useState, type ReactNode } from "react";
import { get } from "./utils/http";
import { type BlogPost } from "./components/BlogPosts";
import BlogPosts from "./components/BlogPosts";
import ErrorMessage from "./components/ErrorMessage";
import fetchingImg from './assets/data-fetching.png'

type RawDataBlogPost = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true)
      try {
        const data = (await get(
          "https://jsonplaceholder.typicode.com/posts"
        )) as RawDataBlogPost[];

        const blogPosts: BlogPost[] = data.map((rawPost) => {
          return {
            id: rawPost.id,
            title: rawPost.title,
            text: rawPost.body,
          };
        });
  
        setIsFetching(false)
        setFetchedPosts(blogPosts);
      } catch (error) {
        setIsFetching(false)
        setError((error as Error).message)
      }
      
    }

    fetchPosts();
  }, []);

  let content : ReactNode

  if (fetchedPosts) {
    content =   <BlogPosts posts={fetchedPosts} />
  }

  if(isFetching) {
    content= <p id="loading-fallback">Fetching posts...</p>
  }

  if(error) {
    content = <ErrorMessage text={error}/>
  }

  return (
    <main>
      <img src={fetchingImg} alt="An abstract image depicting a data fetching process" />
      {content}
    </main>
  );
}

export default App;
