import Head from "next/head";
import CartItem from "../components/CartItem";
import SideCheckOut from "../components/SideCheckOut";
import { useGlobalContext } from "../GlobalContext";

export default function Home() {
  const { cart, amount } = useGlobalContext();
  return (
    <>
      <Head>
        <title>Shopping cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto pt-6  px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex  items-center gap-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Shopping Cart
            </h1>
            <span className="bg-gray-900  px-3 py-1 flex items-center justify-center text-white rounded-full">
              {amount}
            </span>
          </div>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>

              <ul
                role="list"
                className="border-t border-b border-gray-200 divide-y divide-gray-200"
              >
                {cart.length === 0 ? (
                  <h2 className="text-center py-6 text-2xl">Empty Cart</h2>
                ) : (
                  <>
                    {cart.map((product) => (
                      <CartItem key={product.id} product={product} />
                    ))}
                  </>
                )}
              </ul>
            </section>

            <SideCheckOut />
          </form>
        </div>
      </div>
    </>
  );
}
