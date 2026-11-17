import { useEffect, useState } from 'react'
import logo from './assets/image/logo.png'
import gallery1 from './assets/image/gallery/img9.jpg'
import gallery2 from './assets/image/gallery/img11.jpg'
import gallery3 from './assets/image/gallery/img12.jpg'
import gallery4 from './assets/image/gallery/img14.jpg'
import gallery5 from './assets/image/gallery/gallery.jpg'
import gallery6 from './assets/image/gallery/support.jpg'
import aboutImage from './assets/image/about/Homepage.jpeg'
import activity1 from './assets/image/activities/work1.jpg'
import activity2 from './assets/image/activities/work2.jpg'
import activity3 from './assets/image/activities/work3.jpg'
import serviceCare from './assets/image/services/care.jpg'
import serviceMedical from './assets/image/services/medical assitence.webp'
import serviceFood from './assets/image/services/food.jpg'
import serviceNurse from './assets/image/services/nurse.jpg'
import servicePhysio from './assets/image/services/pysiotheropist.jpg'
import serviceRecreation from './assets/image/services/recreation.jpg'
import serviceSpiritual from './assets/image/services/spritual.jpg'
import serviceEmergency from './assets/image/services/emerence.jpg'
import './App.css'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'activities', label: 'Activities' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'admission', label: 'Admission procedure' },
  { id: 'contact', label: 'Contact Us' },
  { id: 'settings', label: 'Settings' },
]

const themes = [
  { value: 'default', label: 'Default' },
  { value: 'ocean', label: 'Ocean' },
  { value: 'forest', label: 'Forest' },
  { value: 'sunset', label: 'Sunset' },
  { value: 'midnight', label: 'Midnight' },
]

const services = [
  {
    title: 'Residential Care',
    icon: '🏡',
    image: serviceNurse,
    text: 'Safe and comfortable long-term living with dedicated support for daily routines.',
  },
  {
    title: 'Healthy & Nutritious Food',
    icon: '🥗',
    image: serviceFood,
    text: 'Balanced meals prepared with care to support wellness and strength.',
  },
  {
    title: 'Medical Assistance',
    icon: '🩺',
    image: serviceMedical,
    text: 'Timely medical support and coordination for routine and emergency needs.',
  },
  {
    title: 'Nursing Care',
    icon: '💙',
    image: serviceCare,
    text: 'Professional attention for personal care, comfort, and well-being.',
  },
  {
    title: 'Physiotherapy',
    icon: '🦵',
    image: servicePhysio,
    text: 'Gentle therapy sessions designed to improve movement and reduce discomfort.',
  },
  {
    title: 'Spiritual Support',
    icon: '🕊️',
    image: serviceSpiritual,
    text: 'Peaceful prayer, reflection, and emotional encouragement in a compassionate setting.',
  },
  {
    title: 'Recreation',
    icon: '🎶',
    image: serviceRecreation,
    text: 'Music, conversation, and joyful activities that keep the heart engaged.',
  },
  {
    title: 'Emergency Care',
    icon: '🚑',
    image: serviceEmergency,
    text: 'Rapid assistance and dependable response whenever urgent support is needed.',
  },
]

const activities = [
  {
    title: 'Strength & Balance',
    icon: '💪',
    image: activity1,
    text: 'Light strength training and balance exercises tailored for seniors to build confidence and mobility.',
  },
  {
    title: 'Outdoor Walks',
    icon: '🚶‍♀️',
    image: activity2,
    text: 'Guided nature walks that encourage fresh air, gentle movement, and friendly conversation.',
  },
  {
    title: 'Relaxed Fitness',
    icon: '🧘‍♀️',
    image: activity3,
    text: 'Low-impact stretches and breathing exercises designed to soothe the body and mind.',
  },
]

