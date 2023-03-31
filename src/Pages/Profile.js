import { faHandsPraying } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactLoading from 'react-loading';
import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Profile = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
<Header/>
{loading ? (
        <div className="flex justify-center bg-profile items-center h-screen bg-profile">
          <ReactLoading type="bars" color="white" />
        </div>
      ) : ( 
<section class="py-20">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6 flex justify-between items-center">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Profile Information
          </h3>
          <button class="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
            Edit
          </button>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Full name
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Ahmad Khairul Zahid
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Ahmadkhairulzahid@gmail.com
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Phone number
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                +62 9991-9888-7654
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Address
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Bekasi, sukaragam, Indonesia
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</section>
    )}
<Footer/>
    </>
  )
}

export default Profile