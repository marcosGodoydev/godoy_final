import products from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'

export default function Home() {
  return (
    <section>
      <div className="hero">
        <h1>Tecnología al mejor precio</h1>
        <p>Descubrí nuestro catálogo de productos.</p>
      </div>
      <h2 className="section-title">Productos</h2>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
