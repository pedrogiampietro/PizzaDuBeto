import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuList, addNewProduct } from '../../actions/MenuActions';
import { getAvatarUrl } from '../../helpers/Api';
import { formatBRL } from '../../helpers/Utils/FormatPrice';
import './styles.css';

const AdminPanel = () => {
  const dispatch = useDispatch();
  const { menu } = useSelector((state) => state.menu);
  const [menuList, setMenuList] = React.useState('');
  const [image, setImage] = React.useState('');
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState(0);
  const [size, setSize] = React.useState('');
  const [type, setType] = React.useState('CM');
  const [category, setCategory] = React.useState('Massas');
  const [imagePreview, setImagePreview] = React.useState('');

  React.useEffect(() => {
    dispatch(getMenuList()).then(({ payload }) => {
      const newData = payload.data.data;
      setMenuList(newData);
    });
  }, [dispatch]);

  function handleSelectImages(event) {
    if (!event.target.files) {
      return;
    }

    const selectedImage = event.target.files[0];
    setImage(selectedImage);
    const preview = URL.createObjectURL(selectedImage);
    setImagePreview(preview);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('size', size);
    formData.append('type', type);
    formData.append('category', category);
    formData.append('image', image);

    console.log(formData);

    addNewProduct(formData);
  }

  return (
    <>
      <nav id="header" className="bg-white fixed w-full z-10 top-0 shadow">
        <div className="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">
          <div className="w-1/2 pl-2 md:pl-0">
            <Link
              className="text-gray-900 text-base xl:text-xl no-underline hover:no-underline font-bold"
              to="#"
            >
              <i className="fas fa-sun text-pink-600 pr-3" /> Admin Day Mode
            </Link>
          </div>
          <div className="w-1/2 pr-0">
            <div className="flex relative inline-block float-right">
              <div className="relative text-sm">
                <button
                  id="userButton"
                  className="flex items-center focus:outline-none mr-3"
                >
                  <img
                    className="w-8 h-8 rounded-full mr-4"
                    src="http://i.pravatar.cc/300"
                    alt="Avatar of User"
                  />{' '}
                  <span className="hidden md:inline-block">Hi, User </span>
                  <svg
                    className="pl-2 h-2"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 129 129"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    enableBackground="new 0 0 129 129"
                  >
                    <g>
                      <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
                    </g>
                  </svg>
                </button>
                <div
                  id="userMenu"
                  className="bg-white rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 invisible"
                >
                  <ul className="list-reset">
                    <li>
                      <Link
                        to="#"
                        className="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline"
                      >
                        My account
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline"
                      >
                        Notifications
                      </Link>
                    </li>
                    <li>
                      <hr className="border-t mx-2 border-gray-400" />
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="block lg:hidden pr-4">
                <button
                  id="nav-toggle"
                  className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-teal-500 appearance-none focus:outline-none"
                >
                  <svg
                    className="fill-current h-3 w-3"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white z-20"
            id="nav-content"
          >
            <ul className="list-reset lg:flex flex-1 items-center px-4 md:px-0">
              <li className="mr-6 my-2 md:my-0">
                <Link
                  to="#"
                  className="block py-1 md:py-3 pl-1 align-middle text-pink-600 no-underline hover:text-gray-900 border-b-2 border-orange-600 hover:border-orange-600"
                >
                  <i className="fas fa-home fa-fw mr-3 text-pink-600" />
                  <span className="pb-1 md:pb-0 text-sm">Home</span>
                </Link>
              </li>
              <li className="mr-6 my-2 md:my-0">
                <Link
                  to="#"
                  className="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-pink-500"
                >
                  <i className="fas fa-tasks fa-fw mr-3" />
                  <span className="pb-1 md:pb-0 text-sm">Tasks</span>
                </Link>
              </li>
              <li className="mr-6 my-2 md:my-0">
                <Link
                  to="#"
                  className="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-purple-500"
                >
                  <i className="fa fa-envelope fa-fw mr-3" />
                  <span className="pb-1 md:pb-0 text-sm">Messages</span>
                </Link>
              </li>
              <li className="mr-6 my-2 md:my-0">
                <Link
                  to="#"
                  className="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-green-500"
                >
                  <i className="fas fa-chart-area fa-fw mr-3" />
                  <span className="pb-1 md:pb-0 text-sm">Analytics</span>
                </Link>
              </li>
              <li className="mr-6 my-2 md:my-0">
                <Link
                  to="#"
                  className="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white"
                >
                  <i className="fa fa-wallet fa-fw mr-3" />
                  <span className="pb-1 md:pb-0 text-sm">Payments</span>
                </Link>
              </li>
            </ul>
            <div className="relative pull-right pl-4 pr-4 md:pr-0">
              <input
                type="search"
                placeholder="Search"
                className="w-full bg-gray-100 text-sm text-gray-800 transition border focus:outline-none focus:border-gray-700 rounded py-1 px-2 pl-10 appearance-none leading-normal"
              />
              <div
                className="absolute search-icon"
                style={{ top: '0.375rem', left: '1.75rem' }}
              >
                <svg
                  className="fill-current pointer-events-none text-gray-800 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/*Container*/}
      <div className="container w-full mx-auto pt-20">
        <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
          {/*Console Content*/}
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 xl:w-1/3 p-3">
              {/*Metric Card*/}
              <div className="bg-white border rounded shadow p-2">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded p-3 bg-green-600">
                      <i className="fa fa-wallet fa-2x fa-fw fa-inverse" />
                    </div>
                  </div>
                  <div className="flex-1 text-right md:text-center">
                    <h5 className="font-bold uppercase text-gray-500">
                      Total Revenue
                    </h5>
                    <h3 className="font-bold text-3xl">
                      $3249{' '}
                      <span className="text-green-500">
                        <i className="fas fa-caret-up" />
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
              {/*/Metric Card*/}
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-3">
              {/*Metric Card*/}
              <div className="bg-white border rounded shadow p-2">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded p-3 bg-pink-600">
                      <i className="fas fa-users fa-2x fa-fw fa-inverse" />
                    </div>
                  </div>
                  <div className="flex-1 text-right md:text-center">
                    <h5 className="font-bold uppercase text-gray-500">
                      Total Users
                    </h5>
                    <h3 className="font-bold text-3xl">
                      249{' '}
                      <span className="text-pink-500">
                        <i className="fas fa-exchange-alt" />
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
              {/*/Metric Card*/}
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-3">
              {/*Metric Card*/}
              <div className="bg-white border rounded shadow p-2">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded p-3 bg-yellow-600">
                      <i className="fas fa-user-plus fa-2x fa-fw fa-inverse" />
                    </div>
                  </div>
                  <div className="flex-1 text-right md:text-center">
                    <h5 className="font-bold uppercase text-gray-500">
                      New Users
                    </h5>
                    <h3 className="font-bold text-3xl">
                      2{' '}
                      <span className="text-yellow-600">
                        <i className="fas fa-caret-up" />
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
              {/*/Metric Card*/}
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-3">
              {/*Metric Card*/}
              <div className="bg-white border rounded shadow p-2">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded p-3 bg-blue-600">
                      <i className="fas fa-server fa-2x fa-fw fa-inverse" />
                    </div>
                  </div>
                  <div className="flex-1 text-right md:text-center">
                    <h5 className="font-bold uppercase text-gray-500">
                      Server Uptime
                    </h5>
                    <h3 className="font-bold text-3xl">152 days</h3>
                  </div>
                </div>
              </div>
              {/*/Metric Card*/}
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-3">
              {/*Metric Card*/}
              <div className="bg-white border rounded shadow p-2">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded p-3 bg-indigo-600">
                      <i className="fas fa-tasks fa-2x fa-fw fa-inverse" />
                    </div>
                  </div>
                  <div className="flex-1 text-right md:text-center">
                    <h5 className="font-bold uppercase text-gray-500">
                      To Do List
                    </h5>
                    <h3 className="font-bold text-3xl">7 tasks</h3>
                  </div>
                </div>
              </div>
              {/*/Metric Card*/}
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-3">
              {/*Metric Card*/}
              <div className="bg-white border rounded shadow p-2">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded p-3 bg-red-600">
                      <i className="fas fa-inbox fa-2x fa-fw fa-inverse" />
                    </div>
                  </div>
                  <div className="flex-1 text-right md:text-center">
                    <h5 className="font-bold uppercase text-gray-500">
                      Issues
                    </h5>
                    <h3 className="font-bold text-3xl">
                      3{' '}
                      <span className="text-red-500">
                        <i className="fas fa-caret-up" />
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
              {/*/Metric Card*/}
            </div>
          </div>
          {/*Divider*/}
          <hr className="border-b-2 border-gray-400 my-8 mx-4" />
          <div className="flex flex-row flex-wrap flex-grow mt-2">
            <div className="w-full md:w-1/2 p-3">
              {/*Graph Card*/}
              <div className="bg-white border rounded shadow">
                <div className="border-b p-3">
                  <h5 className="font-bold uppercase text-gray-600">
                    Adicionar Menu
                  </h5>
                </div>
                <div className="p-5">
                  {/* Adicionar Novo Produto no Menu */}
                  <div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                      <form onSubmit={handleSubmit}>
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div className="grid grid-cols-4 gap-6">
                              <div className="col-span-3 sm:col-span-3">
                                <label
                                  htmlFor="name-product"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Nome do Produto
                                </label>

                                <input
                                  id="name-product"
                                  name="name"
                                  type="text"
                                  required
                                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2"
                                  placeholder="Pizza de Calabresa"
                                  onChange={(event) =>
                                    setName(
                                      event.target.value
                                        .toLowerCase()
                                        .split(' ')
                                        .map(
                                          (word) =>
                                            word.charAt(0).toUpperCase() +
                                            word.slice(1)
                                        )
                                        .join(' ')
                                    )
                                  }
                                />
                              </div>

                              <div className="col-span-1 sm:col-span-3 lg:col-span-1">
                                <label
                                  htmlFor="price"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Preço do Produto
                                </label>
                                <div className="mt-1">
                                  <input
                                    type="text"
                                    name="price"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2"
                                    placeholder="Preço do Produto"
                                    onChange={(e) =>
                                      setPrice(formatBRL(e.target.value))
                                    }
                                    value={price}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-5 gap-12">
                              <div className="col-span-6 sm:col-span-6 lg:col-span-1">
                                <label
                                  htmlFor="size"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Tamanho do Produto
                                </label>
                                <div className="mt-1">
                                  <input
                                    id="size"
                                    name="size"
                                    type="number"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2"
                                    placeholder=""
                                    onChange={(event) =>
                                      setSize(Number(event.target.value))
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-span-6 sm:col-span-12 lg:col-span-1">
                                <label
                                  htmlFor="type"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Tipo do Tamanho
                                </label>

                                <div className="mt-1">
                                  <select
                                    id="type"
                                    name="type"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    onChange={(e) => setType(e.target.value)}
                                  >
                                    <option value="CM">CM</option>
                                    <option value="LT">LT</option>
                                    <option value="ML">ML</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-span-1 sm:col-span-3 lg:col-span-1">
                                <label
                                  htmlFor="category"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Categoria do Produto
                                </label>

                                <div className="mt-1">
                                  <select
                                    id="category"
                                    name="category"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    onChange={(e) =>
                                      setCategory(e.target.value)
                                    }
                                  >
                                    <option value="Massas">Massas</option>
                                    <option value="Bebidas">Bebidas</option>
                                    <option value="Petiscos">Petiscos</option>
                                  </select>
                                </div>
                              </div>{' '}
                            </div>

                            <div className="grid grid-cols-4 gap-6">
                              <div className="col-span-3 sm:col-span-3">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700">
                                    Sua melhor foto do produto!
                                  </label>
                                  <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                      <div className="flex text-sm text-gray-600">
                                        <label
                                          htmlFor="image-upload"
                                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                        >
                                          <span>Upload a file</span>
                                          <input
                                            id="image-upload"
                                            name="image"
                                            type="file"
                                            accept="image/*"
                                            className="sr-only"
                                            onChange={handleSelectImages}
                                          />
                                        </label>
                                      </div>
                                      <p className="text-xs text-gray-500">
                                        PNG, JPG, GIF up to 10MB
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-span-1 sm:col-span-3 lg:col-span-1">
                                <label
                                  htmlFor="price"
                                  className="block text-sm font-medium text-gray-700"
                                ></label>
                                <img src={imagePreview} alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                              type="submit"
                              className="btn-primary inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Cadastrar Produto
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/*/Graph Card*/}
            </div>
            <div className="w-full md:w-1/2 p-3">
              {/*Graph Card*/}
              <div className="bg-white border rounded shadow">
                <div className="border-b p-3">
                  <h5 className="font-bold uppercase text-gray-600">
                    Graphics!
                  </h5>
                </div>
                <div className="p-5">aqui vai ficar outros graficos.</div>
              </div>
            </div>

            <div className="w-full md:w-2/2 p-3">
              {/*Graph Card*/}
              <div className="bg-white border rounded shadow">
                <div className="border-b p-3">
                  <h5 className="font-bold uppercase text-gray-600">Menu!</h5>
                </div>
                <div className="p-5">
                  <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Nome do Produto
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Valor R$
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Tamanho
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Categoria
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                  <span className="sr-only">Edit</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {menuList.rows?.map((product) => (
                                <tr key={product.id}>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                      <div className="flex-shrink-0 h-10 w-10">
                                        <img
                                          className="h-10 w-10 rounded-full"
                                          src={getAvatarUrl(product.image)}
                                          alt={product.name}
                                        />
                                      </div>
                                      <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">
                                          {product.name}
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                      {formatBRL(product.price)}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                      (Promoção)
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                      {product.size} CM
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    Massas
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <span className="text-indigo-600 hover:text-indigo-900">
                                      Edit
                                    </span>
                                  </td>
                                </tr>
                              ))}
                              {/* More items... */}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/Graph Card*/}
            </div>
          </div>
          {/*/ Console Content*/}
        </div>
      </div>
      {/*/container*/}
      <footer className="bg-white border-t border-gray-400 shadow">
        <div className="container max-w-md mx-auto flex py-8">
          <div className="w-full mx-auto flex flex-wrap">
            <div className="flex w-full md:w-1/2 ">
              <div className="px-8">
                <h3 className="font-bold font-bold text-gray-900">About</h3>
                <p className="py-4 text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas vel mi ut felis tempus commodo nec id erat.
                  Suspendisse consectetur dapibus velit ut lacinia.
                </p>
              </div>
            </div>
            <div className="flex w-full md:w-1/2">
              <div className="px-8">
                <h3 className="font-bold font-bold text-gray-900">Social</h3>
                <ul className="list-reset items-center text-sm pt-3">
                  <li>
                    <Link
                      className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                      to="#"
                    >
                      Add social link
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                      to="#"
                    >
                      Add social link
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                      to="#"
                    >
                      Add social link
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AdminPanel;
