import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function InterceptedNewsImage({ params }) {
    const id = params.slug;
    const newsItem = DUMMY_NEWS.find(news => news.slug == id)
    if (!newsItem) {
        notFound()
    }
    return (
        <>
            <h1>Intercepted Image</h1>
            <div className="fullscreen-image">
                <img src={`/images/news/${newsItem.image}`} alt={`${newsItem.title}`} />
            </div>
        </>)
}