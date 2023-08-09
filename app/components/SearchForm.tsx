'use client'
import React, { useState } from 'react'

export interface UserInfoProps {
	userInfo?: object,
	setUserInfo: (userInfo: object) => void
}

const SearchForm = (props: UserInfoProps) => {
	const { setUserInfo } = props;
	const [userName, setUserName] = useState('')
	const [error, setError] = useState('')



	const addUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserName(e.target.value)
		if (e.target.value === '') setError('')
	}

	const search = async (e: React.SyntheticEvent) => {
		e.preventDefault()

		const res = await fetch(`https://api.github.com/users/${userName}`)
		const data = await res.json()
		if (!data.message) {
			setUserInfo(data)
			setUserName('')
			setError('')
		} else {
			setError(data.message)
			setUserInfo({})
		}





	}
	return (
		<>
			<form onSubmit={e => search(e)}>
				<h1 className='text-center font-bold text-2xl mb-4 text-header'>Search Form</h1>
				<input id="user" type="text" className='outline-none rounded-l-md w-72 h-10 pl-5 '
					placeholder='Please enter user name' value={userName}
					onChange={addUserName} />
				<button className='bg-btn h-10 w-24 rounded-r-md'>Search</button>
			</form>
			<div className='mt-4 self-center text-red-600 text-xl'>{error && userName && `${error} user  ${userName}`}</div>
		</>
	)
}

export default SearchForm