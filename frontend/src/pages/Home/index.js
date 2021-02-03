import React from 'react'

import NavBar from '../Layout/Nav'

import Hero from '../../assets/images/hero-pizza.png'
import Pizza from '../../assets/images/pizza.png'

const index = () => {
  return (
    <>
      <NavBar />
      <section className="hero py-16">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-1/2">
            <h6 className="text-lg">
              <em>Você está com fome?</em>
              <h1 className="text-6xl font-bold">Não espere !</h1>
              <button className="px-6 py-2 rounded-full text-white font-bold mt-4 btn-primary">
                Comprar Agora
              </button>
            </h6>
          </div>
          <div className="w-1/2">
            <img src={Hero} alt="Hero Pizza" />
          </div>
        </div>
      </section>
      <section className="menu container mx-auto py-8">
        <h1 className="text-xl font-bold mb-8">Todas Pizzas</h1>
        <div class="grid grid-cols-4 col-gap-12 row-gap-16">
          {[1, 2, 3, 4, 5, 6, 7].map((p) => (
            <div className="w-64" key={p}>
              <img className="h-40 mb-4 mx-auto" src={Pizza} alt="Pizza" />
              <div>
                <h2 className="mb-4 text-lg">Marguerita</h2>
                <span className="size py-1 px-4 rounded-full uppercase">
                  Pequena
                </span>
                <div className="flex items-center justify-around mt-6">
                  <span className="font-bold text-lg">R$ 30,00</span>
                  <button className="add-to-card py-1 px-6 rounded-full flex items-center font-bold">
                    <span>+</span>
                    <span className="ml-4">Adicionar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default index
