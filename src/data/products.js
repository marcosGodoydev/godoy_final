// Mock de datos de productos
const products = [
  { id: 1, codigo: 'NB-001', nombre: 'Notebook Lenovo IdeaPad 3', precio: 849999, stock: 12, categoria: 'Notebooks', descripcion: 'Notebook de 15.6" con procesador Ryzen 5, 8 GB de RAM y SSD de 512 GB. Ideal para estudio y trabajo.', imagen: 'https://picsum.photos/seed/notebook/600/400' },
  { id: 2, codigo: 'SM-002', nombre: 'Smartphone Samsung Galaxy A55', precio: 649999, stock: 25, categoria: 'Celulares', descripcion: 'Pantalla Super AMOLED de 6.6", 128 GB de almacenamiento y cámara triple de 50 MP.', imagen: 'https://picsum.photos/seed/phone/600/400' },
  { id: 3, codigo: 'AU-003', nombre: 'Auriculares JBL Tune 520BT', precio: 79999, stock: 40, categoria: 'Audio', descripcion: 'Auriculares inalámbricos con Bluetooth 5.3 y hasta 57 horas de batería.', imagen: 'https://picsum.photos/seed/headphones/600/400' },
  { id: 4, codigo: 'MO-004', nombre: 'Monitor LG 24" Full HD', precio: 219999, stock: 8, categoria: 'Monitores', descripcion: 'Monitor IPS de 24 pulgadas, resolución 1920x1080, 75 Hz y AMD FreeSync.', imagen: 'https://picsum.photos/seed/monitor/600/400' },
  { id: 5, codigo: 'TE-005', nombre: 'Teclado mecánico Redragon Kumara', precio: 59999, stock: 0, categoria: 'Periféricos', descripcion: 'Teclado mecánico TKL con switches Outemu Blue y retroiluminación RGB.', imagen: 'https://picsum.photos/seed/keyboard/600/400' },
  { id: 6, codigo: 'MS-006', nombre: 'Mouse Logitech G203', precio: 34999, stock: 55, categoria: 'Periféricos', descripcion: 'Mouse gamer con sensor de 8000 DPI e iluminación LIGHTSYNC RGB.', imagen: 'https://picsum.photos/seed/mouse/600/400' },
  { id: 7, codigo: 'TB-007', nombre: 'Tablet Xiaomi Pad 6', precio: 499999, stock: 5, categoria: 'Tablets', descripcion: 'Pantalla de 11" a 144 Hz, Snapdragon 870 y 8 GB de RAM.', imagen: 'https://picsum.photos/seed/tablet/600/400' },
  { id: 8, codigo: 'SW-008', nombre: 'Smartwatch Amazfit Bip 5', precio: 119999, stock: 18, categoria: 'Wearables', descripcion: 'Reloj inteligente con GPS, pantalla de 1.91" y más de 120 modos deportivos.', imagen: 'https://picsum.photos/seed/watch/600/400' },
]

export default products

export const formatPrice = (value) =>
  value.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 })
