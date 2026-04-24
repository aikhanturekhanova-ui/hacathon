import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { MessageSquare, X, Send, Bot, ChevronDown, ChevronUp } from 'lucide-react'

const quickQuestions = [
    'Как составить резюме?',
    'Какие вакансии есть в Актау?',
    'Как пройти собеседование?',
    'Какие зарплаты в нефти?',
]

const initialMessages = [
    {
        id: 1,
        role: 'assistant',
        content: 'Привет! Я ИИ Карьерный Ассистент BATYS.HUB. Я помогу вам найти работу в Актау, составить резюме или подготовиться к собеседованию. Чем могу помочь?'
    }
]

export function LiveChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [isMinimized, setIsMinimized] = useState(false)
    const [messages, setMessages] = useState(initialMessages)
    const [inputValue, setInputValue] = useState('')
    const [isTyping, setIsTyping] = useState(false)

    const handleSend = () => {
        if (!inputValue.trim()) return

        const userMessage = {
            id: Date.now(),
            role: 'user',
            content: inputValue
        }

        setMessages(prev => [...prev, userMessage])
        setInputValue('')
        setIsTyping(true)

        // Simulate AI response
        setTimeout(() => {
            const aiResponse = {
                id: Date.now() + 1,
                role: 'assistant',
                content: getAIResponse(inputValue)
            }
            setMessages(prev => [...prev, aiResponse])
            setIsTyping(false)
        }, 1500)
    }

    const handleQuickQuestion = (question: string) => {
        setInputValue(question)
        setIsOpen(true)
        setIsMinimized(false)
    }

    return (
        <>
            {/* Chat Button */}
            <motion.button
                onClick={() => {
                    setIsOpen(!isOpen)
                    setIsMinimized(false)
                }}
                className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-gradient-to-r from-[#0052FF] to-[#00FFB9] flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                {isOpen ? (
                    <X className="w-7 h-7 text-white" />
                ) : (
                    <MessageSquare className="w-7 h-7 text-white" />
                )}

                {/* Pulse indicator */}
                {!isOpen && (
                    <span className="absolute top-0 right-0 w-4 h-4 bg-[#00FFB9] rounded-full border-2 border-[#0A0E1A] animate-pulse" />
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] bg-[#151923] rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#0052FF]/20 to-[#00FFB9]/20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0052FF] to-[#00FFB9] flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">ИИ Ассистент</h3>
                                    <p className="text-xs text-[#00FFB9]">Онлайн</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsMinimized(!isMinimized)}
                                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                            >
                                {isMinimized ? (
                                    <ChevronUp className="w-4 h-4 text-white" />
                                ) : (
                                    <ChevronDown className="w-4 h-4 text-white" />
                                )}
                            </button>
                        </div>

                        {/* Messages */}
                        {!isMinimized && (
                            <>
                                <div className="h-80 overflow-y-auto p-4 space-y-4">
                                    {messages.map((message) => (
                                        <div
                                            key={message.id}
                                            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div
                                                className={`max-w-[80%] p-3 rounded-2xl ${message.role === 'user'
                                                    ? 'bg-gradient-to-r from-[#0052FF] to-[#00FFB9] text-white'
                                                    : 'bg-white/10 text-gray-300'
                                                    }`}
                                            >
                                                <p className="text-sm">{message.content}</p>
                                            </div>
                                        </div>
                                    ))}

                                    {isTyping && (
                                        <div className="flex justify-start">
                                            <div className="bg-white/10 p-3 rounded-2xl">
                                                <div className="flex gap-1">
                                                    <span className="typing-dot" />
                                                    <span className="typing-dot" />
                                                    <span className="typing-dot" />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Quick Questions */}
                                <div className="px-4 pb-2 flex flex-wrap gap-2">
                                    {quickQuestions.map((question) => (
                                        <button
                                            key={question}
                                            onClick={() => handleQuickQuestion(question)}
                                            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 hover:text-white hover:border-[#0052FF]/50 transition-colors"
                                        >
                                            {question}
                                        </button>
                                    ))}
                                </div>

                                {/* Input */}
                                <div className="p-4 border-t border-white/10">
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                            placeholder="Введите сообщение..."
                                            className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#0052FF] transition-colors"
                                        />
                                        <button
                                            onClick={handleSend}
                                            className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#0052FF] to-[#00FFB9] flex items-center justify-center hover:shadow-lg hover:shadow-[#0052FF]/30 transition-all"
                                            aria-label="Отправить сообщение"
                                        >
                                            <Send className="w-5 h-5 text-white" />
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

function getAIResponse(question: string): string {
    const lowerQuestion = question.toLowerCase()

    if (lowerQuestion.includes('резюме')) {
        return 'Для составления резюме перейдите в раздел AI Career Lab и используйте Конструктор резюме. ИИ поможет вам создать профессиональное резюме за 5 минут!'
    }

    if (lowerQuestion.includes('вакансии') || lowerQuestion.includes('работа')) {
        return 'Сейчас в Актау доступно 156 вакансий. Самые популярные направления: нефтегазовая отрасль, IT, торговля и логистика. Хотите, я покажу вам подборку?'
    }

    if (lowerQuestion.includes('собеседование') || lowerQuestion.includes('интервью')) {
        return 'Отличный вопрос! В AI Career Lab есть Симулятор собеседований, который поможет вам практиковаться. Хотите попробовать?'
    }

    if (lowerQuestion.includes('зарплат') || lowerQuestion.includes('зарплата')) {
        return 'По данным BATYS.HUB, средняя зарплата в Актау:\n- IT: 350-600K ₸\n- Нефтегаз: 400-800K ₸\n- Торговля: 200-400K ₸\n\nХотите узнать подробнее по конкретной профессии?'
    }

    return 'Я получил ваш вопрос! В настоящее время я могу помочь с:\n- Поиском работы в Актау\n- Составлением резюме\n- Подготовкой к собеседованию\n- Анализом рынка труда\n\nЗадайте мне конкретный вопрос!'
}