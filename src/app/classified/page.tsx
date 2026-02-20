'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Lock, AlertCircle } from 'lucide-react'

export default function ClassifiedPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = () => {
    if (password.toUpperCase() === 'RM-19') {
      router.push('/terminal')
    } else {
      setError(true)
      setAttempts(prev => prev + 1)
      setTimeout(() => {
        setError(false)
        setPassword('')
      }, 800)
    }
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0ebe5] via-[#f5f0eb] to-[#e8e0d8]" />
      
      {/* Subtle accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d4a5a5]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#c9a5a5]/15 rounded-full blur-2xl" />
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6">
        <motion.div 
          className="max-w-md w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#e6ddd3] shadow-lg">
              <Lock className="w-6 h-6 text-[#8b7355]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-[#3d3d3d] tracking-wide mb-3 font-[family-name:var(--font-playfair)]">
              Classified Portal
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-[#c4a5a0]" />
              <span className="text-xs text-[#9a7070] tracking-[0.2em] uppercase font-[family-name:var(--font-inter)]">
                Level 19 Clearance
              </span>
              <div className="h-px w-8 bg-[#c4a5a0]" />
            </div>
          </motion.div>
          
          {/* Instructions Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 mb-6 border border-[#e6ddd3] shadow-xl"
          >
            <p className="text-sm text-[#6b6b6b] mb-1 text-center font-[family-name:var(--font-inter)]">Authorization Required</p>
            <p className="text-xs text-[#9a9a9a] italic text-center font-[family-name:var(--font-inter)]">
              Hint: Initials + Version Number
            </p>
          </motion.div>
          
          {/* Input Form */}
          <motion.div
            className={`transition-transform ${error ? 'animate-shake' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <input
              ref={inputRef}
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder="Enter Code"
              className={`w-full px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border-2 
                         ${error ? 'border-[#c47070]' : 'border-[#e6ddd3]'} 
                         text-center text-lg tracking-[0.3em] uppercase text-[#3d3d3d]
                         placeholder:text-[#b5b5b5] placeholder:tracking-widest placeholder:text-sm
                         focus:outline-none focus:border-[#8b7355] transition-colors
                         font-[family-name:var(--font-inter)]`}
            />
            
            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-2 mt-3 text-[#c47070]"
              >
                <AlertCircle className="w-4 h-4" />
                <span className="text-sm font-[family-name:var(--font-inter)]">Access Denied</span>
              </motion.div>
            )}
          </motion.div>
          
          {/* Submit Button */}
          <motion.button
            onClick={handleSubmit}
            className="w-full mt-6 px-8 py-4 border border-[#c4a5a0] text-[#5a5a5a] text-sm tracking-[0.2em] uppercase
                       hover:bg-[#c4a5a0]/10 transition-all duration-300
                       font-[family-name:var(--font-inter)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            Verify Identity
          </motion.button>
          
          {/* Extra Hint */}
          {attempts >= 3 && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-center text-sm text-[#9a9a9a] font-[family-name:var(--font-inter)]"
            >
              💡 R_ _ _ _ i + M_ _ _ l = RM-19
            </motion.p>
          )}
        </motion.div>
      </div>
      
      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 py-6 text-center"
      >
        <p className="text-xs text-[#9a9a9a] tracking-widest uppercase font-[family-name:var(--font-inter)]">
          Secure Access Only
        </p>
      </motion.div>
      
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-10px); }
          40% { transform: translateX(10px); }
          60% { transform: translateX(-10px); }
          80% { transform: translateX(10px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </main>
  )
}
