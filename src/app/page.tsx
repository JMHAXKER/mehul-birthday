'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Sparkles, PartyPopper } from 'lucide-react'
import { useState, useEffect, useMemo } from 'react'

export default function LandingPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Soft pastel gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f0eb] via-[#e8e4df] to-[#d4e5ed]" />
      
      {/* Celebration Particles */}
      <CelebrationParticles />
      
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-[#e6d5c3]/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#c9d6e3]/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-[#d8c8e0]/30 rounded-full blur-2xl" />
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-16">
        <motion.div 
          className="text-center max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {/* Celebration Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <motion.div
              animate={{ rotate: [-10, 10, -10] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#f0d0a0] to-[#d4a574] flex items-center justify-center shadow-lg"
            >
              <PartyPopper className="w-6 h-6 text-white" />
            </motion.div>
            <Sparkles className="w-5 h-5 text-[#c4b5a0]" />
            <motion.div
              animate={{ rotate: [10, -10, 10] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#c9d6e3] to-[#a8b8c8] flex items-center justify-center shadow-lg"
            >
              <PartyPopper className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#e6ddd3] text-xs tracking-[0.3em] uppercase text-[#8b7355] font-medium font-[family-name:var(--font-inter)]">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Personal Archive
            </span>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-light text-[#3d3d3d] mb-4 tracking-wide font-[family-name:var(--font-playfair)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Mehul
          </motion.h1>
          
          {/* Divider */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="h-px w-12 bg-[#c4b5a0]" />
            <span className="text-sm text-[#6b6b6b] font-light tracking-wide font-[family-name:var(--font-inter)]">
              Version 19 Activated
            </span>
            <div className="h-px w-12 bg-[#c4b5a0]" />
          </motion.div>
          
          {/* Birthday Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9, type: 'spring' }}
            className="mb-4"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#e6ddd3] shadow-lg">
              <span className="text-2xl">🎂</span>
              <span className="text-base md:text-lg text-[#8b7355] font-medium tracking-wide font-[family-name:var(--font-playfair)]">
                Happy Birthday!
              </span>
              <span className="text-2xl">🎉</span>
            </div>
          </motion.div>
          
          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-[#5a5a5a] font-light mb-12 tracking-wide font-[family-name:var(--font-inter)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Built different. Still loyal.
          </motion.p>
          
          {/* CTA Button */}
          <motion.button
            onClick={() => router.push('/classified')}
            className="px-10 py-4 border border-[#c4b5a0] text-[#5a5a5a] text-sm tracking-[0.2em] uppercase 
                       hover:bg-[#c4b5a0]/10 transition-all duration-500
                       font-[family-name:var(--font-inter)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Enter Secure System
          </motion.button>
        </motion.div>
      </div>
      
      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="relative z-10 py-6 text-center"
      >
        <p className="text-xs text-[#9a9a9a] tracking-widest uppercase font-[family-name:var(--font-inter)]">
          Archive System • 2026
        </p>
      </motion.div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#e8e4df] to-transparent pointer-events-none" />
    </main>
  )
}

// Celebration Particles Component - Fixed for SSR
function CelebrationParticles() {
  const [mounted, setMounted] = useState(false)
  
  const particles = useMemo(() => {
    if (!mounted) return []
    
    return Array.from({ length: 50 }).map((_, i) => {
      const particleTypes = [
        { shape: 'circle', colors: ['#f0d0a0', '#e8c090', '#d4a574'] },
        { shape: 'square', colors: ['#c9d6e3', '#b8c8d8', '#a8b8c8'] },
        { shape: 'star', colors: ['#d8c8e0', '#c8b8d0', '#b8a8c0'] },
      ]
      
      const style = particleTypes[i % 3]
      const color = style.colors[i % 3]
      const size = 4 + (i % 8)
      
      return {
        id: i,
        style,
        color,
        size,
        startX: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 6,
        xMove: (Math.random() - 0.5) * 200,
        rotateDir: Math.random() > 0.5 ? 1 : -1,
      }
    })
  }, [mounted])
  
  const bursts = useMemo(() => {
    if (!mounted) return []
    
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: 10 + i * 12,
      top: Math.random() * 30,
      color: ['#f0d0a0', '#c9d6e3', '#d8c8e0', '#e8c090'][i % 4],
      round: Math.random() > 0.5,
    }))
  }, [mounted])
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.startX}%`,
            top: -20,
            width: p.size,
            height: p.size,
            borderRadius: p.style.shape === 'circle' ? '50%' : p.style.shape === 'star' ? '0' : '3px',
            backgroundColor: p.style.shape !== 'star' ? p.color : 'transparent',
            transform: p.style.shape === 'star' ? 'rotate(45deg)' : 'none',
          }}
          animate={{
            y: [0, typeof window !== 'undefined' ? window.innerHeight + 50 : 800],
            x: [0, p.xMove],
            rotate: [0, 360 * p.rotateDir],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
            times: [0, 0.1, 0.8, 1],
          }}
        >
          {p.style.shape === 'star' && (
            <div
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              }}
            />
          )}
        </motion.div>
      ))}
      
      {/* Confetti bursts */}
      {bursts.map((b) => (
        <motion.div
          key={`burst-${b.id}`}
          className="absolute w-2 h-2"
          style={{
            left: `${b.left}%`,
            top: `${b.top}%`,
            backgroundColor: b.color,
            borderRadius: b.round ? '50%' : '3px',
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: b.id * 0.8,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  )
}
