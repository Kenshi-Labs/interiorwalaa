export interface ContentCard {
    title: string
    description: string
}

export interface WelcomeData {
    backgroundImage: string
    mainTitle: string
    mainDescription: string
    cards: ContentCard[]
}

export const aboutUsWelcomeData: WelcomeData = {
    backgroundImage: 'https://interiorwalaa.smepulse.in/aboutuswelcomebg.jpg',
    mainTitle: 'Welcome to Interiorwataa',
    mainDescription: `Interiorwataa stands at the forefront of interior design innovation. We hold the prestigious accolade of being a Bangalore's No.1 interior design company, a recognition that reflects our unwavering commitment to excellence and transformative spaces. Our experienced team is well-versed in creating dynamic environments that not only captivate aesthetically but fulfill both functional and emotional requirements of our clients.

    Whether pushing the elegant ambiance of a hotel, the cozy warmth of a residential space or the dynamic energy of a bustling commercial establishment, each project becomes an adventure in creativity, balances visual comfort and productivity. Our methodical approach ensure that commerce and client collaboration with impeccable service are the foundational pillars of our commercial interior design solutions for power of design with us today.`,
    cards: [
        {
            title: 'Our Vision',
            description: 'To revolutionize the way people live and function. Charged with purpose, we craft spaces that transcend the ordinary. Taking innovative approach to interior design and spaces that tell your story.'
        },
        {
            title: 'Our Mission',
            description: 'To revolutionize the way people live and function. Charged with purpose, we craft spaces that transcend the ordinary. Taking innovative approach to interior design and spaces that inspire both homeowners and their guests.'
        },
        {
            title: 'Our Goals',
            description: 'To revolutionize the way people live and function. Charged with purpose, we craft spaces that transcend the ordinary. Taking innovative approach to interior design and spaces that inspire both homeowners and their guests.'
        }
    ]
}
