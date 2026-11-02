import { useParams, Link } from 'react-router-dom'
import products, { formatPrice } from '../data/products.js'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))

  if (!product) {
    return (
      <div className="empty">
        <h2>Producto no encontrado</h2>
        <Link to="/" className="btn">Volver al inicio</Link>
      </div>
    )
  }

  const sinStock = product.stock === 0

  return (
    <section>
      <Link to="/" className="back">← Volver al listado</Link>
      <div className="detail">
        <img src={product.imagen} alt={product.nombre} />
        <div className="detail-info">
          <span className="tag">{product.categoria}</span>
          <h1>{product.nombre}</h1>
          <p className="price big">{formatPrice(product.precio)}</p>
          <table className="specs">
            <tbody>
              <tr><th>Código</th><td>{product.codigo}</td></tr>
              <tr><th>Precio</th><td>{formatPrice(product.precio)}</td></tr>
              <tr>
                <th>Stock</th>
                <td className={sinStock ? 'stock out' : 'stock'}>
                  {sinStock ? 'Sin stock' : `${product.stock} unidades`}
                </td>
              </tr>
            </tbody>
          </table>
          <p className="description">{product.descripcion}</p>
          <button className="btn btn-block" disabled={sinStock} type="button">
            {sinStock ? 'Sin stock' : 'Agregar al carrito'}
          </button>
        </div>
      </div>
    </section>
  )
}
