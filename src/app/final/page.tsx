'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Heart } from 'lucide-react'

export default function BirthdayPage() {
  const [isMounted, setIsMounted] = useState(false)
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  
  // Refs for Canvas and Interaction
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const gyroRef = useRef({ x: 0, y: 0 })
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef<any[]>([])
  const animationRef = useRef<number>()

  // Quotes Data
  const quotes = [
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Count your age by friends, not years. Count your life by smiles, not tears.", author: "John Lennon" },
    { text: "Today you are you! That is truer than true! There is no one alive who is you-er than you!", author: "Dr. Seuss" },
    { text: "The more you praise and celebrate your life, the more there is in life to celebrate.", author: "Oprah Winfrey" },
  ]

  // --- 1. Initialization & Quote Rotation ---
  useEffect(() => {
    setIsMounted(true)
    
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // --- 2. Particle & Gyroscope System ---
  useEffect(() => {
    if (!isMounted || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    
    // Set canvas size
    canvas.width = width
    canvas.height = height

    // Particle Class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.color = `rgba(212, 165, 116, ${Math.random() * 0.5 + 0.2})`
      }

      update(gyroX: number, gyroY: number) {
        const forceX = gyroX * 0.05
        const forceY = gyroY * 0.05
        
        this.x += this.speedX + forceX + Math.sin(Date.now() * 0.001 + this.y * 0.01) * 0.2
        this.y += this.speedY + forceY + Math.cos(Date.now() * 0.001 + this.x * 0.01) * 0.2

        if (this.x < 0) this.x = width
        if (this.x > width) this.x = 0
        if (this.y < 0) this.y = height
        if (this.y > height) this.y = 0
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    particlesRef.current = Array.from({ length: 60 }, () => new Particle())

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      
      particlesRef.current.forEach(p => {
        p.update(gyroRef.current.x, gyroRef.current.y)
        p.draw(ctx)
      })
      
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX - width / 2) 
      mouseRef.current.y = (e.clientY - height / 2)
      if (!window.DeviceOrientationEvent || gyroRef.current.x === 0) {
        gyroRef.current.x = mouseRef.current.x / 50
        gyroRef.current.y = mouseRef.current.y / 50
      }
    }

    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        gyroRef.current.x = e.gamma 
        gyroRef.current.y = e.beta - 45 
      }
    }

    const requestGyro = async () => {
      if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
        try {
          const permission = await (DeviceOrientationEvent as any).requestPermission()
          if (permission === 'granted') {
            window.addEventListener('deviceorientation', handleOrientation)
          }
        } catch (error) {
          console.error("Gyro permission denied", error)
        }
      } else {
        window.addEventListener('deviceorientation', handleOrientation)
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    
    const clickHandler = () => {
      requestGyro()
      document.removeEventListener('click', clickHandler)
    }
    document.addEventListener('click', clickHandler)

    return () => {
      cancelAnimationFrame(animationRef.current!)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('deviceorientation', handleOrientation)
      document.removeEventListener('click', clickHandler)
    }

  }, [isMounted])

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#fff0f5] via-[#fdfbf7] to-[#f0f8ff] font-sans text-[#4a3f47]">
      
      <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />

      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        
        {/* Card 1: Intro Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-md mb-6"
        >
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 shadow-lg text-center">
            <Sparkles className="w-6 h-6 mx-auto mb-3 text-[#d4a574] opacity-60" />
            <p className="font-display italic text-lg md:text-xl text-[#d4a574] leading-relaxed">
              "The purpose of our lives is to be happy."
            </p>
            <p className="mt-2 text-xs text-[#8a7a82] uppercase tracking-widest">— Dalai Lama</p>
          </div>
        </motion.div>

        {/* Card 2: Main Celebration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isMounted ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="bg-white/70 backdrop-blur-xl border border-white/90 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-200 via-rose-300 to-orange-200" />
            
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-[#d4a574]/30" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#8a7a82] font-semibold">Special Day</span>
                <div className="h-px w-12 bg-[#d4a574]/30" />
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl font-light mb-1">Happy Birthday</h1>
              <h2 className="font-display text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-400 to-amber-500 bg-clip-text text-transparent">
                Mehul
              </h2>
            </div>

            {/* CSS Art: Cake - FIXED CLASSES */}
            <div className="relative w-40 h-48 mx-auto my-8" style={{ perspective: '1000px' }}>
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                {/* Top Layer - Corrected 'from-light pink' to 'from-white' */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[105px] w-16 h-12 bg-gradient-to-b from-white to-pink-50 rounded-lg shadow-sm border border-blue" />
                
                {/* Middle Layer */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[60px] w-24 h-14 bg-gradient-to-b from-pink-100 to-pink-200 rounded-lg shadow-md" />
                
                {/* Bottom Layer */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[10px] w-32 h-14 bg-gradient-to-b from-rose-200 to-rose-300 rounded-xl shadow-lg" />
                
                {/* Frosting Drips */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[70px] w-32 flex justify-between px-2">
                  {[0,1,2,3,4].map(i => (
                    <div key={i} className="w-2 bg-amber-100 rounded-b-full" style={{ height: `${8 + Math.random()*8}px`}} />
                  ))}
                </div>

                {/* Candles */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[140px] flex gap-4">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="relative">
                      <div className="w-1.5 h-8 bg-gradient-to-r from-pink-100 via-white to-pink-100 rounded-t-sm shadow-inner" />
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 0.3 + (i * 0.1), repeat: Infinity }}
                        className="absolute -top-3 left-1/2 -translate-x-1/2 w-2.5 h-4 bg-gradient-to-t from-orange-500 via-yellow-300 to-white rounded-full blur-[1px]"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <p className="text-center text-sm text-[#8a7a82]">
              All of that and more. You deserve it.
            </p>
            
            <div className="my-6 h-px bg-gradient-to-r from-transparent via-[#d4a574]/30 to-transparent" />

            <div className="h-24 flex flex-col justify-center items-center relative">
              {quotes.map((q, i) => (
                <motion.div
                  key={i}
                  initial={false}
                  animate={{
                    opacity: currentQuoteIndex === i ? 1 : 0,
                    y: currentQuoteIndex === i ? 0 : 10,
                    scale: currentQuoteIndex === i ? 1 : 0.95
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-full px-4 text-center"
                >
                  <p className="font-display text-sm md:text-base italic text-[#4a3f47]">"{q.text}"</p>
                  <p className="text-xs mt-2 text-[#d4a574]">— {q.author}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={isMounted ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="w-full max-w-md mt-6 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#d4a574]/30" />
            <Heart className="w-4 h-4 text-rose-300 fill-rose-200" />
            <div className="h-px w-12 bg-[#d4a574]/30" />
          </div>
          
          <p className="font-display text-lg text-[#8a7a82]">Version 19</p>
          <p className="text-xs tracking-[0.2em] uppercase text-[#d4a574] mt-1">Fully Activated</p>
          
          <p className="text-[10px] text-[#a09080] mt-8 opacity-60">
            Archive System • 2026 • With Love (BC!!)
          </p>
        </motion.div>

      </div>
    </main>
  )
}
