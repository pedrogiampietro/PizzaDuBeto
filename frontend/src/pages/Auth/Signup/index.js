import React from 'react'
import { Link } from 'react-router-dom'

import NavBar from '../../Layout/Nav'
import Logo from '../../../assets/images/logo.png'

const SignUp = () => {
  return (
    <>
      <NavBar />
      <section className="login flex justify-center pt-24">
        <div className="w-full max-w-xs">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img className="mx-auto h-12 w-auto" src={Logo} alt="Logo" />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Cadastre-se em nosso site
              </h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Digite seu nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2"
                    placeholder="Digite seu Nome"
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Digite um e-mail
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2"
                    placeholder="Digite seu e-mail"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Sua Senha
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2"
                    placeholder="Digite sua senha"
                  />
                </div>
                <div>
                  <label htmlFor="password_confirmation" className="sr-only">
                    Confirme sua senha
                  </label>
                  <input
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Confirme sua senha"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="btn-primary rounded-full group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    {/* Heroicon name: lock-closed */}
                    <svg
                      className="h-5 w-5 "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp
