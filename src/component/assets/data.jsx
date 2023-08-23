import fotoprofile from '../img/fotoprofile.jpg'
import dewetour from '../img/dewetour.JPG'
import waysbook from '../img/waysbook.JPG'
import minumanenak from '../img/minumanenak.JPG'
import portofolio from '../img/portofolio.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faHtml5, faCss3Alt, faReact, faSquareJs, faGolang, faBootstrap } from '@fortawesome/free-brands-svg-icons';


export const userData = {
    namaUser: 'Handika Al Falaq',
    get firstName() {
        return this.namaUser.split(' ')[0];
      },
    work:'Fullstack Developer',
    fotoprofile,
    about1: `I am Handika Al Falaq, an undergraduate graduate from the University of Lampung majoring in Electrical Engineering. During my studies, I was active in major student association organizations for 2 years and I was also active in faculty-level bem for 1 year. Apart from being active in the organization, I am also active as a teaching assistant in the high voltage engineering laboratory for 2 years.`,
    about2:`after I graduated from college I was very interested in the world of programming so I started to try independent learning activities, such as html, css and javascript. After I had the basics, I tried to take part in a fullstack developer bootcamp for 3 months. While I was at bootcamp, I studied reactjs, golang, bootsrap, postgresql, etc. And I also completed several projects, namely the web dewetour and also the waybook web.`,
    about3:`Currently I have graduated from the bootcamp where my plan for the future after graduating from this bootcamp is to find a job and go back to deepen and learn new things in the world of programming so that I am constantly updated to keep up with the times and the company's needs to become a full stack developer.`,
  };


export const dataPortofolio = [
    {
      imageProject: dewetour,
      titleProject: 'Dewetour web',
      contentProject: 'Dewetour web a website that provides various trips to foreign and domestic tourist destinations. This website aims to make it easier for hobbyists to enjoy their holidays.',
      linkWeb: "https://dewetour-befe.vercel.app/",
      linkGithub: "https://github.com/Handikaalfalaq/dewetour_BEFE/tree/master",
      dataTechnologies:[ 
        {
          technologies :'reactjs', 
          logoTechnologies: <FontAwesomeIcon icon={faReact} size="3x" />,
          color: "#5ED3F4",
        },
        {
          technologies :'bootstrap', 
          logoTechnologies: <FontAwesomeIcon icon={faBootstrap} size="3x" />,
          color: "#8612F5",
        },
        {
          technologies :'golang', 
          logoTechnologies: <FontAwesomeIcon icon={faGolang} size="3x" />,
          color: "#00A7D0",
        },
        {
          technologies :'mysql', 
          logoTechnologies: <FontAwesomeIcon icon={faGolang} size="3x" />,
          color: "#00A7D0",
        },
        {
          technologies :'vercel', 
          logoTechnologies: <FontAwesomeIcon icon={faReact} size="3x" />,
          color: "#00A7D0",
        },
        {
          technologies :'fly.io', 
          logoTechnologies: <FontAwesomeIcon icon={faReact} size="3x" />,
          color: "#00A7D0",
        },
      ],
    },
    {
      imageProject: waysbook,
      titleProject: 'Waysbook web',
      contentProject: 'Waysbook web a website that provides a wide selection of ebooks to make it easier for hobbyists to find, buy and read the books they are interested in.',
      linkWeb: "https://waysbook-web.vercel.app/",
      linkGithub: "https://github.com/Handikaalfalaq/waysbook_web",
      dataTechnologies:[ 
        {
          technologies :'reactjs', 
          logoTechnologies: <FontAwesomeIcon icon={faReact} size="3x" />,
          color: "#5ED3F4"
        },
        {
          technologies :'bootstrap', 
          logoTechnologies: <FontAwesomeIcon icon={faBootstrap} size="3x" />,
          color: "#8612F5",
        },
        {
          technologies :'golang', 
          logoTechnologies: <FontAwesomeIcon icon={faGolang} size="3x" />,
          color: "#00A7D0",
        },
        {
          technologies :'mysql', 
          logoTechnologies: <FontAwesomeIcon icon={faGolang} size="3x" />,
          color: "#00A7D0",
        },
        {
          technologies :'vercel', 
          logoTechnologies: <FontAwesomeIcon icon={faReact} size="3x" />,
          color: "#00A7D0",
        },
        {
          technologies :'fly.io', 
          logoTechnologies: <FontAwesomeIcon icon={faReact} size="3x" />,
          color: "#00A7D0",
        },
      ],
    },
    {
      imageProject: minumanenak,
      titleProject: 'Minuman enak',
      contentProject: 'Create a beverage sales application that aims to make it easy for customers to shop online and make it easier for traders to manage sales.',
      linkWeb: "https://drink-shop-me.vercel.app/",
      linkGithub: "https://github.com/Handikaalfalaq/Drink-shop-me",
      dataTechnologies:[
        {
          technologies :'html', 
          logoTechnologies: <FontAwesomeIcon icon={faHtml5} size="3x" />,
          color: "#1E3050"
        },
        {
          technologies :'css', 
          logoTechnologies: <FontAwesomeIcon icon={faCss3Alt} size="3x" />,
          color: "#3595CF"
        },
        {
          technologies :'javascript', 
          logoTechnologies: <FontAwesomeIcon icon={faSquareJs} size="3x" />,
          color: "#F7D138"
        },
        {
          technologies :'vercel', 
          logoTechnologies: <FontAwesomeIcon icon={faHtml5} size="3x" />,
          color: "#F7D138"
        },
      ]
    },
    {
      imageProject: portofolio,
      titleProject: 'Portofolio web',
      contentProject: 'create a web portfolio to display my works, projects, designs, writing, or other works that reflect my skills and talents.',
      linkWeb: "https://drink-shop-me.vercel.app/",
      linkGithub: "https://github.com/Handikaalfalaq/Drink-shop-me",
      dataTechnologies:[
        {
          technologies :'html', 
          logoTechnologies: <FontAwesomeIcon icon={faHtml5} size="3x" />,
          color: "#1E3050"
        },
        {
          technologies :'css', 
          logoTechnologies: <FontAwesomeIcon icon={faCss3Alt} size="3x" />,
          color: "#3595CF"
        },
        {
          technologies :'javascript', 
          logoTechnologies: <FontAwesomeIcon icon={faSquareJs} size="3x" />,
          color: "#F7D138"
        },
        {
          technologies :'vercel', 
          logoTechnologies: <FontAwesomeIcon icon={faHtml5} size="3x" />,
          color: "#F7D138"
        },
      ]
    },
  ];

