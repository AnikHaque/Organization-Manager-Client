import { useQuery } from '@tanstack/react-query'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../../context/AuthProvider'
import axios from 'axios'

const AllMember = () => {
  const [userInfo, setUserInfo] = useState({})
  const { user } = useContext(AuthContext)
  useEffect(() => {
    axios
      .get(`https://organization-manager-server.onrender.com/users/${user.email}`)
      .then((data) => setUserInfo(data.data[0]))
  }, [user.email])

  console.log(userInfo)
  const { data: members = [], refetch, isLoading } = useQuery({
    queryKey: ['foodItems'],
    queryFn: async () => {
      const res = await fetch('https://organization-manager-server.onrender.com/users')
      const data = await res.json()
      return data
    },
  })

  const organizationMembers = members.filter(member => member.organization === userInfo.organization && member.verified === true)
  return (
    <div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        { organizationMembers.length > 0 ? (
          <thead className="text-xs text-gray-700 uppercase bg-[#D7E9E7] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Member ID
              </th>
              <th scope="col" className="px-6 py-3">
                Photo
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Joining Date
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
        ) : (
          <div className="flex justify-center items-center h-[200px] bg-slate-200">
            No Members Founded Please{ ' ' }
            <Link to="/">
              <span className="underline text-blue-700 ms-2">
                { ' ' }
                Back to Home
              </span>
            </Link>
          </div>
        ) }
        <tbody>
          { organizationMembers &&
            organizationMembers.map((member, i) => (
              <tr
                key={ member._id }
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 ">OM-{ userInfo.organization.slice(0, 1) }F#{ i + 1 }</td>
                <td className="px-6 ">
                  <img
                    src={ member?.photoURL }
                    alt=""
                    width="50px"
                    height=""
                    className="rounded-full w-10 h-10"
                  />
                </td>
                <td
                  scope="row"
                  className="flex items-center px-6 py-6 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  { member?.name }
                </td>
                <td className="px-6 ">{ member?.phone }</td>
                <td className="px-6  text-[orange]">{ member?.joiningDate }</td>
                <td className="px-6 ">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            )) }
        </tbody>
      </table>
    </div>
  )
}

export default AllMember
