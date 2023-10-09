import React from "react"

export default function NewsItems(props) {

    let { title, description, imgUrl, newsUrl, author, publishedAt } = props

    return (
      <div className='my-4'>
        <div className="card" >
          <img src={imgUrl ? imgUrl : 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/breaking-news-poster-design-template-232c3f2700b91a0fd6e3a5a2e583a5da_screen.jpg?ts=1610645412'} className="card-img-top" alt="..." style={{maxHeight:'30vh'}} />
          <div className="card-body">
            <h5 className="card-title" >{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unkonwn"} on {new Date(publishedAt).toGMTString()}</small></p>
          <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-danger btn-sm">Read More</a>
        </div>
      </div>
      </div >
    )
}
