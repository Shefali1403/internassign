import React from "react";
import { addRedClass, increm, commentvalue, sharevalue } from "../app/actions";
import { connect } from "react-redux";

const Card = (props) => {
  const handleclick = () => {
    console.log("clicked");
    props.addRedClass(props.id);
    props.increm(props.id);
  };

  const commentclick = () => {
    console.log("comment box clicked");
    const inputId = `inputid-${props.id}`;
    const inputElement = document.getElementById(inputId);

    if (inputElement) {
      inputElement.value = "";
    } else {
      console.error(`Input element not found with id: ${inputId}`);
    }

    props.commentvalue(props.id);
  };
  const shareclick = () => {
    props.sharevalue(props.id);
  };

  const heartclass = props.isRedClassAdded
    ? "fa-solid fa-heart red"
    : "fa-regular fa-heart";

  return (
    <>
      <div className="content">
        <div className="content-logo">{props.name}</div>
        <div className="content-posts">
          <div className={props.className} id="postid">
            <img src={props.img} alt="notfound" />
          </div>
          <div className="icons" id="commenticon">
            <i className={` ${heartclass} icon-post`} onClick={handleclick}>
              <br />
              <p
                style={{
                  color: "white",
                  fontSize: "1rem",
                  marginTop: "0.5rem",
                }}
              >
                {props.value}
              </p>
            </i>
            <i className="fa-regular fa-comment icon-post">
              <p
                style={{
                  color: "white",
                  fontSize: "1rem",
                  marginTop: "0.5rem",
                }}
              >
                {props.commentval}
              </p>
            </i>
            <i
              className="fa-regular fa-paper-plane icon-post"
              onClick={shareclick}
            >
              {" "}
              <p
                style={{
                  color: "white",
                  fontSize: "1rem",
                  marginTop: "0.5rem",
                }}
              >
                {props.shareval}
              </p>
            </i>
          </div>
          <div className="comment-box">
            <input type="text" id={`inputid-${props.id}`} />
            <button onClick={commentclick}>Comment</button>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state, ownProps) => {
  const card = state.cards.find((c) => c.id === ownProps.id) || {};
  return {
    isRedClassAdded: card.isRedClassAdded || false,
    value: card.value || 0,
    commentval: card.commentval || 0,
    shareval: card.shareval || 0,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addRedClass: (cardId) => dispatch(addRedClass(cardId)),
    increm: (cardId) => dispatch(increm(cardId)),
    commentvalue: (cardId) => dispatch(commentvalue(cardId)),
    sharevalue: (cardId) => dispatch(sharevalue(cardId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
