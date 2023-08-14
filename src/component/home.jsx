import { userData } from './assets/data.jsx'

function Home() {
    return(
        <div className="containerHome">
            <div className="informasi">
                <div className="greeting">Hi! I am,</div>
                <div className="name">{userData.namaUser}</div>
                <div className="work">{userData.work}</div>
                <div className="downloadCv">Download CV</div>
            </div>
            <div className="fotoProfile" style={{backgroundImage: `url(${userData.fotoprofile})`}}></div>
        </div>
    )
}

export default Home