import { userData } from './assets/data.jsx'
// import cv from './assets/cvHandikaAlFalaq.pdf'

function Home() {
    return(
        <div className="containerHome">
            <div className="informasi">
                <div className="greeting">Hi! I am,</div>
                <div className="name">{userData.namaUser}</div>
                <div className="work">{userData.work}</div>
                <a href={userData.fileCV} download="CV_Handika_Al_Falaq.pdf" className="downloadCv">Download CV</a>

            </div>
            <div className="fotoProfile" style={{backgroundImage: `url(${userData.fotoprofile})`}}></div>
        </div>
    )
}

export default Home