import { useState } from "react"


export const Comments = ({ data }) => {
    console.log(data)
    const [visible, setVisible] = useState(false);
    if (data.replies) {

        return (
            <div className="cont">
                <div className="top">
                    <div className="comments">
                       
                        <div>Author : {data.author}</div>
                        <div>Poiunts : {data.points} points</div>
                        <div>timestamp : {data.timestamp}</div>
                    </div>
                    <div>
                    {data.body}
                    <br />
                    </div>
                    <button onClick={() => setVisible(!visible)}
                    style={{
                        fontSize: "15px", cursor: "pointer"
                    }}
                >
                    {visible ? "hide replies" : "show replies"}

                </button>
                </div>
                <div style={{ display: visible ? "block" : "none", paddingLeft: "5%" }}>
                    {data.replies.map((item) => {
                        return <Comments data={item} />;
                    })}
                </div>
            </div>


        );

    } else {
        return (
            <div className="top" style={{ padding: "5px" }}>
                <div className="comments">
                    <div>{data.author}</div>
                    <div>{data.points} points</div>
                    <div>{data.timestamp}</div>
                </div>
                <div>
                    {data.body}<br />
                </div>
            </div>
        )
    }
}