import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthProvider";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({});
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(`https://organization-manager-server.onrender.com/users/${user.email}`)
      .then((data) => setUserInfo(data.data[0]));
  }, [user.email]);
  return (
    <div className="flex justify-center m-3">
      <div className="rounded-3xl overflow-hidden  shadow-2xl w-2/3  my-15 ">
        <img src="https://i.ibb.co/NFWqVcK/Frame-1171275325.png" className="w-full h-40" alt="" />
        <div className="flex justify-center -mt-32">
          <img
            src={ user.photoURL }
            className="rounded-full w-48 border-red-3 h-48 -mt-3"
            alt=""
          />
        </div>
        <div className="text-right">
          <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Edit</button>

        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Full Name:
              </th>

              <td className="px-8 py-4"> { user?.displayName }</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Email:
              </th>

              <td className="px-8 py-4">{ user?.email }</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Mobile No:
              </th>

              <td className="px-8 py-4">{ userInfo?.phone ? userInfo.phone : "N/A" }</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Foundation
              </th>

              <td className="px-8 py-4">
                { userInfo?.organization }
              </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Position
              </th>

              <td className="px-8 py-4">
                { userInfo?.position }
              </td>
            </tr>
          </tbody>
        </table>

        <p className="text-center m-2 text-green-800">
          Copyright (c), Organization manager
        </p>

      </div>
    </div>
  );
};

export default Profile;