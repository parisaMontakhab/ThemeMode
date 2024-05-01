

export default function Panel({ title, children }) {
    const className = "panel-" + theme;
  return (
    <section className={className}>
    <h1>{title}</h1>
    {children}
  </section>
  )
}
