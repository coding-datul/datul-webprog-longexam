import Button from './Button';

const ProductCard = ({ product, index }) => {
  return (
    <article className="group rounded-2xl border-2 border-yellow-300 bg-white p-4 transition hover:shadow-xl hover:border-yellow-400 hover:bg-gradient-to-b hover:from-blue-50 hover:to-blue-100">
      <div className="flex aspect-4/3 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 overflow-hidden border border-blue-200">
        <img 
          src={`/src/assets/img/${product.image}`}
          alt={product.title}
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
            {product.category}
          </p>
          <p className="text-[10px] font-bold text-yellow-500">#{String(index + 1).padStart(2, '0')}</p>
        </div>
        <h3 className="text-base font-bold text-blue-950 line-clamp-2">{product.title}</h3>
        <div className="flex items-baseline gap-2 pt-1">
          <p className="text-lg font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">{product.price}</p>
          <span className="text-[10px] font-semibold uppercase text-blue-900 px-2 py-0.5 bg-blue-100 rounded-full">{product.stock}</span>
        </div>
        <p className="text-xs leading-5 text-blue-700 line-clamp-2">
          {product.content[0].substring(0, 80)}...
        </p>
      </div>
      <Button to={`/products/${product.name}`} className="mt-4 w-full">View Product</Button>
    </article>
  );
};

export default ProductCard;
