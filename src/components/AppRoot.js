import React from "react"
import MarkdownData from "../../data/post.md"

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
		 <div className="profile">
			 <img src={require("../images/link.jpg")} />
			 <h1>{this.props.heading}</h1>
			 <div className="content">{MarkdownData}</div>
		 </div>
    )
  }
}
