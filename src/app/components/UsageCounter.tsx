import { motion } from 'motion/react'
import { Zap, Crown, Sparkles } from 'lucide-react'

interface UsageCounterProps {
    creditsLeft: number
    totalCredits: number
    onUpgrade: () => void
}

export function UsageCounter({ creditsLeft, totalCredits, onUpgrade }: UsageCounterProps) {
    const percentage = (creditsLeft / totalCredits) * 100

    return (
        <div className="glass rounded-3xl p-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                {/* Credits Info */}
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0052FF] to-[#00FFB9] flex items-center justify-center">
                        <Zap className="w-7 h-7 text-white" />
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm">AI кредитов сегодня</p>
                        <p className="text-2xl font-bold text-white">
                            {creditsLeft}/{totalCredits} <span className="text-gray-500 font-normal">кредитов</span>
                        </p>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="flex-1 max-w-md w-full">
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-[#0052FF] to-[#00FFB9]"
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                        />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                        <span>Использовано</span>
                        <span>Осталось {creditsLeft}</span>
                    </div>
                </div>

                {/* Upgrade Button */}
                <button
                    onClick={onUpgrade}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-medium hover:shadow-lg hover:shadow-[#FFD700]/30 transition-all"
                >
                    <Crown className="w-5 h-5" />
                    <span>UPGRADE</span>
                </button>
            </div>

            {/* Features Preview */}
            <div className="flex items-center gap-6 mt-4 pt-4 border-t border-white/10 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#00FFB9]" />
                    Конструктор резюме
                </span>
                <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#00FFB9]" />
                    Симулятор интервью
                </span>
                <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#00FFB9]" />
                    Карьерный навигатор
                </span>
            </div>
        </div>
    )
}