export const dataContact = [
    {
      logoContact: <FontAwesomeIcon icon={faWhatsapp} size="4x" />,
      contact: 'whatsapp',
      informasiContact: '+6282186693767',
      linkContact: 'https://wa.me/6282186693767'
    },
    {
      logoContact: <FontAwesomeIcon icon={faEnvelope} size="4x" />,
      contact: 'email',
      informasiContact: 'handikaalfalaq01@gmail.com',
      linkContact: 'mailto:handikaalfalaq01@gmail.com'
    },
    {
      logoContact: <FontAwesomeIcon icon={faInstagram} size="4x" />,
      contact: 'instagram',
      informasiContact: 'handika_alfalaq',
      linkContact: 'https://www.instagram.com/handika_alfalaq/'
    }
]

export const dataSkills = [
  {
    logoSkill: <FontAwesomeIcon icon={faHtml5} size="4x" />,
    skill: "HTML",
    color: "#1E3050"
  },
  {
    logoSkill: <FontAwesomeIcon icon={faCss3Alt} size="4x" />,
    skill: "CSS",
    color: "#3595CF"
  },
  {
    logoSkill: <FontAwesomeIcon icon={faReact}  size="4x" />,
    skill: "ReactJs",
    color: "#5ED3F4"
  }, 
  {
    logoSkill: <FontAwesomeIcon icon={faSquareJs} size="4x" />,
    skill: "Javascript",
    color: "#F7D138"
  },
  {
    logoSkill: <FontAwesomeIcon icon={faGolang} size="4x" />,
    skill: "Golang",
    color: "#00A7D0",
  },
  {
    logoSkill: <FontAwesomeIcon icon={faBootstrap} size="4x" />,
    skill: "Bootstrap",
    // color: "#8612F5",
    color: "#00A7D0",
  },
  {
    logoSkill: <FontAwesomeIcon icon={faHtml5} size="4x" />,
    skill: "mySql",
    color: "#1E3050,"
  },
  {
    logoSkill: <FontAwesomeIcon icon={faHtml5} size="4x" />,
    skill: "postgresql",
    color: "#1E3050",
  },
  {
    logoSkill: <FontAwesomeIcon icon={faHtml5} size="4x" />,
    skill: "vercel",
    color: "#1E3050",
  },
  {
    logoSkill: <FontAwesomeIcon icon={faHtml5} size="4x" />,
    skill: "fly.io",
    color: "#1E3050",
  },
]
