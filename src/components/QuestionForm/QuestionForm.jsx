import './QuestionForm.css'
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../services/supabaseClient';


import { useState } from 'react';

export function QuestionForm() {
  const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        hasOrHadAnxiety_1: '',
        futureWorrying_2: '',
        anxietyPrejudicingLife_3: '',
        anxietyPrincipalSymptoms_4: '',
        futureThinking_5: '',
        situationDealing_6: ''

    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData)
        const { data, error } = await supabase
        .from('pessoa')
        .insert({
          name: formData.name,
          hasOrHadAnxiety: formData.hasOrHadAnxiety_1,
          futureWorrying: formData.futureWorrying_2,
          anxietyPrejudicingLife: formData.anxietyPrejudicingLife_3,
          anxietyPrincipalSymptoms: formData.anxietyPrincipalSymptoms_4,
          futureThinking: formData.futureThinking_5,
          situationDealing: formData.situationDealing_6
        }).then(() => {
          navigate('/Thanks')
        })

    }


    
    return (
        <div className="form-main-container">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="form-title">Obrigado por contribuir com a pesquisa!</h1>
                <div className="form-questions-container">
                    <label className="optional-title" htmlFor="name">*Opcional</label>
                    <input className="form-inputs" type="text" name="name" placeholder='Insira seu nome' id="name" onChange={(e) => { setFormData(prevFormValue => {
    return { 
      ...prevFormValue, 
      name: e.target.value
    }
  }) }} />
                    

                    <div className="question-box">
                        <h2 className="question-title">Você tem ou já teve ansiedade?</h2>
                        <div className="question-options">
                        <div className="res-container">
                        <input type="radio" name="sim_ou_nao" id="SIM" value="SIM" onChange={(e) => { setFormData(prevFormValue => {
    return { 
      ...prevFormValue, 
      hasOrHadAnxiety_1: e.target.value
    }
  }) }} />
                        <label htmlFor="SIM">Sim</label>

                        <div className="check"></div>
                        </div>
                        <div className="res-container">
                        <input type="radio" name="sim_ou_nao" id="NÃO" value="NÃO" onChange={(e) => { setFormData(prevFormValue => {
    return { 
      ...prevFormValue, 
      hasOrHadAnxiety_1: e.target.value
    }
  }) }} />
                        <label htmlFor="NÃO">Não</label>

                        <div className="check"></div>
                        </div>
                        </div>
                    </div>

                    <div className="question-box">
                        <h2 className="question-title">Você costuma se preocupar com o futuro?</h2>
                        <div className="question-options">
                        <div className="res-container">
                        <input type="radio" name="sim_ou_nao-2" id="SIM-2" value="SIM" onChange={(e) => { setFormData(prevFormValue => {
    return { 
      ...prevFormValue, 
      futureWorrying_2: e.target.value
    }
  }) }} />
                        <label htmlFor="SIM-2">Sim</label>

                        <div className="check"></div>
                        </div>
                        <div className="res-container">
                        <input type="radio" name="sim_ou_nao-2" id="NÃO-2" value="NÃO"  onChange={(e) => { setFormData(prevFormValue => {
    return { 
      ...prevFormValue, 
      futureWorrying_2: e.target.value
    }
  }) }}/>
                        <label htmlFor="NÃO-2">Não</label>

                        <div className="check"></div>
                        </div>
                        </div>

                    </div>
                    
                    <div className="question-box">
                        <h2 className="question-title">Você acha que a ansiedade prejudica sua vida?</h2>
                        <div className="question-options">
                        <div className="res-container">
                        <input type="radio" name="sim_ou_nao-3" id="SIM-3" value="SIM" onChange={(e) => { setFormData(prevFormValue => {
    return { 
      ...prevFormValue, 
      anxietyPrejudicingLife_3: e.target.value
    }
  }) }} />
                        <label htmlFor="SIM-3">Sim</label>

                        <div className="check"></div>
                        </div>
                        <div className="res-container">
                        <input type="radio" name="sim_ou_nao-3" id="NÃO-3" value="NÃO" onChange={(e) => { setFormData(prevFormValue => {
    return { 
      ...prevFormValue, 
      anxietyPrejudicingLife_3: e.target.value
    }
  }) }}/>
                        <label htmlFor="NÃO-3">Não</label>

                        <div className="check"></div>
                        </div>
                        </div>

                    </div>

                    <div className="question-box">
                        <h2 className="question-title">Quais são os principais sintomas quando você se sente ansioso?</h2>
                        <div className="text-area-container">
                        <label htmlFor="textarea1name: '',
        hasOrHadAnxiety_1: '',
        futureWorrying_2: '',
        anxietyPrejudicingLife_3: '',
        anxietyPrincipalSymptoms_4: '',
        futureThinking_5: '',
        situationDealing_6: ''">Descreva abaixo o que sentiu.</label>
                        <textarea name="question-text" id="textarea1" cols="30" rows="10" className="question-desc-area" onChange={(e) => { setFormData(prevFormValue => {
    return { 
      ...prevFormValue, 
      anxietyPrincipalSymptoms_4: e.target.value
    }
  }) }}>
                        </textarea>
                        </div>
                    </div>

                    <div className="question-box">
                        <h2 className="question-title">Seus pensamentos em relação ao futuro são positivos ou negativos?</h2>
                        <div className="question-options">
                        <div className="res-container">
                        <input type="radio" name="positivos_ou_negativos" id="positivos" value="Positivos" onChange={(e) => { setFormData(prevFormValue => {
    return { 
      ...prevFormValue, 
      futureThinking_5: e.target.value
    }
  }) }} />
                        <label htmlFor="positivos">Positivos</label>

                        <div className="check"></div>
                        </div>
                        <div className="res-container">
                        <input type="radio" name="positivos_ou_negativos" id="negativos" value="Negativos" onChange={(e) => { setFormData(prevFormValue => {
    return { 
      ...prevFormValue, 
      futureThinking_5: e.target.value
    }
  }) }}/>
                        <label htmlFor="negativos">Negativos</label>

                        <div className="check"></div>
                        </div>
                        </div>

                    </div>

                    <div className="question-box">
                    <h2 className="question-title">Você lida bem com situações novas?</h2>
                        <div className="question-options">
                        <div className="res-container">
                        <input type="radio" name="sim_ou_nao-4" id="SIM-4" value="SIM" onChange={(e) => { setFormData(prevFormValue => {
    return { 
      ...prevFormValue, 
      situationDealing_6: e.target.value
    }
  }) }}/>
                        <label htmlFor="SIM-4">Sim</label>

                        <div className="check"></div>
                        </div>
                        <div className="res-container">
                        <input type="radio" name="sim_ou_nao-4" id="NÃO-4" value="NÃO" onChange={(e) => { setFormData(prevFormValue => {
    return { 
      ...prevFormValue, 
      situationDealing_6: e.target.value
    }
  }) }}/>
                        <label htmlFor="NÃO-4">Não</label>

                        <div className="check"></div>
                        </div>
                        </div>
                    </div>
                    <input className="submit-btn" id="clickSubmitButton" type="submit" value="Enviar" />
                </div>
                
            </form>
        </div>
    )
}