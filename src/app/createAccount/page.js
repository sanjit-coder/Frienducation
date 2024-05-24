"use client";
import CreateAccount from '@/components/CreateAccount'
import Disclaimer from '@/components/Disclaimer';
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { useState } from 'react'

function page() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  return (
    <div style={{ background: '#192841' }}>
      {showDisclaimer && (
        <Disclaimer onClose={() => setShowDisclaimer(false)} />
      )}
      <Header />
      <CreateAccount />
    </div>
  )
}

export default page