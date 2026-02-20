'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

const infoboxData = {
  name: 'Mehul',
  image: '/mehul-portrait.jpeg',
  caption: 'Mehul in 2026',
  birthDate: '22 February 2007',
  birthPlace: 'India',
  age: 19,
  nationality: 'Indian',
  status: 'Active',
  affiliation: 'LOYALITY ON PEAK',
  occupation: 'Student',
  knownFor: 'Loyalty, Strategic Thinking',
  coreTrait: 'Loyalty',
  operationalMode: 'Calm / Strategic',
  trustLevel: '100%',
}

const tocSections = [
  { id: 'early', title: 'Early Phase' },
  { id: 'chaos', title: 'Chaos Era' },
  { id: 'growth', title: 'Growth Phase' },
  { id: 'loyalty', title: 'Loyalty Protocol' },
  { id: 'gallery', title: 'Gallery' },
]

const photoGallery = [
  { src: '/4.jpeg', caption: 'Portrait, 2026' },
  { src: '/1.jpeg', caption: 'Studio shot' },
  { src: '/good.jpeg', caption: 'Candid moment' },
  { src: '/solo.jpeg', caption: 'With friends' },
  { src: '/2.jpeg', caption: 'Celebration' },
  { src: '/3.jpeg', caption: 'Memory lane' },
]

