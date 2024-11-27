import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";


export default function defaultPage () {
    const news = getLatestNews()
    return <div>
        <NewsList allNews={news} />
    </div>
}