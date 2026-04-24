import { useState } from 'react'
import {
    LayoutDashboard,
    Briefcase,
    MessageSquare,
    Settings,
    LogOut,
    User,
    ChevronUp,
    ChevronDown
} from 'lucide-react'

interface SidebarProps {
    userMode: 'candidate' | 'employer'
    activeSection: string
    onSectionChange: (section: string) => void
}

const candidateNavItems = [
    { id: 'dashboard', label: 'Главная', icon: LayoutDashboard },
    { id: 'jobs', label: 'Мои отклики', icon: Briefcase },
    { id: 'chat', label: 'Сообщения', icon: MessageSquare },
    { id: 'settings', label: 'Настройки', icon: Settings },
]

const employerNavItems = [
    { id: 'dashboard', label: 'Главная', icon: LayoutDashboard },
    { id: 'jobs', label: 'Мои вакансии', icon: Briefcase },
    { id: 'candidates', label: 'Кандидаты', icon: User },
    { id: 'settings', label: 'Настройки', icon: Settings },
]

export function Sidebar({ userMode, activeSection, onSectionChange }: SidebarProps) {
    const [isProfileExpanded, setIsProfileExpanded] = useState(false)
    const navItems = userMode === 'candidate' ? candidateNavItems : employerNavItems

    return (
        <aside className="hidden lg:flex flex-col fixed left-0 top-0 w-64 h-screen bg-[#0F1420] border-r border-white/10 z-50">
            {/* Logo */}
            <div className="p-6 border-b border-white/10">
                <h1 className="text-2xl font-black text-white">
                    BATYS<span className="text-[#00FFB9]">.HUB</span>
                </h1>
                <p className="text-xs text-gray-500 mt-1">AI Career Platform</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = activeSection === item.id

                    return (
                        <button
                            key={item.id}
                            onClick={() => onSectionChange(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive
                                    ? 'bg-gradient-to-r from-[#0052FF] to-[#00FFB9] text-white font-medium'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <Icon className="w-5 h-5" />
                            <span>{item.label}</span>
                        </button>
                    )
                })}
            </nav>

            {/* User Profile */}
            <div className="p-4 border-t border-white/10">
                <button
                    onClick={() => setIsProfileExpanded(!isProfileExpanded)}
                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0052FF] to-[#00FFB9] flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                        <p className="text-sm font-medium text-white">Алихан К.</p>
                        <p className="text-xs text-gray-500">Кандидат</p>
                    </div>
                    {isProfileExpanded ? (
                        <ChevronUp className="w-4 h-4 text-gray-500" />
                    ) : (
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                    )}
                </button>

                {isProfileExpanded && (
                    <div className="mt-2 py-2 border-t border-white/10">
                        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
                            <Settings className="w-4 h-4" />
                            <span>Настройки</span>
                        </button>
                        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-400 hover:text-red-300 rounded-lg hover:bg-red-500/10 transition-colors">
                            <LogOut className="w-4 h-4" />
                            <span>Выйти</span>
                        </button>
                    </div>
                )}
            </div>
        </aside>
    )
}