import { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import "./Main.css";

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)


    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.avatar} alt="" />
            </div>

            <div className="main-container">

                {!showResult ?
                    <>
                        <div className="greet">
                            <p>
                                <span>Diego's Gemini</span>
                            </p>
                            <p>How can I help you, today?</p>
                        </div>

                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>

                            <div className="card">
                                <p>Briefly summarize this concept: Urban planning</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>

                            <div className="card">
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>

                            <div className="card">
                                <p>Improve the readability of the dollowing code</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                    :
                    <div className="result">
                        <div className="result-title">
                            <img src={assets.avatar} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />


                            {loading ?
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                :
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }


                        </div>
                    </div>
                }




                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" />

                        <div>

                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                                : null}

                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
