import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";

export default function News() {
    return <>
        <h2>This is news</h2>
        <NewsList allNews={DUMMY_NEWS} />
    </>
}