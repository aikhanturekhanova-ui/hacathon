import { motion } from 'motion/react'
import { MapPin, Clock, DollarSign, Bell, Send, Building2, Users } from 'lucide-react'

interface JobFeedProps {
    userMode: 'candidate' | 'employer'
}

const jobs = [
    {
        id: 1,
        title: 'Frontend Разработчик',
        company: 'ТОО "Каспиан Ойл"',
        salary: '350 000 - 500 000 ₸',
        location: 'Мкр 1',
        type: 'Полная занятость',
        remote: false,
        logo: 'КО',
        posted: '2 часа назад',
        description: 'Требуется опытный frontend разработчик для работы над корпоративным порталом.'
    },
    {
        id: 2,
        title: 'Менеджер по продажам',
        company: 'ТОО "Aktau Trade"',
        salary: '250 000 - 400 000 ₸',
        location: 'Центр',
        type: 'Полная занятость',
        remote: false,
        logo: 'AT',
        posted: '5 часов назад',
        description: 'Поиск менеджера для развития клиентской базы в нефтегазовом секторе.'
    },
    {
        id: 3,
        title: 'DevOps Инженер',
        company: 'ТОО "Digital Aktau"',
        salary: '400 000 - 600 000 ₸',
        location: 'Новый город',
        type: 'Удалённая работа',
        remote: true,
        logo: 'DA',
        posted: '1 день назад',
        description: 'Ищем специалиста для построения CI/CD pipeline и управления инфраструктурой.'
    },
    {
        id: 4,
        title: 'Бухгалтер',
        company: 'ТОО "Морской порт Актау"',
        salary: '200 000 - 280 000 ₸',
        location: 'Промзона',
        type: 'Полная занятость',
        remote: false,
        logo: 'МП',
        posted: '2 дня назад',
        description: 'Ведение бухгалтерского учета в соответствии с законодательством РК.'
    },
    {
        id: 5,
        title: 'UI/UX Дизайнер',
        company: 'ТОО "Batys Studio"',
        salary: '300 000 - 450 000 ₸',
        location: 'Мкр 5',
        type: 'Удалённая работа',
        remote: true,
        logo: 'BS',
        posted: '3 часа назад',
        description: 'Создание современных интерфейсов для веб-приложений и мобильных приложений.'
    },
    {
        id: 6,
        title: 'Системный администратор',
        company: 'ТОО "КазМунайГаз"',
        salary: '350 000 - 500 000 ₸',
        location: 'Мкр 2',
        type: 'Полная занятость',
        remote: false,
        logo: 'КМГ',
        posted: '4 часа назад',
        description: 'Администрирование серверов и сетевой инфраструктуры компании.'
    }
]

export function JobFeed({ userMode }: JobFeedProps) {
    if (userMode === 'employer') {
        return <EmployerJobFeed />
    }

    return (
        <section>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-[#0052FF]" />
                    <h2 className="text-2xl font-bold text-white">Актуальные вакансии</h2>
                </div>
                <span className="text-gray-500 text-sm">{jobs.length} вакансий</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {jobs.map((job, index) => (
                    <motion.div
                        key={job.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass rounded-3xl p-6 hover:border-[#00FFB9]/30 transition-all duration-300 group"
                    >
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-lg font-bold text-[#00FFB9]">
                                {job.logo}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-white group-hover:text-[#00FFB9] transition-colors">
                                    {job.title}
                                </h3>
                                <p className="text-gray-400">{job.company}</p>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="flex flex-wrap gap-3 mb-4">
                            <span className="flex items-center gap-1.5 text-sm text-gray-400">
                                <DollarSign className="w-4 h-4 text-[#00FFB9]" />
                                {job.salary}
                            </span>
                            <span className="flex items-center gap-1.5 text-sm text-gray-400">
                                <MapPin className="w-4 h-4 text-[#0052FF]" />
                                {job.location}
                            </span>
                            <span className="flex items-center gap-1.5 text-sm text-gray-400">
                                <Clock className="w-4 h-4" />
                                {job.type}
                            </span>
                            {job.remote && (
                                <span className="px-2 py-1 bg-[#00FFB9]/10 text-[#00FFB9] text-xs rounded-full">
                                    Удалённо
                                </span>
                            )}
                        </div>

                        {/* Description */}
                        <p className="text-gray-500 text-sm mb-4">{job.description}</p>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                            <span className="text-xs text-gray-500">{job.posted}</span>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-400 hover:text-white hover:border-white/20 transition-colors flex items-center gap-2">
                                    <Bell className="w-4 h-4" />
                                    Уведомить
                                </button>
                                <button className="gradient-button px-4 py-2 rounded-xl text-sm flex items-center gap-2">
                                    <Send className="w-4 h-4" />
                                    Откликнуться
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

function EmployerJobFeed() {
    return (
        <section>
            <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-[#0052FF]" />
                <h2 className="text-2xl font-bold text-white">Мои вакансии</h2>
            </div>

            <div className="glass rounded-3xl p-8 text-center">
                <Users className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Пока нет вакансий</h3>
                <p className="text-gray-500 mb-6">Создайте свою первую вакансию, чтобы найти лучших кандидатов</p>
                <button className="gradient-button px-8 py-3 rounded-xl font-medium inline-flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    Создать вакансию
                </button>
            </div>
        </section>
    )
}