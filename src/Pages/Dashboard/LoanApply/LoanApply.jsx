import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router'
import ConfirmationModal from './ConfirmationModal'

const LoanApply = () => {
  const [showModal, setShowModal] = useState(false)
  
  return (
    <div className="">
      <p className="text-2xl text-[#2A9D8F] text-center">
        Apply for an Interest Free Loan
      </p>
      <div className="grid lg:grid-cols-2  grid-cols-1">
        <div className="m-5">
          <p className="text-xl m-3 text-[#54928b]">Duration</p>

          <div className="flex items-center m-4 mb-4">
            <input
              id="default-radio-1"
              type="radio"
              value="3month"
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              3 Months
            </label>
          </div>
          <div className="flex m-4 items-center">
            <input
              id="default-radio-2"
              type="radio"
              value="5"
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              4 Months
            </label>
          </div>
          <div className="flex items-center m-4 mb-4">
            <input
              id="default-radio-1"
              type="radio"
              value="3month"
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              6 Months
            </label>
          </div>
          <div className="flex items-center m-4 mb-4">
            <input
              id="default-radio-1"
              type="radio"
              value="3month"
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              9 Month
            </label>
          </div>

          <div className="m-4 mb-4">
            <p className=" text-[black] my-2">Other</p>
            <input
              type="text"
              className="border-b-2 border-s-0 border-e-0 border-t-0"
            />
          </div>

          <div className="m-4 mb-4">
            <p className=" text-[black] my-2">Select Amount</p>

            <div className="flex items-center border-2">
              <p className=" text-[black] m-3">BDT</p>
              <div
                id="dropdown-states"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="states-button"
                >
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <div className="inline-flex items-center">
                        <svg
                          aria-hidden="true"
                          className="h-3.5 w-3.5 rounded-full mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          id="flag-icon-css-it"
                          viewBox="0 0 512 512"
                        >
                          <g fillRule="evenodd" strokeWidth="1pt">
                            <path fill="#fff" d="M0 0h512v512H0z" />
                            <path fill="#009246" d="M0 0h170.7v512H0z" />
                            <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                          </g>
                        </svg>
                        Italy
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
              <label htmlFor="states" className="sr-only">
                Choose a state
              </label>
              <select
                id="states"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose amount</option>
                <option value="CA">5000</option>
                <option value="TX">10000</option>
                <option value="TX">15000</option>
                <option value="TX">20000</option>
                <option value="WH">25000</option>
              </select>
            </div>
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{' '}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
        </div>
        <div className="text-[orange] m-5">
          <h1 className="text-2xl">*Terms and Conditions for take loan</h1>
          <p className="m-3 ">
            The terms and conditions for an educational loan will vary depending
            on the lender and the specific loan program. However, some common
            things to consider include:
            <ul className="max-w-md space-y-1 my-4 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>At least 10 characters (and up to 100 characters)</li>
              <li>At least one lowercase character</li>
              <li>
                Inclusion of at least one special character, e.g., ! @ # ?
              </li>
              <li>At least 10 characters (and up to 100 characters)</li>
              <li>At least one lowercase character</li>
              <li>
                Inclusion of at least one special character, e.g., ! @ # ?
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="flex mx-5 my-5">
        <button
          onClick={() => setShowModal(true)}
          className="btn bg-[#2A9D8F] hover:bg-[#3d756f] w-1/2 mx-auto p-3 rounded"
        >
          Apply
        </button>
      </div>
      {showModal && (
      <ConfirmationModal showModal={showModal} setShowModal={setShowModal}></ConfirmationModal>
      )}
    </div>
  )
}

export default LoanApply
