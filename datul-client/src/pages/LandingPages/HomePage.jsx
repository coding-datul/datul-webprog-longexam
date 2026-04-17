import Button from '../../components/Button';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-8">
            {/* Hero Section */}
            <section className="relative min-h-[32rem] overflow-hidden border-y-2 border-yellow-400 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 px-4 py-16 sm:px-6 lg:px-8">
                <img
                    src={banner}
                    alt="NU Band Store"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 via-blue-900/60 to-transparent" />

                <div className="relative z-10 flex min-h-[26rem] items-center justify-start sm:min-h-[28rem]">
                    <div className="max-w-2xl">
                        <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.32em] text-yellow-300">
                             Premium Selection
                        </p>
                        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                            Welcome to NU Band Store
                        </h1>
                        <p className="mt-6 max-w-lg text-lg leading-8 text-blue-100 sm:text-xl">
                            Discover premium musical instruments and professional accessories for musicians of all levels.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Button to="/products" variant="primary" className="text-base">
                                 Shop Now
                            </Button>
                            <Button to="/about" className="text-base">
                                Learn More →
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="px-4 py-10 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="group rounded-2xl border-2 border-yellow-300 bg-white p-6 hover:shadow-lg hover:bg-blue-50 transition">
                            <p className="text-4xl font-bold text-blue-700">08</p>
                            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-900">
                                Premium Products
                            </p>
                            <p className="mt-2 text-xs text-blue-600">Curated selection for you</p>
                        </div>
                        <div className="group rounded-2xl border-2 border-yellow-300 bg-white p-6 hover:shadow-lg hover:bg-blue-50 transition">
                            <p className="text-4xl font-bold text-blue-700">3+</p>
                            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-900">
                                Product Categories
                            </p>
                            <p className="mt-2 text-xs text-blue-600">Instruments & Accessories</p>
                        </div>
                        <div className="group rounded-2xl border-2 border-yellow-300 bg-white p-6 hover:shadow-lg hover:bg-blue-50 transition">
                            <p className="text-4xl font-bold text-blue-700"></p>
                            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-900">
                                Top Quality
                            </p>
                            <p className="mt-2 text-xs text-blue-600">Professional grade items</p>
                        </div>
                        <div className="group rounded-2xl border-2 border-yellow-300 bg-white p-6 hover:shadow-lg hover:bg-blue-50 transition">
                            <p className="text-4xl font-bold text-blue-700"></p>
                            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-900">
                                Fast Pickup
                            </p>
                            <p className="mt-2 text-xs text-blue-600">Campus delivery available</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="border-y-2 border-yellow-400 bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                            Shop By Category
                        </p>
                        <h2 className="mt-3 text-3xl font-bold text-blue-950">Explore Our Collections</h2>
                        <p className="mt-3 max-w-xl text-base text-blue-700">Find exactly what you're looking for in our organized product categories</p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">
                        <article className="group rounded-2xl border-2 border-blue-200 bg-blue-50 p-5 hover:shadow-lg hover:bg-white transition">
                            <div className="flex aspect-4/3 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-100 to-yellow-50 border border-yellow-300 font-bold text-2xl">
                                🎺
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-blue-950">Instruments</h3>
                            <p className="mt-2 text-sm leading-6 text-blue-700">
                                Professional saxophones, clarinets, flutes and more for all skill levels.
                            </p>
                            <Button to="/products" className="mt-4 w-full">View Instruments</Button>
                        </article>

                        <article className="group rounded-2xl border-2 border-blue-200 bg-blue-50 p-5 hover:shadow-lg hover:bg-white transition">
                            <div className="flex aspect-4/3 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-300 font-bold text-2xl">
                                🎖️
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-blue-950">Accessories</h3>
                            <p className="mt-2 text-sm leading-6 text-blue-700">
                                Straps, cases, reeds, cleaning kits and essential accessories for musicians.
                            </p>
                            <Button to="/products" className="mt-4 w-full">View Accessories</Button>
                        </article>

                        <article className="group rounded-2xl border-2 border-blue-200 bg-blue-50 p-5 hover:shadow-lg hover:bg-white transition">
                            <div className="flex aspect-4/3 items-center justify-center rounded-lg bg-gradient-to-br from-green-100 to-green-50 border border-green-300 font-bold text-2xl">
                                🎵
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-blue-950">Care & Maintenance</h3>
                            <p className="mt-2 text-sm leading-6 text-blue-700">
                                Keep your instruments in pristine condition with our care products.
                            </p>
                            <Button to="/products" className="mt-4 w-full">View Care Items</Button>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
