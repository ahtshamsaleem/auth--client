import React from 'react'

const Alert = ({title, message}) => {
  return (
    <div className="w-full md:w-1/3 mx-auto  ">
  <div className="flex p-5 rounded-lg shadow bg-white ">
	<div>
	  <svg className="w-6 h-6 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"/></svg>
	</div>
	<div className="ml-3">
	  <h2 className="font-semibold text-gray-800">{title}</h2>
	  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{message}</p>
	</div>
  </div>
</div>
  )
}

export default Alert