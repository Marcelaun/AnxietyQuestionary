
import './QuestionForm.css'

export function QuestionForm() {
    return (
        <div className="form-main-container">
            <form className="form">
                <h1 className="form-title">Responda aqui as questões!</h1>
                <div className="form-questions-container">
                    <input className="form-inputs" type="text" name="name" placeholder='Insira seu nome' id="name" />

                    <div className="question-box">
                        <h2 className="question-title">Você tem ou já teve ansiedade?</h2>
                        <input type="radio" name="sim_ou_nao" id="SIM" value="SIM" />
                        <label htmlFor="SIM">Sim</label>
                    </div>
                </div>
            </form>
        </div>
    )
}