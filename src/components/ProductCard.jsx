import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products.js'

export default function ProductCard({ product }) {
  const sinStock = product.stock === 0
  return (
    <article className="card">
      <img src={product.imagen} alt={product.nombre} loading="lazy" />
      <div className="card-body">
        <span className="tag">{product.categoria}</span>
        <h3>{product.nombre}</h3>
        <p className="price">{formatPrice(product.precio)}</p>
        <p className={sinStock ? 'stock out' : 'stock'}>
          {sinStock ? 'Sin stock' : `Stock: ${product.stock}`}
        </p>
        <Link to={`/producto/${product.id}`} className="btn btn-block">Ver detalle</Link>
      </div>
    </article>
  )
}
