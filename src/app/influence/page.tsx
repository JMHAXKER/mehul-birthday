'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Heart, TrendingUp, Smile, Shield } from 'lucide-react'

const metrics = [
  { icon: TrendingUp, label: 'Observed Impact', value: 'Positive', color: 'text-green-700' },
  { icon: Heart, label: 'Emotional Stability', value: 'Increased', color: 'text-green-700' },
  { icon: Smile, label: 'Smile Frequency', value: 'Elevated', color: 'text-[#8b7355]' },
  { icon: Shield, label: 'Chaos Reduction', value: 'Significant', color: 'text-green-700' },
]

export default function InfluencePage() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-[#f5f0eb] via-[#e8e4df] to-[#d4e5ed]">
      {/* Background Image - Full Width, Zoomed Out */}
      <img 
        src="/influence-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-contain"
      />
      
      {/* Content - Positioned at bottom so top of image is visible */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pb-8 px-4">
        {/* Small Compact Pastel Box at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/60 backdrop-blur-md rounded-3xl p-5 md:p-6 border border-white/40 shadow-xl max-w-md mx-auto w-full"
        >
          {/* Header */}
          <div className="text-center mb-4">
            <span className="text-xs tracking-[0.2em] uppercase text-[#8b7355] font-[family-name:var(--font-inter)]">
              Influence Analysis
            </span>
            <h1 className="text-xl md:text-2xl font-light text-[#3d3d3d] tracking-wide font-[family-name:var(--font-playfair)] mt-1">
              Companion – R-01
            </h1>
          </div>
          
          {/* Metrics Grid - Compact */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                className="bg-white/70 rounded-xl p-2 text-center border border-white/30"
              >
                <metric.icon className="w-3.5 h-3.5 mx-auto mb-1 text-[#8b7355]" />
                <p className={`text-xs font-semibold font-[family-name:var(--font-inter)] ${metric.color}`}>
                  {metric.value}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Quote */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-sm text-[#5a5a5a] font-light italic text-center leading-relaxed font-[family-name:var(--font-inter)]"
          >
            Some connections don&apos;t make noise. They just make things better.
          </motion.p>
          
          {/* Continue Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-4 text-center"
          >
            <button
              onClick={() => router.push('/final')}
              className="px-6 py-2.5 bg-white/80 border border-[#e6ddd3] text-[#5a5a5a] text-xs tracking-widest uppercase 
                         hover:bg-white transition-all duration-300 font-[family-name:var(--font-inter)] rounded-full"
            >
              Final Transmission →
            </button>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
