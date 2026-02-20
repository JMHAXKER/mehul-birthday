'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Shield, Cake, Sparkles, Volume2, VolumeX, Heart } from 'lucide-react'

export default function FinalPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [showBirthday, setShowBirthday] = useState(false)
  const [showCake, setShowCake] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioProgress, setAudioProgress] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isVisible) {
      const timer1 = setTimeout(() => setShowBirthday(true), 800)
      const timer2 = setTimeout(() => setShowCake(true), 1500)
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
      }
    }
  }, [isVisible])

  const handlePlayAudio = () => {
    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      setIsPlaying(false)
      setAudioProgress(0)
    } else {
      setIsPlaying(true)
      setAudioProgress(0)
      intervalRef.current = setInterval(() => {
        setAudioProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false)
            if (intervalRef.current) clearInterval(intervalRef.current)
            return 100
          }
          return prev + 2
        })
      }, 100)
    }
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Deep dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1816] via-[#252220] to-[#1a1816]" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#f0d0a0]/40 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: -10,
            }}
            animate={{
              y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 20,
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear',
            }}
          />
        ))}
      </div>
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8b7355]/5 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center max-w-2xl"
        >
          {/* Trust Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-10"
          >
            <Shield className="w-10 h-10 mx-auto text-[#8b7355]/50 mb-6" />
            
            <h2 className="text-2xl md:text-3xl font-light text-[#d4c4b0] mb-4 tracking-wide font-[family-name:var(--font-playfair)]">
              Some memories stay offline.
            </h2>
            
            <p className="text-lg text-[#a09080] font-light tracking-wide font-[family-name:var(--font-inter)]">
              That&apos;s called trust.
            </p>
          </motion.div>
          
          {/* Voice Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-10"
          >
            <div className="bg-[#2a2826] border border-[#3d3a36] p-5 max-w-xs mx-auto">
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePlayAudio}
                  className="w-12 h-12 rounded-full bg-[#8b7355]/20 border border-[#8b7355]/40 
                           flex items-center justify-center hover:bg-[#8b7355]/30 transition-colors"
                >
                  {isPlaying ? (
                    <VolumeX className="w-5 h-5 text-[#c4b5a0]" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-[#c4b5a0]" />
                  )}
                </button>
                
                <div className="flex-1">
                  <p className="text-xs text-[#a09080] mb-2 font-[family-name:var(--font-inter)]">Voice Message</p>
                  <div className="h-1 bg-[#3d3a36] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#8b7355]"
                      style={{ width: `${audioProgress}%` }}
                    />
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#6b6560] text-center mt-3 font-[family-name:var(--font-inter)]">
                {isPlaying ? 'Playing...' : 'Tap to play'}
              </p>
            </div>
          </motion.div>
          
          {/* Birthday Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: showBirthday ? 1 : 0, scale: showBirthday ? 1 : 0.9 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#f0d0a0]/60" />
              <span className="text-sm text-[#f0d0a0]/80 tracking-widest uppercase font-[family-name:var(--font-inter)]">
                Special Day
              </span>
              <Sparkles className="w-5 h-5 text-[#f0d0a0]/60" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-light text-[#f0d0a0] mb-3 font-[family-name:var(--font-playfair)]">
              Happy Birthday, Mehul
            </h3>
            
            <p className="text-base text-[#c4b5a0]/80 font-light font-[family-name:var(--font-inter)]">
              🎂 Cake • 🕯️ Candles • 🎉 Celebration
            </p>
            <p className="text-sm text-[#a09080] mt-2 font-[family-name:var(--font-inter)]">
              All of that and more. You deserve it.
            </p>
          </motion.div>
          
          {/* Cake Animation */}
          {showCake && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-10"
            >
              <div className="inline-flex flex-col items-center">
                <Cake className="w-16 h-16 text-[#c4a080]/60 mb-2" />
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-gradient-to-t from-[#f0a050] to-[#f0d080]"
                      initial={{ height: 8 + Math.random() * 8 }}
                      animate={{ 
                        height: [8 + Math.random() * 8, 12 + Math.random() * 8, 8 + Math.random() * 8],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ duration: 0.5 + i * 0.1, repeat: Infinity }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Version Activated */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-16 bg-[#8b7355]/30" />
              <Heart className="w-4 h-4 text-[#8b7355]/50" />
              <div className="h-px w-16 bg-[#8b7355]/30" />
            </div>
            
            <p className="text-xl md:text-2xl font-light text-[#c4b5a0] tracking-wide font-[family-name:var(--font-playfair)]">
              Version 19
            </p>
            
            <p className="text-sm text-[#8b7355] tracking-[0.2em] uppercase font-[family-name:var(--font-inter)]">
              Fully Activated
            </p>
          </motion.div>
          
          {/* Pulsing dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1.5, delay: 2 }}
            className="mt-12"
          >
            <div className="flex items-center justify-center gap-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-[#8b7355]/50 rounded-full"
                  animate={{ 
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 py-6 text-center">
        <p className="text-xs text-[#5a5550] tracking-widest uppercase font-[family-name:var(--font-inter)]">
          Archive System • 2026 • With Love
        </p>
      </footer>
    </main>
  )
}
