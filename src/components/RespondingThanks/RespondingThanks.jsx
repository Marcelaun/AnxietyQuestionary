import './RespondingThanks.css';
import ThankYouImg from '../../assets/thank-you.svg';
import CheckImg from '../../assets/check-icon.png';


export function RespondingThanks() {
    return (
        <div className="res-main-container">
            <div className="thanks-container">
            <div className="thanks-desc">
            <h1 className="thanks-title">Obrigado por responder a pesquisa!</h1>
            <img src={CheckImg} alt="Check_img" className="check-img" />
            </div>
            <div className="img-container">
            <img className="thankyou-img" src={ThankYouImg} alt="Obrigado!!" />
            </div>
            </div>
        </div>
    )
}