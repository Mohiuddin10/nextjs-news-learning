import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function NewsDetails({ params }) {
    const id = params.slug;
    const newsItem = DUMMY_NEWS.find(news => news.slug == id)
    if (!newsItem) {
        notFound()
    }
    return <article className="news-article">
        <header>
            <Link href={`/news/${newsItem.slug}/@modal/default.js`}>
                <img src={`/images/news/${newsItem.image}`} alt={`${newsItem.title}`} />
            </Link>
            <h1>{newsItem.title}</h1>
            <time dateTime={newsItem.date}>{newsItem.date}</time>
        </header>
        <p>{newsItem.content}</p>
    </article >
}