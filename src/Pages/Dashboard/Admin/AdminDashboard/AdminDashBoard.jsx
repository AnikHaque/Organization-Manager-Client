import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PayMethodModal from '../../Member/PayMethodModal'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'
import ConfirmationModal from '../../LoanApply/ConfirmationModal'
import ReminderModal from '../../ReminderModal/ReminderModal'

const AdminDashboard = () => {
  const [modal,setModal] = useState(false)
  
  const sendEmail = () => {
    const templateParams = {
      to_name: 'Dibbo Dash',
      subject: 'Due Payment Remainder!',
      message: 'Please pay your due with according to table information:',
      email: 'mdabdurrouf.likhon2@gmail.com',
      foundation_name: 'Ikhlab Foundation',
    }

    emailjs
      .send(
        'service_55ozcrd',
        'template_e21lzan',
        templateParams,
        'VLd32F4SLKnPSZxsK',
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text)
          toast.success('Remainder Send')
        },
        function (error) {
          console.log('FAILED...', error)
        },
      )
  }

  const handlePayment = () => {
    console.log('click')

    const paymentInfo = {
      amount: '10000',
      userName: 'Likhon',
      userEmail: 'mdabdurrouf.likhon@mail.com',
      phone: '01743586381',
    }
    fetch('https://organization-manager-server.onrender.com/due-payment', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(paymentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(data.url)
      })
  }
  return (
    <div>
  
      <div className="bg-[url('https://i.ibb.co/NFWqVcK/Frame-1171275325.png')] bg-cover grid grid-cols-1 lg:grid-cols-3">
        <div className="text-center  flex-col lg:border-r border-b just-2y-center p-5 items-center ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1490/1490860.png"
            width="70px"
            className="mx-auto"
            alt=""
          />
          <p className="text-xl text-white py-2">Total Collected Amount</p>
          <Link to="/dashboard">
            <button
              data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal"
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              10000 BDT
            </button>
          </Link>
        </div>
        <div className="text-center  flex-col lg:border-r border-b just-2y-center p-5 items-center ">
          <img
            src="https://png.pngtree.com/png-vector/20190418/ourmid/pngtree-vector-money-saving-icon-png-image_952822.jpg"
            width="70px"
            className=" mx-auto"
            alt=""
          />
          <p className="text-xl text-white py-2">Total Due</p>
          <button
            data-modal-target="popup-modal"
            data-modal-toggle="popup-modal"
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            1000 BDT
          </button>
        </div>
        <div className="text-center  flex-col border-r justify-center p-5  items-center ">
          <img
            src="https://www.kindpng.com/picc/m/651-6518955_communityimg-team-members-icon-png-transparent-png.png"
            width="70px"
            className="mx-auto"
            alt=""
          />
          <p className="text-xl text-white py-2">Total Members</p>
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            100
          </button>
        </div>
      </div>
     
      <div className="m-5 relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="lg:m-2 flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
          <p>Donation History</p>
          <div className="flex justify-between items-center">
            <p className="mx-2 text-black">Show</p>
            <button
              id="dropdownActionButton"
              data-dropdown-toggle="dropdownAction"
              className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
            >
              <span className="sr-only text-black">Action button</span>
              10
              <svg
                className="w-3 h-3 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            <div
              id="dropdownAction"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownActionButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Reward
                  </a>
                </li>
              </ul>
            </div>
            <p className="mx-2 text-black">List</p>
          </div>
        </div>
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-[#D7E9E7] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Member Name
              </th>
              <th scope="col" className="px-6 py-3">
                Mobile Number
              </th>
              <th scope="col" className="px-6 py-3">
                Total Due
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className=" px-6 py-6 text-center text-gray-900 whitespace-nowrap dark:text-white"
              >
                Emeka Warhouse
              </th>

              <td className="px-6  text-green-500">01743586381</td>
              <td className="px-6  text-[red]">1000 Tk</td>
              <td className="px-6 ">
              <button type="button" onClick={() => sendEmail()} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Send Remainder</button>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className=" px-6 py-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                Emeka Warhouse
              </th>

              <td className="px-6  text-green-500">01743586381</td>
              <td className="px-6  text-[red]">1000 Tk</td>
              <td className="px-6 ">
              <button type="button" onClick={() => sendEmail()} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Send Remainder</button>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className=" px-6 py-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                Emeka Warhouse
              </th>

              <td className="px-6  text-green-500">01743586381</td>
              <td className="px-6  text-[red]">1000 Tk</td>
              <td className="px-6 ">
                <button  onClick={() => setModal(true)}
                  type="button" 
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  send sucessfully
                </button>
                {modal && <ReminderModal setModal={setModal} modal={modal}></ReminderModal>}
              </td>
            </tr>
            <tr className="bg-white openModalBtn border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className=" px-6 py-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                Emeka Warhouse
              </th>

              <td className="px-6  text-green-500">01743586381</td>
              <td className="px-6  text-[red]">1000 Tk</td>
              <td className="px-6 ">
              <button type="button" onClick={() => sendEmail()} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Send Remainder</button>

              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className=" px-6 py-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                Emeka Warhouse
              </th>

              <td className="px-6  text-green-500">01743586381</td>
              <td className="px-6  text-[red]">1000 Tk</td>
              <td className="px-6 ">
              <button type="button" onClick={() => sendEmail()} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Send Remainder</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center  mx-5">
        <span className="text-sm text-gray-700 dark:text-gray-400 hidden lg:block">
          Showing{' '}
          <span className="font-semibold text-gray-900 dark:text-white">1</span> -{' '}
          <span className="font-semibold text-gray-900 dark:text-white">30</span> of
          List
        </span>
        <nav aria-label="Page navigation sm:mt-5 example">
          <ul className="inline-flex -space-x-px">
            <li>
              <a
                href="#"
                className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
    </div>
  )
}

export default AdminDashboard
