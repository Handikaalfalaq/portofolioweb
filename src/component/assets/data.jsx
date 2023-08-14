import fotoprofile from '../img/fotoprofile.jpg'
import dewetour from '../img/dewetour.JPG'
import waysbook from '../img/waysbook.JPG'
import minumanenak from '../img/minumanenak.JPG'
import portofolio from '../img/portofolio.JPG'



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
    },
    {
      imageProject: waysbook,
      titleProject: 'Waysbook web',
      contentProject: 'Waysbook web a website that provides a wide selection of ebooks to make it easier for hobbyists to find, buy and read the books they are interested in.',
    },
    {
      imageProject: minumanenak,
      titleProject: 'Minuman enak',
      contentProject: 'Create a beverage sales application that aims to make it easy for customers to shop online and make it easier for traders to manage sales.',
      
    },
    {
      imageProject: portofolio,
      titleProject: 'Portofolio web',
      contentProject: 'create a web portfolio to display my works, projects, designs, writing, or other works that reflect my skills and talents.'
    },
  ];
  