const gallery = [
  {
    src: gallery1,
    alt: 'Residents enjoying companionship',
    category: 'Residents',
  },
  {
    src: gallery2,
    alt: 'Community event gathering',
    category: 'Events',
  },
  {
    src: gallery3,
    alt: 'Festival celebration in the community',
    category: 'Festivals',
  },
  {
    src: gallery4,
    alt: 'Daily life at the care home',
    category: 'Daily Life',
  },
  {
    src: gallery5,
    alt: 'Volunteers supporting the home',
    category: 'Volunteers',
  },
  {
    src: gallery6,
    alt: 'Support and care provided at the home',
    category: 'Support',
  },
]

const stats = [
  { value: '2019', label: 'Founded' },
  { value: '24+', label: 'Residents' },
  { value: '12', label: 'Staff Members' },
  { value: '40+', label: 'Volunteers' },
]

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [loaded, setLoaded] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'default'

    return window.localStorage.getItem('santham-theme') || 'default'
  })
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false

    const savedMode = window.localStorage.getItem('santham-dark-mode')
    if (savedMode !== null) {
      return savedMode === 'true'
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 900)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const fullText =
      'A Loving Home Where Every Senior Citizen Lives with Dignity, Care, and Compassion.'
    let index = 0

    const typingTimer = window.setInterval(() => {
      index += 1
      setTypedText(fullText.slice(0, index))

      if (index >= fullText.length) {
        window.clearInterval(typingTimer)
      }
    }, 35)

    return () => window.clearInterval(typingTimer)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      { threshold: [0.5], rootMargin: '-10% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    window.localStorage.setItem('santham-dark-mode', String(darkMode))
  }, [darkMode])

  useEffect(() => {
    window.localStorage.setItem('santham-theme', theme)
  }, [theme])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.settings-menu')) {
        setSettingsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div className={`app-shell ${loaded ? 'loaded' : ''} ${darkMode ? 'dark-mode' : ''} theme-${theme}`}>
      {!loaded && (
        <div className="page-loader" aria-label="Loading sanctuary page">
          <div className="loader-ring" />
          <p>Preparing a warm welcome</p>
        </div>
      )}

      <header className="topbar">
        <a className="brand" href="#home">
          <img className="brand-logo" src={logo} alt="SANTHAM HOME FOR AGED logo" />
          <span>
            <strong>SANTHAM</strong>
            <small>HOME FOR AGED</small>
          </span>
        </a>

        <div className="nav-actions">
          <nav className="nav-links" aria-label="Main navigation">
            {navItems.map((item) => (
              item.id === 'settings' ? (
                <div className="settings-menu" key={item.id}>
                  <button
                    type="button"
                    className={`nav-link theme-toggle ${settingsOpen ? 'active' : ''}`}
                    onClick={() => setSettingsOpen((value) => !value)}
                    aria-expanded={settingsOpen}
                  >
                    {item.label}
                  </button>

                  {settingsOpen && (
                    <div className="settings-dropdown">
                      <div className="settings-section">
                        <p className="settings-title">Theme</p>
                        <div className="theme-options">
                          {themes.map((themeOption) => (
                            <button
                              key={themeOption.value}
                              type="button"
                              className={`theme-option ${theme === themeOption.value ? 'active' : ''}`}
                              onClick={() => setTheme(themeOption.value)}
                            >
                              {themeOption.label}
                            </button>
                          ))}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="mode-toggle"
                        onClick={() => setDarkMode((value) => !value)}
                      >
                        {darkMode ? 'Switch to light' : 'Switch to dark'}
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-content">
            <div className="hero-copy">
              <p className="eyebrow">Healing Words Trust • Ariyalur District</p>
              <h1>{typedText}<span className="cursor">|</span></h1>
              <p className="hero-description">
                Welcome to SANTHAM HOME FOR AGED, a peaceful home dedicated to providing
                love, care, and a secure environment for elderly people.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#about">
                  Learn More
                </a>
                <a className="btn btn-secondary" href="#contact">
                  Contact Us
                </a>
              </div>
              <div className="stats-grid" aria-label="Home statistics">
                {stats.map((stat) => (
                  <div className="stat-card" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-card">
              <p className="card-kicker">A Safe, Caring Space</p>
              <h2>Compassion that feels like family</h2>
              <p>
                Our residents enjoy warmth, dignity, companionship, and thoughtful daily
                support in a place that feels calm and uplifting.
              </p>
              <ul>
                <li>Comfortable residential living</li>
                <li>Medical and nursing support</li>
                <li>Emotional care with respect and affection</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-header">
            <p className="section-label">About Us</p>
            <h2>About SANTHAM HOME FOR AGED</h2>
            <p>
              Managed by Healing Words Trust, our home provides a safe, peaceful, and caring
              environment for senior citizens from all backgrounds.
            </p>
          </div>

          <div className="about-grid about-with-image">
            <div className="about-image-card">
              <img src={aboutImage} alt="About Santham Home for Aged" />
            </div>
            <div className="about-card">
              <p>
                SANTHAM HOME FOR AGED was established in 2019 by compassionate founders and
                like-minded individuals who wanted to create a secure and nurturing home for
                elderly people. Located in the serene surroundings of Ariyalur District, we
                offer a warm, family-like atmosphere guided by love and dignity.
              </p>
              <p>
                Every resident is valued, supported, and encouraged to lead a meaningful life
                with comfort and peace of mind.
              </p>
              <p>
                Our dedicated team provides personalized care plans, regular medical checkups,
                wholesome meals, and meaningful daily activities that promote dignity, wellbeing,
                and connection with family and friends.
              </p>
              <p>
                We also offer regular cultural events, gentle exercise programs, and timely
                transport support for family visits and appointments, ensuring each resident
                feels safe, active, and connected every day.
              </p>
              <div className="scenario-box">
                <h3>Scenario</h3>
                <div className="scenario-highlight">
                  <p>
                    Old age is a critical phase in anyone’s life. During this phase of one’s life,
                    one needs personal care, attention and affection. In the present day scenario,
                    we observe rapid societal changes, compulsions of modern day urban living are
                    disrupting certain family values. The generation gap between the youngsters and
                    the elders has created conflicting ideologies due to changing socio-economic
                    conditions.
                  </p>
                  <p>
                    All the above-mentioned scenarios have made old age homes more relevant in the
                    Indian context than ever before. <strong>SANTHAM HOME FOR AGED</strong> provides
                    medical assistance, food, shelter, moral and emotional support to elders,
                    including counselling where required, and improves their quality of life by
                    providing a meaningful approach to living.
                  </p>
                  <p>
                    We solicit your generosity and help in making this noble project a reality by
                    voluntarily coming forward to extend your help and support of any kind.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-card highlight-card">
              <h3>Vision</h3>
              <p>
                To create a loving, secure, and compassionate environment where every senior
                citizen enjoys a peaceful and dignified life.
              </p>
              <ul>
                <li>Provide trusted care with respect and warmth.</li>
                <li>Build strong community ties with family and friends.</li>
                <li>Support independence through meaningful daily routines.</li>
                <li>Champion health, safety, and joyful living for every resident.</li>
              </ul>
              <h3>Mission</h3>
              <div className="mission-list">
                <div className="mission-item">Safe Shelter</div>
                <div className="mission-item">Medical Care</div>
                <div className="mission-item">Emotional Support</div>
                <div className="mission-item">Nutritious Food</div>
                <div className="mission-item">Respect & Dignity</div>
                <div className="mission-item">Happy Living</div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="section-header">
            <p className="section-label">Services</p>
            <h2>Care that supports every need</h2>
            <p>We offer a compassionate blend of personal care, medical attention, and daily comfort.</p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="card service-card" key={service.title}>
                <img src={service.image} alt={service.title} className="service-image" />
                <div className="service-card-body">
                  <div className="icon-badge" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="activities" className="section activities-section">
          <div className="section-header">
            <p className="section-label">Activities</p>
            <h2>Joyful moments and meaningful routines</h2>
            <p>Daily activities are designed to create comfort, wellness, and companionship.</p>
          </div>

          <div className="activity-grid">
            {activities.map((activity) => (
              <article className="card activity-card" key={activity.title}>
                {activity.image && (
                  <img className="activity-image" src={activity.image} alt={activity.title} />
                )}
                <div className="activity-body">
                  <div className="icon-badge" aria-hidden="true">
                    {activity.icon}
                  </div>
                  <h3>{activity.title}</h3>
                  <p>{activity.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="section gallery-section">
          <div className="section-header">
            <p className="section-label">Gallery</p>
            <h2>A glimpse of our caring community</h2>
            <p>Browse memorable moments, celebrations, and everyday life at SANTHAM HOME FOR AGED.</p>
          </div>

          <div className="gallery-grid">
            {gallery.map((item) => (
              <button
                type="button"
                className="gallery-card"
                key={item.alt}
                onClick={() => setSelectedImage(item)}
              >
                <img src={item.src} alt={item.alt} />
              </button>
            ))}
          </div>
        </section>

        <section id="admission" className="section admission-section">
          <div className="section-header">
            <p className="section-label">Admission Procedure</p>
            <h2>Admission &amp; Sponsor</h2>
            <p>We welcome families and well-wishers who wish to support the care of our elders.</p>
          </div>

          <div className="admission-card">
            <h3>ADMISSION PROCEDURES</h3>
            <p>
              To admit an elder in the home, an application form has to be filled by the admission seekers.
              Aadhaar card copy and 2 photos of the elder are required. Admission of aged people is purely
              on will of the management of the home and strictly follow the guidelines of government under
              senior citizen act 2007 for destitute elders.
            </p>

            <h3>SPONSOR IN KIND</h3>
            <p>
              Also you may sponsor materials like groceries, vegetables and fruits or bedding cloth, garments,
              pharmaceutical item.
            </p>
            <p>
              On your Special Days or Special Events of your family &amp; friends and organisation, we invite
              you to celebrate your memorable anniversaries, birth days with our elders.
            </p>
            <p>
              You may provide special meals in the following category.
            </p>
            <ul className="admission-list">
              <li>Rs 9000/- FOR ONE DAY SPONSOR INCLUDING BREAK FAST, LUNCH AND DINNER</li>
              <li>Rs 2500/- FOR BREAK FAST</li>
              <li>Rs 4500/- FOR LUNCH</li>
              <li>Rs 2500/- FOR DINNER</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-header">
            <p className="section-label">Contact Us</p>
            <h2>Get in touch</h2>
            <p>If you have questions about admissions, volunteering, or supporting our mission, we would love to hear from you.</p>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <h3>Reach us</h3>
              <div className="contact-list">
                <p><strong>Email:</strong> santhamhome00007@gmail.com</p>
                <p><strong>Phone:</strong> +91 87600 05340</p>
                <p><strong>Address:</strong><br />SANTHAM HOME FOR AGED<br />Rajaji Nagar, 1st Street,<br />College Road, Minister Illam Near,<br />Ariyalur – 621713<br />Tamil Nadu, India</p>
              </div>
            </div>


          </div>

          <div className="map-card">
            <iframe
              title="SANTHAM HOME FOR AGED map"
              src="https://www.google.com/maps?q=Ariyalur%20%20621713&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <a className="brand footer-brand" href="#home">
              <img className="brand-logo" src={logo} alt="SANTHAM HOME FOR AGED logo" />
              <span>
                <strong>SANTHAM</strong>
                <small>HOME FOR AGED</small>
              </span>
            </a>
            <p>Managed by Healing Words Trust.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <p>Email: santhamhome00007@gmail.com</p>
            <p>Phone: +91 87600 05340</p>
          </div>
        </div>
        <p className="footer-copy">© 2026 SANTHAM HOME FOR AGED. All Rights Reserved.</p>
      </footer>

      <a className="floating-btn" href="#contact">
        Contact Now
      </a>

      {selectedImage && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button className="lightbox-close" type="button" onClick={() => setSelectedImage(null)}>
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <p>{selectedImage.category}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
