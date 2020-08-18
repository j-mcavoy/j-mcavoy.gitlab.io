import React, { Component } from "react";
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'

import './markdown/Clean_Room_Fridge.md' as CleanRoomFridge

const Markdown = ({page}) => {
  ReactDOM.render(<ReactMarkdown source={CleanRoomFridge} />, document.getElementById('container'))
}
