import { motion } from 'motion/react'
import { Building2, Users } from 'lucide-react'

interface DualEntryHeroProps {
    userMode: 'candidate' | 'employer'
    onModeChange: (mode: 'candidate' | 'employer') => void
}

export function DualEntryHero({ userMode, onModeChange }: DualEntryHeroProps) {
    return (
        <section className="relative overflow-hidden py-16 lg:py-24">
            {/* Animated Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute w-96 h-96 rounded-full bg-[#0052FF]/20 blur-3xl"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{ top: '10%', left: '10%' }}
                />
                <motion.div
                    className="absolute w-72 h-72 rounded-full bg-[#00FFB9]/15 blur-3xl"
                    animate={{
                        x: [0, -20, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{ top: '40%', right: '15%' }}
                />
                <motion.div
                    className="absolute w-64 h-64 rounded-full bg-[#0052FF]/10 blur-3xl"
                    animate={{
                        x: [0, 20, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{ bottom: '20%', left: '30%' }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Logo & Title */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">
                            BATYS<span className="text-[#00FFB9]">.HUB</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            AI-платформа для поиска работы и персонала в городе Актау
                        </p>
                    </motion.div>
                </div>

                {/* Mode Toggle */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="inline-flex bg-[#151923] rounded-2xl p-1.5 border border-white/10">
                        <button
                            onClick={() => onModeChange('candidate')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${userMode === 'candidate'
                                    ? 'bg-gradient-to-r from-[#0052FF] to-[#00FFB9] text-white font-medium shadow-lg'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            <Users className="w-5 h-5" />
                            <span>Соискатель</span>
                        </button>
                        <button
                            onClick={() => onModeChange('employer')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${userMode === 'employer'
                                    ? 'bg-gradient-to-r from-[#0052FF] to-[#00FFB9] text-white font-medium shadow-lg'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            <Building2 className="w-5 h-5" />
                            <span>Работодатель</span>
                        </button>
                    </div>
                </motion.div>

                {/* Mode Description */}
                <motion.p
                    key={userMode}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-center mt-6 text-gray-500"
                >
                    {userMode === 'candidate'
                        ? 'Найдите идеальную работу в Актау с помощью ИИ-ассистента'
                        : 'Найдите лучших кандидатов для вашей компании'}
                </motion.p>
            </div>
        </section>
    )
}