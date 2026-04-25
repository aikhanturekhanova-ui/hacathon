import { useState } from 'react'
import { Search, MapPin, ChevronDown } from 'lucide-react'
import { Button } from '../../components/Button'
const aktauDistricts = [
    'Мкр 1', 'Мкр 2', 'Мкр 3', 'Мкр 4', 'Мкр 5',
    'Мкр 6', 'Мкр 7', 'Мкр 8', 'Мкр 9', 'Мкр 10',
    'Мкр 11', 'Мкр 12', 'Мкр 13', 'Мкр 14', 'Мкр 15',
    'Новый город', 'Центр', 'Промзона', 'Аэропорт'
]

const jobTypes = ['Полная занятость', 'Частичная занятость', 'Удалённая работа', 'Стажировка']

export function SearchBar() {
    const [districtOpen, setDistrictOpen] = useState(false)
    const [selectedDistrict, setSelectedDistrict] = useState('Все районы')
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <div className="glass rounded-3xl p-6">
            <div className="flex flex-col lg:flex-row gap-4">
                {/* Search Input */}
                <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Должность или компания..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#0052FF] transition-colors"
                    />
                </div>

                {/* District Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setDistrictOpen(!districtOpen)}
                        className="flex items-center gap-2 px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:text-white hover:border-white/20 transition-colors min-w-[200px]"
                    >
                        <MapPin className="w-5 h-5 text-gray-500" />
                        <span className="flex-1 text-left">{selectedDistrict}</span>
                        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${districtOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {districtOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-[#151923] border border-white/10 rounded-xl overflow-hidden z-20 max-h-64 overflow-y-auto">
                            {aktauDistricts.map((district) => (
                                <button
                                    key={district}
                                    onClick={() => {
                                        setSelectedDistrict(district)
                                        setDistrictOpen(false)
                                    }}
                                    className="w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                                >
                                    {district}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Search Button */}
                <Button>Найти</Button>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                {jobTypes.map((type) => (
                    <button
                        key={type}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 hover:text-white hover:border-[#0052FF]/50 transition-colors"
                    >
                        {type}
                    </button>
                ))}
            </div>
        </div>
    )
}