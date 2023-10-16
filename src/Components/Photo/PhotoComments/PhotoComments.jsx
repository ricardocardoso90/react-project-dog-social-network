/* eslint-disable react/prop-types */
import styles from './PhotoComments.module.scss';

import { useContext, useEffect, useRef, useState } from "react"
import { UserContext } from '../../../Context/UserContext';
import { PhotoCommentsForm } from "../PhotoCommentsForm/PhotoCommentsForm";

export function PhotoComments(props) {
  const [comments, setComments] = useState(() => props.comments);
  const commentsSection = useRef(null);
  const { login } = useContext(UserContext);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentsSection} className={`${styles.comments} ${props.single ? styles.single : ''}`}>
        {comments.map((comment) => {
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        })}
      </ul>
      {login && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  )
}