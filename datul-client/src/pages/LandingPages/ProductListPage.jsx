import Button from '../../components/Button.jsx';
import ProductList from '../../components/ProductList.jsx';
import products from '../../assets/product-content.js';

const ProductListPage = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <section className="border-y-2 border-yellow-400 bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
            Our Collection
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-blue-950 sm:text-5xl">
            Premium Musical Instruments & Accessories
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-blue-700 sm:text-lg">
            Discover high-quality products designed for musicians of all levels. From beginners to professionals, we have everything you need.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/">← Back Home</Button>
            <Button to="/about" variant="primary">Learn More</Button>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
              Available Products
            </p>
            <h2 className="mt-3 text-3xl font-bold text-blue-950">Browse Our Selection</h2>
            <p className="mt-2 text-sm text-blue-700">Choose from {products.length} carefully curated products</p>
          </div>

          <ProductList products={products} />
        </div>
      </section>
    </div>
  );
}

export default ProductListPage
