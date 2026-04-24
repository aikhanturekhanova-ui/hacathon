import { motion } from 'motion/react'
import { FileText, MessageCircle, Compass, Sparkles, Lock } from 'lucide-react'

interface AICareerLabProps {
    onUseCredit: () => void
    creditsLeft: number
}

const aiTools = [
    {
        id: 'resume',
        title: 'ИИ Конструктор Резюме',
        description: 'Создайте профессиональное резюме за 5 минут',
        icon: FileText,
        gradient: 'from-[#0052FF] to-[#00FFB9]',
        features: [
            'Автозаполнение на основе опыта',
            'Оптимизация под работодателя',
            'Экспорт в PDF и Word'
        ]
    },
    {
        id: 'interview',
        title: 'Симулятор Собеседований',
        description: 'Практикуйтесь с ИИ в формате реальных интервью',
        icon: MessageCircle,
        gradient: 'from-[#00FFB9] to-[#0052FF]',
        features: [
            'Тренировка на реальных вопросах',
            'Обратная связь по ответам',
            'Анализ мимики и речи'
        ]
    },
    {
        id: 'navigator',
        title: 'Карьерный Навигатор',
        description: 'Постройте индивидуальную карьерную траекторию',
        icon: Compass,
        gradient: 'from-[#0052FF] to-[#00FFB9]',
        features: [
            'Анализ рынка труда Актау',
            'Рекомендации по развитию',
            'Прогноз зарплат по профессиям'
        ]
    }
]

export function AICareerLab({ onUseCredit, creditsLeft }: AICareerLabProps) {
    return (
        <section>
            <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-[#00FFB9]" />
                <h2 className="text-2xl font-bold text-white">AI Career Lab</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {aiTools.map((tool, index) => {
                    const Icon = tool.icon
                    const isLocked = creditsLeft <= 0

                    return (
                        <motion.div
                            key={tool.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass rounded-3xl p-6 hover:border-[#00FFB9]/30 transition-all duration-300 group"
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <Icon className="w-7 h-7 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-semibold text-white mb-2">{tool.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{tool.description}</p>

                            {/* Features */}
                            <ul className="space-y-2 mb-6">
                                {tool.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#00FFB9]" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Action Button */}
                            <button
                                onClick={onUseCredit}
                                disabled={isLocked}
                                className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${isLocked
                                        ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-[#0052FF] to-[#00FFB9] text-white hover:shadow-lg hover:shadow-[#0052FF]/30'
                                    }`}
                            >
                                {isLocked ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <Lock className="w-4 h-4" />
                                        Нет кредитов
                                    </span>
                                ) : (
                                    'Использовать кредит'
                                )}
                            </button>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}