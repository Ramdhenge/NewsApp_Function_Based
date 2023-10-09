import React, { useEffect, useState  } from 'react'
import NewsItems from './NewsItems'
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News(props) {

  const[articles, setArticles] = useState([])
  const[loading, setLoading] = useState(false)
  const[page, setPage] = useState(1)
  const[totalResults, setTotalResults] = useState(0)

  function capitalizeFLetter(str) {
    str = str.charAt(0).toUpperCase() +
      str.slice(1);
    return str
  }


  const updateNews = async()=> {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pageSize}`
    props.setProgress(30)
    setLoading(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    props.setProgress(70)
    setArticles(Array.isArray(parsedData.articles) ? parsedData.articles : [])
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }

  const fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pageSize}`
    setPage(page + 1 )
    setLoading(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  }

  useEffect(()=>{
    document.title = `News - ${capitalizeFLetter(props.category)}`  
    updateNews()
    // eslint-disable-next-line
  }, [])

    
    return (
      <>
        <div className="main" id='main'>
          <div className="top py-4" id='top'></div>
          <h1 className='text-center py-2' id='heading' >News - Top {capitalizeFLetter(props.category)} Headlines</h1>
          <a href='#top'><div className="top-scroll" >^</div></a>
          {loading && <Loading />}
          {/* if loading is true only then show the spinner */}

          <InfiniteScroll
            dataLength={articles.length} //This is important field to render the next data
            next={fetchData}
            hasMore={articles.length !== totalResults}
            loader={<Loading />}
          >
            <div className='container px-5'>

              <div className="row">
                {articles.map((e, index) => {
                  return <div className="col-md-4" key={index}>
                    <NewsItems title={e.title ? e.title : ""} description={e.description ? e.description.slice(0, 200)+"..." : ""} imgUrl={e.urlToImage} newsUrl={e.url} author={e.author} publishedAt={e.publishedAt} />
                  </div>
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    ) 
}

News.defaultProps = {
  country: 'in',
  pageSize: 10,
  category: 'general'
}