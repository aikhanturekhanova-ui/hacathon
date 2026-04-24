import { motion } from 'motion/react'
import { X, Check, Crown, Zap, MessageSquare, FileText, Compass, ArrowRight } from 'lucide-react'

interface PricingModalProps {
    onClose: () => void
}

const plans = [
    {
        name: 'Бесплатный',
        price: '0₸',
        period: 'навсегда',
        description: 'Базовые функции для поиска работы',
        features: [
            '3 AI кредита в день',
            'Доступ к базе вакансий',
            'Базовая аналитика рынка',
            '1 отклик в день',
            'Email поддержка'
        ],
        cta: 'Текущий план',
        popular: false
    },
    {
        name: 'Pro',
        price: '9 990₸',
        period: '/месяц',
        description: 'Полный доступ ко всем функциям',
        features: [
            'Безлимитные AI кредиты',
            'Приоритетная поддержка',
            'Доступ к ИИ-ассистенту',
            'Неограниченные отклики',
            'Экспорт резюме в PDF',
            'Анализ зарплат в регионе',
            'Уведомления в Telegram',
            'Персональный карьерный план'
        ],
        cta: 'Перейти на Pro',
        popular: true
    }
]

export function PricingModal({ onClose }: PricingModalProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={onClose}
            />

            {/* Modal */}
            <motion.div
                className="relative w-full max-w-4xl bg-[#151923] rounded-3xl border border-white/10 overflow-hidden"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                {/* Header */}
                <div className="p-6 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Crown className="w-6 h-6 text-[#FFD700]" />
                        <h2 className="text-2xl font-bold text-white">Выберите тариф</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                        aria-label="Закрыть окно"
                    >
                        <X className="w-5 h-5 text-white" />
                    </button>
                </div>

                {/* Plans */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.name}
                            className={`relative rounded-2xl p-6 ${plan.popular
                                ? 'bg-gradient-to-br from-[#0052FF]/20 to-[#00FFB9]/20 border-2 border-[#00FFB9]'
                                : 'bg-white/5 border border-white/10'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#0052FF] to-[#00FFB9] rounded-full text-xs font-medium text-white">
                                    Популярный
                                </div>
                            )}

                            {/* Plan Info */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                                    <span className="text-gray-500">{plan.period}</span>
                                </div>
                                <p className="text-gray-400 text-sm mt-2">{plan.description}</p>
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-6">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                        <Check className="w-5 h-5 text-[#00FFB9] flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                className={`w-full py-3 rounded-xl font-medium transition-all ${plan.popular
                                    ? 'bg-gradient-to-r from-[#0052FF] to-[#00FFB9] text-white hover:shadow-lg hover:shadow-[#0052FF]/30'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/10 text-center">
                    <p className="text-gray-500 text-sm">
                        Отменить подписку можно в любое время. Деньги не будут списаны до конца пробного периода.
                    </p>
                </div>
            </motion.div>
        </div>
    )
}