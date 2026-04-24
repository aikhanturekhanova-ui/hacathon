import { useState } from 'react'
import { Menu } from 'lucide-react'
import { DualEntryHero } from './app/components/DualEntryHero'
import { AICareerLab } from './app/components/AICareerLab'
import { UsageCounter } from './app/components/UsageCounter'
import { JobFeed } from './app/components/JobFeed'
import { LiveChatWidget } from './app/components/LiveChatWidget'
import { PricingModal } from './app/components/PricingModal'
import { Sidebar } from './app/components/Sidebar'
import { MobileSidebar } from './app/components/MobileSidebar'
import { SearchBar } from './app/components/SearchBar'

export default function App() {
    const [userMode, setUserMode] = useState<'candidate' | 'employer'>('candidate')
    const [showPricing, setShowPricing] = useState(false)
    const [aiCreditsLeft, setAiCreditsLeft] = useState(3)
    const [activeSection, setActiveSection] = useState('dashboard')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="min-h-screen bg-[#0A0E1A]">
            <Sidebar
                userMode={userMode}
                activeSection={activeSection}
                onSectionChange={setActiveSection}
            />

            <MobileSidebar
                userMode={userMode}
                activeSection={activeSection}
                onSectionChange={(section) => {
                    setActiveSection(section)
                    setMobileMenuOpen(false)
                }}
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
            />

            <div className="lg:pl-64">
                <div className="lg:hidden sticky top-0 z-40 bg-[#0F1420] border-b border-white/10 px-4 py-3 flex items-center justify-between backdrop-blur-xl">
                    <h1 className="text-xl font-black text-white">
                        BATYS<span className="text-[#00FFB9]">.HUB</span>
                    </h1>
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                        aria-label="Открыть меню"
                    >
                        <Menu className="w-5 h-5 text-white" />
                    </button>
                </div>

                <DualEntryHero userMode={userMode} onModeChange={setUserMode} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
                    {activeSection === 'dashboard' && (
                        <>
                            <UsageCounter
                                creditsLeft={aiCreditsLeft}
                                totalCredits={3}
                                onUpgrade={() => setShowPricing(true)}
                            />
                            {userMode === 'candidate' && <SearchBar />}
                            {userMode === 'candidate' && (
                                <AICareerLab
                                    onUseCredit={() => setAiCreditsLeft(Math.max(0, aiCreditsLeft - 1))}
                                    creditsLeft={aiCreditsLeft}
                                />
                            )}
                            <JobFeed userMode={userMode} />
                        </>
                    )}

                    {activeSection === 'jobs' && (
                        <div className="glass p-8">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                {userMode === 'candidate' ? 'Мои отклики' : 'Мои вакансии'}
                            </h2>
                            <p className="text-gray-400">
                                {userMode === 'candidate'
                                    ? 'Здесь будут отображаться все ваши отклики на вакансии.'
                                    : 'Здесь будут отображаться все ваши опубликованные вакансии.'}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <LiveChatWidget />
            {showPricing && <PricingModal onClose={() => setShowPricing(false)} />}
        </div>
    )
}