export default function Archivelayout ({archive, latest}) {
    return <div>
        <h1>Hello this is from Archive menu</h1>
        <section id="archive-filter">
            {archive}
        </section>
        <section id="archive-latest">
            {latest}
        </section>
    </div>
}