export default function DossierPage() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Wikipedia Header */}
      <header className="border-b border-[#a2a9b1] bg-white">
        <div className="max-w-[960px] mx-auto px-4">
          {/* Wikipedia-style top bar */}
          <div className="flex items-center justify-between py-2 border-b border-[#a2a9b1]/50">
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#54595d]">From Archive System</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-[#0645ad]">
              <span className="hover:underline cursor-pointer">Article</span>
              <span className="hover:underline cursor-pointer">Talk</span>
            </div>
          </div>
          
          {/* Title */}
          <div className="py-4">
            <h1 className="text-[1.5rem] font-normal text-[#222] border-none font-[family-name:var(--font-playfair)]">
              Mehul
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[960px] mx-auto px-4 py-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-6"
        >
          {/* Main Article Content */}
          <div className="flex-1 order-2 md:order-1">
            {/* Short description */}
            <p className="text-sm text-[#54595d] mb-4 font-[family-name:var(--font-inter)]">
              <em>This article is about the individual classified as Version 19. For the personal archive, see <span className="text-[#0645ad] hover:underline cursor-pointer">Mehul Archive</span>.</em>
            </p>

            {/* Table of Contents */}
            <div className="bg-[#f8f9fa] border border-[#a2a9b1] p-3 mb-4 text-sm font-[family-name:var(--font-inter)]">
              <div className="flex items-center gap-2 mb-2 font-bold text-[#54595d]">
                <span>Contents</span>
                <span className="text-[#54595d] font-normal">(hide)</span>
              </div>
              <ol className="list-decimal list-inside text-[#0645ad] space-y-1">
                {tocSections.map((section) => (
                  <li key={section.id} className="hover:underline cursor-pointer">
                    <span className="text-[#0645ad]">{section.title}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Article Text */}
            <p className="text-sm leading-relaxed mb-4 font-[family-name:var(--font-inter)] text-[#202122]">
              <b>Mehul</b> (born 22 February 2007) is an Indian individual known for his loyalty and strategic thinking. 
              He is affiliated with <span className="text-[#0645ad] hover:underline cursor-pointer">GOP GOP GOP!!! </span> and 
              has been classified as an active subject in the Archive System since 2007. His operational mode is 
              characterized as calm and strategic.
            </p>

            {/* Early Phase */}
            <motion.section
              id="early"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-6"
            >
              <h2 className="text-lg font-normal text-[#222] border-b border-[#a2a9b1] pb-1 mb-3 font-[family-name:var(--font-playfair)]">
                Early Phase
              </h2>
              <p className="text-sm leading-relaxed font-[family-name:var(--font-inter)] text-[#202122]">
                Focused, outspoken, unfiltered honesty. Known for direct communication and confidence. 
                Built foundations on authenticity rather than adaptation. During this phase, Mehul developed 
                his characteristic approach to interpersonal relationships, prioritizing genuine connections 
                over superficial interactions.
              </p>
            </motion.section>

            {/* Chaos Era */}
            <motion.section
              id="chaos"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mb-6"
            >
              <h2 className="text-lg font-normal text-[#222] border-b border-[#a2a9b1] pb-1 mb-3 font-[family-name:var(--font-playfair)]">
                Chaos Era
              </h2>
              <p className="text-sm leading-relaxed font-[family-name:var(--font-inter)] text-[#202122]">
                Adapted quickly in unpredictable situations. High-risk energy, strong emotional control. 
                Demonstrated resilience under pressure and maintained clarity during turbulence. This period 
                was marked by significant personal growth and the development of coping mechanisms that would 
                later prove essential to his character development.
              </p>
            </motion.section>

            {/* Growth Phase */}
            <motion.section
              id="growth"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mb-6"
            >
              <h2 className="text-lg font-normal text-[#222] border-b border-[#a2a9b1] pb-1 mb-3 font-[family-name:var(--font-playfair)]">
                Growth Phase
              </h2>
              <p className="text-sm leading-relaxed font-[family-name:var(--font-inter)] text-[#202122]">
                Shifted from reaction to reflection. Improved decision-making and emotional balance. 
                Developed strategic thinking and long-term perspective. During this transformative phase, 
                Mehul began to prioritize thoughtful responses over impulsive reactions, leading to more 
                stable interpersonal dynamics.
              </p>
            </motion.section>

            {/* Loyalty Protocol */}
            <motion.section
              id="loyalty"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mb-6"
            >
              <h2 className="text-lg font-normal text-[#222] border-b border-[#a2a9b1] pb-1 mb-3 font-[family-name:var(--font-playfair)]">
                Loyalty Protocol
              </h2>
              <p className="text-sm leading-relaxed font-[family-name:var(--font-inter)] text-[#202122]">
                Values consistency over noise. Maintains a small circle. High trust retention. 
                Prioritizes meaningful connections over quantity. The loyalty protocol represents 
                Mehul&apos;s core philosophy: quality over quantity in relationships, and unwavering 
                support for those within his trusted circle.
              </p>
              
              {/* See Also */}
              <div className="mt-4 p-3 bg-[#f8f9fa] border border-[#a2a9b1]">
                <h4 className="text-sm font-bold text-[#54595d] mb-2 font-[family-name:var(--font-inter)]">See also</h4>
                <ul className="text-sm text-[#0645ad] space-y-1 font-[family-name:var(--font-inter)]">
                  <li className="hover:underline cursor-pointer">• Companion File R-01</li>
                  <li className="hover:underline cursor-pointer">• LOYAL PERSON Affiliation</li>
                  <li className="hover:underline cursor-pointer">• Version 19 Documentation</li>
                </ul>
              </div>
            </motion.section>

            {/* Gallery Section */}
            <motion.section
              id="gallery"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mb-6"
            >
              <h2 className="text-lg font-normal text-[#222] border-b border-[#a2a9b1] pb-1 mb-4 font-[family-name:var(--font-playfair)]">
                Gallery
              </h2>
              
              {/* Wikipedia-style gallery */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {photoGallery.map((photo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                    className="border border-[#c8ccd1] bg-[#f8f9fa] p-1"
                  >
                    <div className="aspect-square bg-gradient-to-br from-[#e6ddd3] to-[#d4c4b0] overflow-hidden">
                      <img 
                        src={photo.src} 
                        alt={photo.caption}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-xs text-[#54595d] text-center py-2 font-[family-name:var(--font-inter)]">
                      {photo.caption}
                    </p>
                  </motion.div>
                ))}
              </div>
              
              {/* Gallery note */}
            <p className="text-xs text-[#54595d] mt-3 italic font-[family-name:var(--font-inter)]">
  Note: BC HAVEE TO PAPA KE!!!! (MAZAAK LADALE MAINE KAHAHA GOP GOP GOP) <code className="bg-[#f8f9fa] px-1">KEEE</code>.
</p>
            </motion.section>

            {/* References */}
            <div className="mt-6 pt-3 border-t border-[#a2a9b1]">
              <h4 className="text-sm font-bold text-[#54595d] mb-2 font-[family-name:var(--font-inter)]">References</h4>
              <ol className="text-xs text-[#0645ad] space-y-1 font-[family-name:var(--font-inter)]">
                <li className="hover:underline cursor-pointer">^ &quot;Archive System Classification Report&quot;. 2026.</li>
                <li className="hover:underline cursor-pointer">^ &quot;BC!!!Affiliation Records&quot;. 2026.</li>
              </ol>
            </div>

            {/* Continue Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-8 mb-6"
            >
              <button
                onClick={() => router.push('/influence')}
                className="px-6 py-3 border border-[#a2a9b1] text-[#5a5a5a] text-sm tracking-widest uppercase
                           hover:bg-[#eaecf0] transition-colors font-[family-name:var(--font-inter)]"
              >
                Continue to Influence Analysis →
              </button>
            </motion.div>
          </div>

          {/* Infobox (Wikipedia style) */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-[260px] order-1 md:order-2 flex-shrink-0"
          >
            <div className="border border-[#a2a9b1] bg-[#f8f9fa]">
              {/* Infobox Title */}
              <div className="bg-[#c8ccd1] text-center py-2">
                <h3 className="text-sm font-bold text-[#222] font-[family-name:var(--font-inter)]">Mehul</h3>
              </div>
              
              {/* Image */}
              <div className="p-2 border-b border-[#a2a9b1]">
                <img 
                  src={infoboxData.image}
                  alt={infoboxData.name}
                  className="w-full aspect-square object-cover bg-gradient-to-br from-[#e6ddd3] to-[#d4c4b0]"
                />
                <p className="text-xs text-[#54595d] text-center mt-1 font-[family-name:var(--font-inter)]">
                  {infoboxData.caption}
                </p>
              </div>
              
              {/* Quick Facts */}
              <div className="text-xs font-[family-name:var(--font-inter)]">
                <div className="border-b border-[#a2a9b1]">
                  <div className="bg-[#eaecf0] px-2 py-1 font-bold text-[#222]">Born</div>
                  <div className="px-2 py-1 text-[#202122]">{infoboxData.birthDate}<br/><span className="text-[#54595d]">{infoboxData.birthPlace}</span></div>
                </div>
                
                <div className="border-b border-[#a2a9b1]">
                  <div className="bg-[#eaecf0] px-2 py-1 font-bold text-[#222]">Age</div>
                  <div className="px-2 py-1 text-[#202122]">{infoboxData.age}</div>
                </div>
                
                <div className="border-b border-[#a2a9b1]">
                  <div className="bg-[#eaecf0] px-2 py-1 font-bold text-[#222]">Nationality</div>
                  <div className="px-2 py-1 text-[#202122]">{infoboxData.nationality}</div>
                </div>
                
                <div className="border-b border-[#a2a9b1]">
                  <div className="bg-[#eaecf0] px-2 py-1 font-bold text-[#222]">Status</div>
                  <div className="px-2 py-1 text-[#008000]">{infoboxData.status}</div>
                </div>
                
                <div className="border-b border-[#a2a9b1]">
                  <div className="bg-[#eaecf0] px-2 py-1 font-bold text-[#222]">Affiliation</div>
                  <div className="px-2 py-1 text-[#0645ad] hover:underline cursor-pointer">{infoboxData.affiliation}</div>
                </div>
                
                <div className="border-b border-[#a2a9b1]">
                  <div className="bg-[#eaecf0] px-2 py-1 font-bold text-[#222]">Occupation</div>
                  <div className="px-2 py-1 text-[#202122]">{infoboxData.occupation}</div>
                </div>
                
                <div className="border-b border-[#a2a9b1]">
                  <div className="bg-[#eaecf0] px-2 py-1 font-bold text-[#222]">Known for</div>
                  <div className="px-2 py-1 text-[#202122]">{infoboxData.knownFor}</div>
                </div>
                
                <div className="border-b border-[#a2a9b1]">
                  <div className="bg-[#eaecf0] px-2 py-1 font-bold text-[#222]">Core trait</div>
                  <div className="px-2 py-1 text-[#202122]">{infoboxData.coreTrait}</div>
                </div>
                
                <div>
                  <div className="bg-[#eaecf0] px-2 py-1 font-bold text-[#222]">Trust Level</div>
                  <div className="px-2 py-1 text-[#008000] font-bold">{infoboxData.trustLevel}</div>
                </div>
              </div>
            </div>
            
            {/* Categories */}
            <div className="mt-4 text-xs font-[family-name:var(--font-inter)]">
              <div className="flex flex-wrap gap-1">
                <span className="bg-[#eaecf0] border border-[#a2a9b1] px-2 py-0.5 text-[#54595d]">Categories:</span>
                <span className="bg-[#eaecf0] border border-[#a2a9b1] px-2 py-0.5 text-[#0645ad] hover:underline cursor-pointer">2007 births</span>
                <span className="bg-[#eaecf0] border border-[#a2a9b1] px-2 py-0.5 text-[#0645ad] hover:underline cursor-pointer">Indian people</span>
                <span className="bg-[#eaecf0] border border-[#a2a9b1] px-2 py-0.5 text-[#0645ad] hover:underline cursor-pointer">Living people</span>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#a2a9b1] mt-8 py-4">
        <div className="max-w-[960px] mx-auto px-4">
          <p className="text-xs text-[#54595d] text-center font-[family-name:var(--font-inter)]">
            This page was last edited on 22 February 2026, at 19:00 (UTC).
          </p>
          <p className="text-xs text-[#54595d] text-center mt-1 font-[family-name:var(--font-inter)]">
            Content is available under <span className="text-[#0645ad] hover:underline cursor-pointer">Archive System License</span> • Privacy policy
          </p>
        </div>
      </footer>
    </main>
  )
}
