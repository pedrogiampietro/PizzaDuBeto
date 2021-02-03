import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../Layout/Nav'
import EmptyCart from '../../assets/images/empty-cart.png'
import CartBlack from '../../assets/images/cart-black.png'
import Pizza from '../../assets/images/pizza.png'

const Cart = () => {
  return (
    <>
      <NavBar />
      <section className="cart py-16">
        <div className="order container mx-auto w-1/2">
          <div className="flex items-center border-b border-gray-300 pb-4">
            <img src={CartBlack} alt="CartBlack" />
            <h1 className="font-bold ml-4 text-2xl">Resumo do Pedido</h1>
          </div>
          {[1, 2, 3].map((p) => (
            <div className="pizza-list">
              <div className="flex items-center my-8">
                <img className="w-24" src={Pizza} alt="Pizza" />
                <div className="flex-1 ml-4">
                  <h1>Calabresa</h1>
                  <span>Média</span>
                </div>
                <span className="flex-1">1 Unidade</span>
                <span className="font-bold text-lg">R$ 34,00</span>
              </div>
            </div>
          ))}
          <hr />
          <div className="text-right py-4">
            <div>
              <span className="text-lg font-bold">Total:</span>
              <span className="amount text-2xl font-bold ml-2">R$ 36,70</span>
            </div>
            <div>
              <form action="" className="mt-12">
                <input
                  className="border border-gray-400 p-2 w-1/2"
                  type="text"
                  placeholder="Número de Telefone"
                />
                <input
                  className="border border-gray-400 p-2 w-1/2 mb-4"
                  type="text"
                  placeholder="Endereço"
                />
                <div>
                  {/* <button
                    className="btn-primary px-6 py-2 rounded-full text-white font-bold mt-6"
                    type="submit"
                  >
                    Comprar Agora
                  </button> */}
                </div>
              </form>
            </div>
            <Link
              to="#"
              className="inline-block cursor-pointer px-6 btn-primary px-6 py-2 rounded-full text-white font-bold mt-6"
            >
              Faça Login para Continuar
            </Link>
          </div>
        </div>
      </section>
      {/* <section className="cart">
        <div className="empty-cart py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold mb-2">Cart Empty 😕</h1>
            <p className="text-gray-500 text-lg mb-12">
              Você provavelmente ainda não pediu uma pizza. Para pedir uma
              pizza,
              <br />
              vá para a página principal.
            </p>
            <img className="w-2/5 mx-auto" src={EmptyCart} alt="EmptyCart" />
            <Link
              to="/"
              className="inline-block px-6 py-2 rounded-full btn-primary text-white font-bold mt-12"
            >
              Go Back
            </Link>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default Cart
