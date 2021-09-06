import '../styles/banner.css'
import logo from '../assets/feuille.png'

function Banner() {
    const GetMonth = new Date().getMonth();
    const isSpring = GetMonth >= 2 && GetMonth <= 5
    const recommendation = isSpring ? (
        <div className="lmj-banner-row"> C'est le printemps, rempotez !</div>
    ) : (
        <div className="lmj-banner-row"> Ce n'est pas le moment de rempoter </div>
    )
    
    
    return( 
        <div className="lmj-banner"> 
            <div className="lmj-banner-row">
                <h1 className="lmj-title">La maison jungle</h1> 
                <img  src={logo} alt="La maison Jungle" className="lmj-logo"/>  
            </div>
            {recommendation}
        </div>
        
    )  
}

export default Banner