'use client'

import { useState } from 'react';
import SearchForm from './components/SearchForm';
import { Info } from './components/Info';

export default function Home() {
  const [userInfo, setUserInfo] = useState({})
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 bg-main">
      <SearchForm setUserInfo={setUserInfo} />
      <Info userInfo={userInfo} />
    </main>
  )
}
