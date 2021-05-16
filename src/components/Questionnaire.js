import React,{useEffect,useState} from 'react'
import '../css/Questionnaire.css'
import image from '../images/bg9.png';
import img1 from '../images/self_care.jpg';

function Questionnaire() {
    const [questions,setQuestions]=useState([]);
    const [questionstart,setQuestionstart]=useState(0);
    const [start,setStart]=useState(false);
    const [answers,setAnswers]=useState([]);
    useEffect(() => {
       fetch('http://localhost:5000/questions',{
        headers: {
            'Content-Type': 'application/json',
          }
       }).then(response=>response.json())
       .then(data=>{
           console.log(data);
           setQuestions(data);
       });
    }, [])

    const handleSubmit=()=>{
        let data={
            answers:answers,
            id:localStorage.getItem('id'),
        }
        fetch('http://localhost:5000/questions',{
            method:'POST',
            body:JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
              }
        }).then(response=>response.json())
        .then(data=>console.log(data));
    }

    const handleAnswer=(answer)=>{
        
        setAnswers(answers=>[...answers,{id:questionstart,answer:answer}]);
        console.log("question start",questionstart)
        console.log("question length",questions.length)
        if(questionstart+1===questions.length){
            //alert("reached end");
            handleSubmit();
        }
        else{
            setQuestionstart(questionstart+1);
            console.log(answers);
        }
       
    }
    console.log(answers);
    return (
        <div className="questions">
            <div className="questions__question-block">
            {!start &&
                <div className="start__block">
                    <img src={img1} alt="" />
                    <button onClick={()=>setStart(true)}>Start</button>
                </div>
            }
            { start &&
                <React.Fragment>
                {questions.length>0 &&  
                
                    <div className="questions__eachquestion">
                        <div className="question__status">
                        <p>{questionstart+1}/{questions.length} questions</p>
                        </div>
                        
                        <div className="questions__eachquestion-question">
                            <p className="question__heading">{questions[questionstart].heading}</p>
                            <p className="question__question">{questions[questionstart].question}</p>
                        </div>
                        <div className="questions__eachquestion-options">
                            {questions[questionstart].options.map((option,index)=>(
                                <div className="questions__eachquestion-option" onClick={()=>handleAnswer(option)}>
                                    <p>{option}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                }
                </React.Fragment>
            }
            </div>
            
        </div>
    )
}

export default Questionnaire
