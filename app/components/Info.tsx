import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export interface UserInfoProps {
	[key: string]: any
}

export const Info = (props: UserInfoProps) => {

	const { userInfo } = props;

	const bio: string = userInfo?.bio
	const avatar: string = userInfo?.avatar_url
	const link: string = userInfo?.html_url
	const userName: string = userInfo?.name

	return (
		<>{!Object.hasOwnProperty(userInfo) && <div className='flex flex-col w-96 h-80 gap-y-4 mt-8 justify-start bg-slate-300 rounded-lg'>
			{avatar && <Image src={avatar} width={300} height={300} className=' rounded-full w-32 h-32 self-center mt-4' alt='avatar image' />}
			<div className=' self-center text-lg'>{userName}</div>
			{link && <Link target="_blank" href={link} passHref className='cursor-pointer hover:text-header self-center text-lg' >{link}</Link>}
			<div className='text-center text-lg'>{bio}</div>

		</div>}
		</>


	)
}
