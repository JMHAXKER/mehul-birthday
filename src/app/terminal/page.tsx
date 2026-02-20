'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

const terminalLines = [
  { text: '> Initializing secure connection...', type: 'system' },
  { text: '> Connection established.', type: 'success' },
  { text: '', type: 'empty' },
  { text: '> Authenticating credentials...', type: 'system' },
  { text: '> Access Granted...', type: 'success' },
  { text: '', type: 'empty' },
  { text: '> Subject: Mehul', type: 'data' },
  { text: '> Birth Year: 2007 Verified', type: 'data' },
  { text: '> Upgrade Complete: Version 19', type: 'highlight' },
  { text: '> Companion File: R-01 Detected', type: 'highlight' },
  { text: '', type: 'empty' },
  { text: '> Status: ACTIVE', type: 'success' },
  { text: '> Loyalty Protocol: ENABLED', type: 'success' },
  { text: '', type: 'empty' },
  { text: '> Loading personal dossier...', type: 'system' },
]

export default function TerminalPage() {
  const router = useRouter()
  const [displayedLines, setDisplayedLines] = useState<typeof terminalLines>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (currentIndex < terminalLines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, terminalLines[currentIndex]])
        setCurrentIndex(prev => prev + 1)
      }, currentIndex === 0 ? 500 : 200)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        router.push('/dossier')
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, terminalLines.length, router])

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden bg-[#0a0a0a]">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(#00ff00 1px, transparent 1px), linear-gradient(90deg, #00ff00 1px, transparent 1px)', 
          backgroundSize: '50px 50px' 
        }} 
      />
      
      {/* Scanline effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ 
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.1) 2px, rgba(0,255,0,0.1) 4px)' 
        }} 
      />
      
      {/* Glow effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 200px rgba(0, 255, 0, 0.03)' }} 
      />
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-8">
        <motion.div 
          className="w-full max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#00ff00]/20 bg-[#0f0f0f]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-4 text-[#00ff00]/50 text-xs font-mono tracking-wider">
              secure_terminal_v19.0 — mehul_archive
            </span>
          </div>
          
          {/* Terminal Body */}
          <div className="bg-[#0a0a0a] border border-[#00ff00]/10 border-t-0 px-4 py-6 min-h-[450px]">
            <div className="font-mono text-sm md:text-base leading-relaxed">
              <AnimatePresence>
                {displayedLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15 }}
                    className={`${
                      line.type === 'highlight' 
                        ? 'text-[#00ff00] font-bold' 
                        : line.type === 'success' 
                        ? 'text-[#00ff00]/90' 
                        : line.type === 'data' 
                        ? 'text-[#00ff00]/80' 
                        : 'text-[#00ff00]/60'
                    }`}
                  >
                    {line.text || '\u00A0'}
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {/* Cursor */}
              {currentIndex < terminalLines.length && (
                <span 
                  className={`inline-block w-2 h-5 bg-[#00ff00] ml-1 align-middle ${
                    showCursor ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              )}
              
              {/* Redirect message */}
              {currentIndex >= terminalLines.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-[#00ff00]/50 mt-4"
                >
                  {'>'} Access complete. Redirecting to dossier...
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <div className="relative z-10 py-4 text-center">
        <p className="text-xs text-[#00ff00]/30 font-mono tracking-wider">
          ARCHIVE SYSTEM • SECURE CONNECTION
        </p>
      </div>
    </main>
  )
}
