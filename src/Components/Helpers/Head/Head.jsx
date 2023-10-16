/* eslint-disable react/prop-types */
import { useEffect } from "react"

export function Head(props) {

  useEffect(() => {
    document.title = props.title + ' | Dogs';
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', props.description || '');
  }, [props]);

  return (
    <></>
  )
}