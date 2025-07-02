"use client"

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Listbox } from '@headlessui/react'
import { AuroraText } from '@/components/magicui/aurora-text'
import { GradientBorderButton } from '@/components/ui/GradientBorderButton'

// Country codes data with full names
type CountryCode = {
  code: string;
  country: string;
  name: string;
  flag: string;
};

// Country codes data for dropdown
const countryCodes: CountryCode[] = [
  // Popular and major countries first for better UX
  { code: '+1', country: 'US', name: 'United States', flag: '🇺🇸' },
  { code: '+44', country: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: '+91', country: 'IN', name: 'India', flag: '🇮🇳' },
  { code: '+971', country: 'AE', name: 'United Arab Emirates', flag: '🇦🇪' },
  { code: '+86', country: 'CN', name: 'China', flag: '🇨🇳' },
  { code: '+1', country: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: '+61', country: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: '+49', country: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: '+33', country: 'FR', name: 'France', flag: '🇫🇷' },
  { code: '+81', country: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: '+7', country: 'RU', name: 'Russia', flag: '🇷🇺' },
  { code: '+55', country: 'BR', name: 'Brazil', flag: '🇧🇷' },
  { code: '+52', country: 'MX', name: 'Mexico', flag: '🇲🇽' },
  { code: '+966', country: 'SA', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+65', country: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: '+82', country: 'KR', name: 'South Korea', flag: '🇰🇷' },
  { code: '+27', country: 'ZA', name: 'South Africa', flag: '🇿🇦' },
  { code: '+34', country: 'ES', name: 'Spain', flag: '🇪🇸' },
  { code: '+39', country: 'IT', name: 'Italy', flag: '🇮🇹' },
  { code: '+90', country: 'TR', name: 'Turkey', flag: '🇹🇷' },
  
  // Rest of the world alphabetically
  { code: '+93', country: 'AF', name: 'Afghanistan', flag: '🇦🇫' },
  { code: '+355', country: 'AL', name: 'Albania', flag: '🇦🇱' },
  { code: '+213', country: 'DZ', name: 'Algeria', flag: '🇩🇿' },
  { code: '+376', country: 'AD', name: 'Andorra', flag: '🇦🇩' },
  { code: '+244', country: 'AO', name: 'Angola', flag: '🇦🇴' },
  { code: '+54', country: 'AR', name: 'Argentina', flag: '🇦🇷' },
  { code: '+374', country: 'AM', name: 'Armenia', flag: '🇦🇲' },
  { code: '+43', country: 'AT', name: 'Austria', flag: '🇦🇹' },
  { code: '+994', country: 'AZ', name: 'Azerbaijan', flag: '🇦🇿' },
  { code: '+973', country: 'BH', name: 'Bahrain', flag: '🇧🇭' },
  { code: '+880', country: 'BD', name: 'Bangladesh', flag: '🇧🇩' },
  { code: '+375', country: 'BY', name: 'Belarus', flag: '🇧🇾' },
  { code: '+32', country: 'BE', name: 'Belgium', flag: '🇧🇪' },
  { code: '+501', country: 'BZ', name: 'Belize', flag: '🇧🇿' },
  { code: '+229', country: 'BJ', name: 'Benin', flag: '🇧🇯' },
  { code: '+975', country: 'BT', name: 'Bhutan', flag: '🇧🇹' },
  { code: '+591', country: 'BO', name: 'Bolivia', flag: '🇧🇴' },
  { code: '+387', country: 'BA', name: 'Bosnia and Herzegovina', flag: '🇧🇦' },
  { code: '+267', country: 'BW', name: 'Botswana', flag: '🇧🇼' },
  { code: '+673', country: 'BN', name: 'Brunei', flag: '🇧🇳' },
  { code: '+359', country: 'BG', name: 'Bulgaria', flag: '🇧🇬' },
  { code: '+226', country: 'BF', name: 'Burkina Faso', flag: '🇧🇫' },
  { code: '+257', country: 'BI', name: 'Burundi', flag: '🇧🇮' },
  { code: '+855', country: 'KH', name: 'Cambodia', flag: '🇰🇭' },
  { code: '+237', country: 'CM', name: 'Cameroon', flag: '🇨🇲' },
  { code: '+238', country: 'CV', name: 'Cape Verde', flag: '🇨🇻' },
  { code: '+236', country: 'CF', name: 'Central African Republic', flag: '🇨🇫' },
  { code: '+235', country: 'TD', name: 'Chad', flag: '🇹🇩' },
  { code: '+56', country: 'CL', name: 'Chile', flag: '🇨🇱' },
  { code: '+57', country: 'CO', name: 'Colombia', flag: '🇨🇴' },
  { code: '+242', country: 'CG', name: 'Congo', flag: '🇨🇬' },
  { code: '+506', country: 'CR', name: 'Costa Rica', flag: '🇨🇷' },
  { code: '+385', country: 'HR', name: 'Croatia', flag: '🇭🇷' },
  { code: '+53', country: 'CU', name: 'Cuba', flag: '🇨🇺' },
  { code: '+357', country: 'CY', name: 'Cyprus', flag: '🇨🇾' },
  { code: '+420', country: 'CZ', name: 'Czech Republic', flag: '🇨🇿' },
  { code: '+45', country: 'DK', name: 'Denmark', flag: '🇩🇰' },
  { code: '+253', country: 'DJ', name: 'Djibouti', flag: '🇩🇯' },
  { code: '+1809', country: 'DO', name: 'Dominican Republic', flag: '🇩🇴' },
  { code: '+593', country: 'EC', name: 'Ecuador', flag: '🇪🇨' },
  { code: '+20', country: 'EG', name: 'Egypt', flag: '🇪🇬' },
  { code: '+503', country: 'SV', name: 'El Salvador', flag: '🇸🇻' },
  { code: '+240', country: 'GQ', name: 'Equatorial Guinea', flag: '🇬🇶' },
  { code: '+291', country: 'ER', name: 'Eritrea', flag: '🇪🇷' },
  { code: '+372', country: 'EE', name: 'Estonia', flag: '🇪🇪' },
  { code: '+251', country: 'ET', name: 'Ethiopia', flag: '🇪🇹' },
  { code: '+679', country: 'FJ', name: 'Fiji', flag: '🇫🇯' },
  { code: '+358', country: 'FI', name: 'Finland', flag: '🇫🇮' },
  { code: '+241', country: 'GA', name: 'Gabon', flag: '🇬🇦' },
  { code: '+220', country: 'GM', name: 'Gambia', flag: '🇬🇲' },
  { code: '+995', country: 'GE', name: 'Georgia', flag: '🇬🇪' },
  { code: '+233', country: 'GH', name: 'Ghana', flag: '🇬🇭' },
  { code: '+30', country: 'GR', name: 'Greece', flag: '🇬🇷' },
  { code: '+502', country: 'GT', name: 'Guatemala', flag: '🇬🇹' },
  { code: '+224', country: 'GN', name: 'Guinea', flag: '🇬🇳' },
  { code: '+852', country: 'HK', name: 'Hong Kong', flag: '🇭🇰' },
  { code: '+36', country: 'HU', name: 'Hungary', flag: '🇭🇺' },
  { code: '+354', country: 'IS', name: 'Iceland', flag: '🇮🇸' },
  { code: '+62', country: 'ID', name: 'Indonesia', flag: '🇮🇩' },
  { code: '+98', country: 'IR', name: 'Iran', flag: '🇮🇷' },
  { code: '+964', country: 'IQ', name: 'Iraq', flag: '🇮🇶' },
  { code: '+353', country: 'IE', name: 'Ireland', flag: '🇮🇪' },
  { code: '+972', country: 'IL', name: 'Israel', flag: '🇮🇱' },
  { code: '+962', country: 'JO', name: 'Jordan', flag: '🇯🇴' },
  { code: '+7', country: 'KZ', name: 'Kazakhstan', flag: '🇰🇿' },
  { code: '+254', country: 'KE', name: 'Kenya', flag: '🇰🇪' },
  { code: '+965', country: 'KW', name: 'Kuwait', flag: '🇰🇼' },
  { code: '+996', country: 'KG', name: 'Kyrgyzstan', flag: '🇰🇬' },
  { code: '+856', country: 'LA', name: 'Laos', flag: '🇱🇦' },
  { code: '+371', country: 'LV', name: 'Latvia', flag: '🇱🇻' },
  { code: '+961', country: 'LB', name: 'Lebanon', flag: '🇱🇧' },
  { code: '+231', country: 'LR', name: 'Liberia', flag: '🇱🇷' },
  { code: '+218', country: 'LY', name: 'Libya', flag: '🇱🇾' },
  { code: '+370', country: 'LT', name: 'Lithuania', flag: '🇱🇹' },
  { code: '+352', country: 'LU', name: 'Luxembourg', flag: '🇱🇺' },
  { code: '+60', country: 'MY', name: 'Malaysia', flag: '🇲🇾' },
  { code: '+960', country: 'MV', name: 'Maldives', flag: '🇲🇻' },
  { code: '+356', country: 'MT', name: 'Malta', flag: '🇲🇹' },
  { code: '+230', country: 'MU', name: 'Mauritius', flag: '🇲🇺' },
  { code: '+373', country: 'MD', name: 'Moldova', flag: '🇲🇩' },
  { code: '+212', country: 'MA', name: 'Morocco', flag: '🇲🇦' },
  { code: '+258', country: 'MZ', name: 'Mozambique', flag: '🇲🇿' },
  { code: '+95', country: 'MM', name: 'Myanmar', flag: '🇲🇲' },
  { code: '+264', country: 'NA', name: 'Namibia', flag: '🇳🇦' },
  { code: '+977', country: 'NP', name: 'Nepal', flag: '🇳🇵' },
  { code: '+31', country: 'NL', name: 'Netherlands', flag: '🇳🇱' },
  { code: '+64', country: 'NZ', name: 'New Zealand', flag: '🇳🇿' },
  { code: '+505', country: 'NI', name: 'Nicaragua', flag: '🇳🇮' },
  { code: '+227', country: 'NE', name: 'Niger', flag: '🇳🇪' },
  { code: '+234', country: 'NG', name: 'Nigeria', flag: '🇳🇬' },
  { code: '+47', country: 'NO', name: 'Norway', flag: '🇳🇴' },
  { code: '+968', country: 'OM', name: 'Oman', flag: '🇴🇲' },
  { code: '+92', country: 'PK', name: 'Pakistan', flag: '🇵🇰' },
  { code: '+970', country: 'PS', name: 'Palestine', flag: '🇵🇸' },
  { code: '+507', country: 'PA', name: 'Panama', flag: '🇵🇦' },
  { code: '+675', country: 'PG', name: 'Papua New Guinea', flag: '🇵🇬' },
  { code: '+595', country: 'PY', name: 'Paraguay', flag: '🇵🇾' },
  { code: '+51', country: 'PE', name: 'Peru', flag: '🇵🇪' },
  { code: '+63', country: 'PH', name: 'Philippines', flag: '🇵🇭' },
  { code: '+48', country: 'PL', name: 'Poland', flag: '🇵🇱' },
  { code: '+351', country: 'PT', name: 'Portugal', flag: '🇵🇹' },
  { code: '+974', country: 'QA', name: 'Qatar', flag: '🇶🇦' },
  { code: '+40', country: 'RO', name: 'Romania', flag: '🇷🇴' },
  { code: '+250', country: 'RW', name: 'Rwanda', flag: '🇷🇼' },
  { code: '+221', country: 'SN', name: 'Senegal', flag: '🇸🇳' },
  { code: '+381', country: 'RS', name: 'Serbia', flag: '🇷🇸' },
  { code: '+421', country: 'SK', name: 'Slovakia', flag: '🇸🇰' },
  { code: '+386', country: 'SI', name: 'Slovenia', flag: '🇸🇮' },
  { code: '+252', country: 'SO', name: 'Somalia', flag: '🇸🇴' },
  { code: '+211', country: 'SS', name: 'South Sudan', flag: '🇸🇸' },
  { code: '+94', country: 'LK', name: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+249', country: 'SD', name: 'Sudan', flag: '🇸🇩' },
  { code: '+46', country: 'SE', name: 'Sweden', flag: '🇸🇪' },
  { code: '+41', country: 'CH', name: 'Switzerland', flag: '🇨🇭' },
  { code: '+963', country: 'SY', name: 'Syria', flag: '🇸🇾' },
  { code: '+886', country: 'TW', name: 'Taiwan', flag: '🇹🇼' },
  { code: '+992', country: 'TJ', name: 'Tajikistan', flag: '🇹🇯' },
  { code: '+255', country: 'TZ', name: 'Tanzania', flag: '🇹🇿' },
  { code: '+66', country: 'TH', name: 'Thailand', flag: '🇹🇭' },
  { code: '+228', country: 'TG', name: 'Togo', flag: '🇹🇬' },
  { code: '+216', country: 'TN', name: 'Tunisia', flag: '🇹🇳' },
  { code: '+993', country: 'TM', name: 'Turkmenistan', flag: '🇹🇲' },
  { code: '+256', country: 'UG', name: 'Uganda', flag: '🇺🇬' },
  { code: '+380', country: 'UA', name: 'Ukraine', flag: '🇺🇦' },
  { code: '+598', country: 'UY', name: 'Uruguay', flag: '🇺🇾' },
  { code: '+998', country: 'UZ', name: 'Uzbekistan', flag: '🇺🇿' },
  { code: '+58', country: 'VE', name: 'Venezuela', flag: '🇻🇪' },
  { code: '+84', country: 'VN', name: 'Vietnam', flag: '🇻🇳' },
  { code: '+967', country: 'YE', name: 'Yemen', flag: '🇾🇪' },
  { code: '+260', country: 'ZM', name: 'Zambia', flag: '🇿🇲' },
  { code: '+263', country: 'ZW', name: 'Zimbabwe', flag: '🇿🇼' },
]

type Agent = {
  id: string;
  name: string;
  description: string;
  phoneNumberId: string;
  icon: React.ReactNode;
  industries: Industry[];
};

type Industry = {
  id: string;
  name: string;
  description: string;
  agentId?: string;
  language?: string;
};

// Placeholder agents - to be replaced with real data
const agents: Agent[] = [
  {
    id: "4QrU2MrUVVzDyockHplA",
    name: "Customer Support Agent",
    description: "Handles general product inquiries and support issues",
    phoneNumberId: "ceDC1GqQEiHTkm9X4ocj",
    icon: (
      <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15C21 15.5523 20.5523 16 20 16H15.5C15.5 16 15 16 15 16.5V17.5C15 17.5 15 18 15.5 18H17C17.5523 18 18 18.4477 18 19C18 19.5523 17.5523 20 17 20H13.5C13 20 13 19.5 13 19.5V10.5C13 10.5 13 10 13.5 10H20C20.5523 10 21 10.4477 21 11V15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 10V8C13 5.79086 11.2091 4 9 4H7C4.79086 4 3 5.79086 3 8V16C3 18.2091 4.79086 20 7 20H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.0002 10V6.5C17.0002 6.22386 16.7763 6 16.5002 6H15.5002C15.224 6 15.0002 6.22386 15.0002 6.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20.5 10V7.5C20.5 7.22386 20.2761 7 20 7H19C18.7239 7 18.5 7.22386 18.5 7.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    industries: [
      {
        id: "telecom",
        name: "Telecommunications",
        description: "Service & billing queries",
        agentId: "1MwbMwEyccpddyqzY7GQ",
        language: "Arabic"
      },
      {
        id: "travel",
        name: "Travel & Airlines",
        description: "Bookings, changes, customer care",
        agentId: "3pPaXkypJeGB260trRpr",
        language: "Hindi"
      },
      {
        id: "banking",
        name: "Banking",
        description: "Account help, fraud support",
        agentId: "NLfnFTj74dc4A7101h4v",
        language: "English"
      }
    ]
  },
  {
    id: "P6GinvJTbVAQ7zqColtW",
    name: "Receptionist",
    description: "Handles initial inquiries and directs calls appropriately",
    phoneNumberId: "ceDC1GqQEiHTkm9X4ocj",
    icon: (
      <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 16.8V13.2C20 11.9397 19.5786 10.7157 18.8284 9.71569L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 6V5C16 4.44772 15.5523 4 15 4H11C10.4477 4 10 4.44772 10 5V8C10 8.55228 10.4477 9 11 9H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 13.2V16.8C4 18.5673 5.43269 20 7.2 20H16.8C18.5673 20 20 18.5673 20 16.8V13.2C20 11.4327 18.5673 10 16.8 10H7.2C5.43269 10 4 11.4327 4 13.2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 15H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    industries: [
      {
        id: "hospitality",
        name: "Hospitality",
        description: "Hotel services & booking assistance",
        agentId: "SkP2iIFiUM5t3vgQo3mh",
        language: "English"
      },
      {
        id: "healthcare",
        name: "Healthcare",
        description: "Medical scheduling & information",
        agentId: "Oyl1rMTOx5ybmu9f2Lza",
        language: "English"
      },
      {
        id: "legal",
        name: "Legal Services",
        description: "Legal assistance & consultation",
        agentId: "N0aXs6jJT5tQK29wKfl5",
        language: "English"
      }
    ]
  },
  {
    id: "ovEsO8yQKcPMNgeb8iQB",
    name: "Due Followup Agent",
    description: "Manages payment reminders and follows up on due accounts",
    phoneNumberId: "ceDC1GqQEiHTkm9X4ocj",
    icon: (
      <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0503 10.6066L7.93934 12.7175C7.35355 13.3033 7.35355 14.2532 7.93934 14.839L9.34355 16.2432C9.92934 16.829 10.8792 16.829 11.465 16.2432L13.5761 14.1322" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.5761 14.1322L15.6871 12.0211C16.2729 11.4353 16.2729 10.4854 15.6871 9.89963L14.2829 8.49541C13.6971 7.90963 12.7472 7.90963 12.1614 8.49541L10.0503 10.6066" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3V4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 19.5V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.5 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.6568 6.34326L16.5962 7.40381" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.6568 17.6568L16.5962 16.5962" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.34326 17.6568L7.40381 16.5962" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.34326 6.34326L7.40381 7.40381" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    industries: [
      {
        id: "insurance",
        name: "Insurance",
        description: "Renewals, claims, policy updates",
        agentId: "WapZ7muFh73XmlP59Ew0",
        language: "English"
      },
      {
        id: "education",
        name: "Education / EdTech",
        description: "Student onboarding, course follow-ups",
        agentId: "FAYvfJa9gc4JuuWBxKOm",
        language: "English"
      },
      {
        id: "ecommerce",
        name: "Subscription Services",
        description: "Renewal reminders, plan upgrades, retention",
        agentId: "k0EXg8zCtlWQynlN9KUH",
        language: "English"
      }
    ]
  }
];

export default function LiveDemo() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [countryCode, setCountryCode] = useState(countryCodes[0])
  const [countrySearch, setCountrySearch] = useState("")
  const [selectedAgentId, setSelectedAgentId] = useState(agents[0].id)
  const [selectedIndustryId, setSelectedIndustryId] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [particles, setParticles] = useState<Array<{left: string, top: string}>>([])
  
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Generate particle positions on client-side only
  useEffect(() => {
    const newParticles = Array(10).fill(0).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    }))
    setParticles(newParticles)
  }, [])

  // Reset selected industry when agent changes
  useEffect(() => {
    setSelectedIndustryId(null);
  }, [selectedAgentId]);

  // Get the currently selected agent
  const selectedAgent = agents.find(agent => agent.id === selectedAgentId) || agents[0];

  // Create a stable callback for industry selection that works across agents
  const handleIndustrySelect = useCallback((agentId: string, industryId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // First update the agent ID
    // Using a sync update to ensure agent changes first before industry
    // This helps when switching between different agents
    setSelectedAgentId(agentId);
    
    // Use a small timeout to ensure agent is updated before industry
    // This helps with the state batching in React
    setTimeout(() => {
      setSelectedIndustryId(industryId);
    }, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!name || !email || !phone) {
      setError("All fields are required")
      return
    }
    
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address")
      return
    }
    
    if (!isValidPhoneNumber(phone)) {
      setError("Please enter a valid phone number")
      return
    }

    // Industry validation
    if (!selectedIndustryId) {
      setError("Please select an industry for your demo")
      return
    }

    setError("")
    setIsSubmitting(true)
    
    try {
      const selectedIndustry = selectedAgent.industries.find(i => i.id === selectedIndustryId);
      
      // Use industry-specific agent ID if available, otherwise fall back to the parent agent ID
      const effectiveAgentId = selectedIndustry?.agentId || selectedAgentId;
      
      const response = await fetch('/api/trial-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone: `${countryCode.code}${phone.startsWith(countryCode.code) ? phone.substring(countryCode.code.length) : phone}`,
          agentId: effectiveAgentId,
          agentPhoneNumberId: selectedAgent.phoneNumberId,
          industry: selectedIndustry?.name || ''
        }),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong')
      }
      
      // If call was initiated but data save failed, still show success
      if (data.success) {
        setSuccess(true)
        setName("")
        setEmail("")
        setPhone("")
      } else {
        throw new Error(data.message || 'Failed to initiate call')
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to initiate call. Please try again.'
      // If the error message is specifically about saving user data but call was initiated
      if (errorMessage.includes('save user data')) {
        // Show success anyway since the call might have been placed
        setSuccess(true)
        console.warn('Call initiated but failed to save data:', errorMessage)
      } else {
        setError(errorMessage)
      }
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
  
  const isValidPhoneNumber = (phone: string) => {
    // Basic phone validation - allow different formats without country code
    return /^\d{5,15}$/.test(phone.replace(/[\s\-\(\)]/g, ''))
  }

  return (
    <section id="liveDemo" ref={sectionRef} className="relative py-16 pt-14 md:pt-16 overflow-hidden bg-transparent">
      {/* Global background is now used instead */}
      
      {/* Subtle visual separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
      
      {/* Floating particle elements - client-side only */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={`particle-${particle.left}-${particle.top}`}
            className="absolute w-3 h-3 rounded-full bg-accent/20"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              ease: "easeInOut",
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-8 sm:mb-10"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-glass mb-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="animate-pulse h-2 w-2 rounded-full bg-accent"></span>
            <p className="text-sm font-medium">Try It Now</p>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5">
            Experience <AuroraText colors={["#6366f1", "#8b5cf6", "#ec4899", "#06b6d4"]}>Live Demo</AuroraText> of Our AI Voice Agents
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-[color:var(--foreground-secondary)] max-w-3xl mx-auto">
            Interact with our AI voice agents in real-time. Fill out the form, and we'll call your phone immediately to demonstrate how ZAVIS can transform your customer interactions.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-stretch justify-center max-w-6xl mx-auto gap-6 lg:gap-8">
          {/* Agent Selection */}
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { 
                  duration: 0.6,
                  delay: 0.4
                } 
              }
            }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Select an AI Voice Agent</h3>
            
            <div className="h-full flex flex-col overflow-auto pr-1 space-y-4">
              {agents.map((agent) => (
                <div key={agent.id} className="pb-1 relative z-0" data-agent-id={agent.id}>
                  {/* Agent Header as simple heading */}
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="bg-accent/10 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="scale-75">{agent.icon}</div>
                    </div>
                    <h4 className="text-sm font-medium">{agent.name}</h4>
                  </div>
                  
                  {/* Industry Selection - more compact */}
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2.5 relative">
                    {agent.industries.map((industry) => (
                      <motion.button
                        key={industry.id}
                        type="button"
                        onClick={(e) => handleIndustrySelect(agent.id, industry.id, e)}
                        data-industry-id={industry.id}
                        data-agent-id={agent.id}
                        className={`
                          px-3 py-3 rounded-lg cursor-pointer flex flex-col relative z-20 transition-all duration-200
                          ${(selectedAgentId === agent.id && selectedIndustryId === industry.id)
                            ? 'bg-accent/20 border-2 border-accent shadow-lg shadow-accent/20 ring-2 ring-accent/50 ring-offset-1 ring-offset-background transform scale-[1.02]' 
                            : 'bg-glass border border-solid border-[color:var(--glass-border)] hover:bg-accent/5 hover:border-accent/20 hover:shadow-md'
                          }
                        `}
                        initial={false}
                        whileHover={{ 
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ 
                          scale: 0.98,
                          transition: { duration: 0.1 }
                        }}
                      >
                        {/* Selected indicator */}
                        {(selectedAgentId === agent.id && selectedIndustryId === industry.id) && (
                          <div className="absolute top-2 right-2 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        )}
                        
                        <div className="mb-1.5">
                          <h4 className={`font-medium text-sm ${
                            (selectedAgentId === agent.id && selectedIndustryId === industry.id)
                              ? 'text-accent font-semibold' 
                              : ''
                          }`}>
                            {industry.name}
                          </h4>
                        </div>
                        
                        <p className={`text-[10px] whitespace-nowrap overflow-hidden text-ellipsis ${
                          (selectedAgentId === agent.id && selectedIndustryId === industry.id)
                            ? 'text-accent/80' 
                            : 'text-[color:var(--foreground-secondary)]'
                        }`}>
                          {industry.description}
                        </p>
                        
                        <div className="mt-1">
                          <span className={`
                            text-[8px] uppercase tracking-wider font-medium rounded-full px-1.5 py-0.5 inline-block
                            ${industry.language === "Arabic"
                              ? "bg-amber-500/10 text-amber-500"
                              : industry.language === "Hindi" 
                                ? "bg-violet-500/10 text-violet-500"
                                : "bg-emerald-500/10 text-emerald-500"
                            }
                          `}>
                            {industry.language}
                          </span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { 
                  duration: 0.6,
                  delay: 0.5
                } 
              }
            }}
          >
            <div className="relative flex flex-col h-full">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-accent/5 blur-2xl -z-10"></div>
              
              <div className="bg-glass rounded-2xl p-4 sm:p-5 border border-[color:var(--glass-border)] shadow-lg backdrop-blur-sm flex-grow flex flex-col h-full">
                {success ? (
                  <motion.div 
                    className="text-center flex flex-col justify-between h-full py-8 sm:py-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div>
                    <motion.div 
                        className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.5, times: [0, 0.8, 1] }}
                    >
                        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path 
                          d="M5 13L9 17L19 7" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        />
                      </svg>
                    </motion.div>
                    
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Call Initiated!</h3>
                      <p className="text-sm sm:text-base text-[color:var(--foreground-secondary)] max-w-md mx-auto">
                        We&apos;re calling your phone right now. Please answer to speak with our AI voice agent.
                    </p>
                    </div>
                    
                    <div className="mt-8 sm:mt-12">
                      <button 
                        onClick={() => setSuccess(false)} 
                        className="btn-secondary mx-auto py-2.5 sm:py-3 px-6 sm:px-8 text-sm sm:text-base"
                      >
                        Try Another Call
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex flex-col h-full">
                    <div className="mb-3 sm:mb-4">
                      <h3 className="text-base sm:text-lg font-semibold mb-1">Ready to experience ZAVIS?</h3>
                      <p className="text-xs text-[color:var(--foreground-secondary)]">
                        First select an agent and industry, then enter your details below for a customized live demonstration.
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-3 flex-grow flex flex-col">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Your Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="w-4 h-4 text-[color:var(--foreground-secondary)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M4 20V19C4 15.6863 6.68629 13 10 13H14C17.3137 13 20 15.6863 20 19V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                            className="w-full pl-8 pr-4 py-2 bg-background/50 border border-[color:var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-sm"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="w-4 h-4 text-[color:var(--foreground-secondary)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 8C3 6.34315 4.34315 5 6 5H18C19.6569 5 21 6.34315 21 8V16C21 17.6569 19.6569 19 18 19H6C4.34315 19 3 17.6569 3 16V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full pl-8 pr-4 py-2 bg-background/50 border border-[color:var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-sm"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
                          Phone Number
                        </label>
                        <div className="flex items-stretch">
                          <Listbox value={countryCode} onChange={setCountryCode}>
                            <div className="relative">
                              <Listbox.Button className="relative min-w-16 w-16 sm:w-20 flex items-center justify-between gap-1 pl-2 sm:pl-3 pr-1 sm:pr-2 py-2 bg-background/50 border border-[color:var(--border)] rounded-l-lg border-r-0 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-xs sm:text-sm">
                                <span className="mr-0.5 sm:mr-1">{countryCode.flag}</span>
                                <span className="font-medium text-xs sm:text-sm truncate">{countryCode.code}</span>
                                <svg className="w-3 h-3 text-[color:var(--foreground-secondary)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </Listbox.Button>
                              <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-60 sm:w-72 overflow-auto rounded-lg bg-background py-1 border border-[color:var(--glass-border)] shadow-lg focus:outline-none">
                                <div className="sticky top-0 bg-background p-2 border-b border-[color:var(--glass-border)]">
                                  <input
                                    type="text"
                                    value={countrySearch}
                                    onChange={(e) => setCountrySearch(e.target.value)}
                                    placeholder="Search country..."
                                    className="w-full px-3 py-2 bg-background/50 border border-[color:var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-sm"
                                    onClick={(e) => e.stopPropagation()}
                                  />
                                </div>
                                {countryCodes
                                  .filter(country => 
                                    country.name.toLowerCase().includes(countrySearch.toLowerCase()) || 
                                    country.code.includes(countrySearch)
                                  )
                                  .map((country) => (
                                    <Listbox.Option
                                      key={`${country.code}-${country.country}`}
                                      value={country}
                                      className={({ active, selected }) => `
                                        relative cursor-pointer select-none py-2 px-4 ${
                                          active ? 'bg-accent/10' : ''
                                        } ${
                                          selected ? 'bg-accent/20' : ''
                                        }
                                      `}
                                    >
                                      {({ selected }) => (
                                        <div className="flex items-center gap-2">
                                          <span className="text-lg">{country.flag}</span>
                                          <div className="flex flex-col">
                                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                              {country.name}
                                            </span>
                                            <span className="text-xs text-[color:var(--foreground-secondary)]">
                                              {country.code}
                                            </span>
                                          </div>
                                          {selected && (
                                            <span className="absolute inset-y-0 right-4 flex items-center text-accent">
                                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                              </svg>
                                            </span>
                                          )}
                                        </div>
                                      )}
                                    </Listbox.Option>
                                  ))}
                              </Listbox.Options>
                            </div>
                          </Listbox>
                          <div className="relative flex-grow">
                            <input
                              id="phone"
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="Enter your phone number"
                              className="w-full pl-4 pr-4 py-2 bg-background/50 border border-[color:var(--border)] rounded-r-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-sm"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      
                      {error && (
                        <motion.div 
                          className="bg-red-500/10 border border-red-500/30 text-red-500 px-3 py-2 rounded-lg text-xs"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex items-center gap-1.5">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                              <path d="M12 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                              <circle cx="12" cy="16" r="1" fill="currentColor"/>
                            </svg>
                            {error}
                          </div>
                        </motion.div>
                      )}
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                        <GradientBorderButton
                          onClick={handleSubmit}
                        disabled={isSubmitting}
                          className="w-full sm:w-auto"
                        >
                          {isSubmitting ? 'Starting Call...' : 'Call Me Now'}
                        </GradientBorderButton>
                      </div>
                      
                      <p className="text-xs text-center text-[color:var(--foreground-secondary)] mt-1">
                        By clicking "Call Me Now", you agree to our Terms of Service and Privacy Policy.
                      </p>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 