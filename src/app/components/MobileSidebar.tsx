import { X } from 'lucide-react'
import {
    LayoutDashboard,
    Briefcase,
    MessageSquare,
    Settings,
    User
} from 'lucide-react'

interface MobileSidebarProps {
    userMode: 'candidate' | 'employer'
    activeSection: string
    onSectionChange: (section: string) => void
    isOpen: boolean
    onClose: () => void
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

export function MobileSidebar({ userMode, activeSection, onSectionChange, isOpen, onClose }: MobileSidebarProps) {
    const navItems = userMode === 'candidate' ? candidateNavItems : employerNavItems

    if (!isOpen) return null

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
                onClick={onClose}
            />

            {/* Sidebar */}
            <aside className="fixed left-0 top-0 w-72 h-screen bg-[#0F1420] border-r border-white/10 z-50 lg:hidden animate-slide-in">
                {/* Header */}
                <div className="p-6 border-b border-white/10 flex items-center justify-between">
                    <h1 className="text-xl font-black text-white">
                        BATYS<span className="text-[#00FFB9]">.HUB</span>
                    </h1>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                        aria-label="Закрыть меню"
                    >
                        <X className="w-4 h-4 text-white" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="p-4 space-y-2">
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
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0052FF] to-[#00FFB9] flex items-center justify-center">
                            <User className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-white">Алихан К.</p>
                            <p className="text-xs text-gray-500">Кандидат</p>
                        </div>
                    </div>
                </div>
            </aside>

            <style>{`
        @keyframes slide-in {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
        </>
    )
}