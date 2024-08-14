// eslint-disable-next-line no-unused-vars
import React, { Component, useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState([])

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const updateNews = async () => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`
    let data = await fetch(url)
    props.setProgress(35)
    let parsedData = await data.json()
    props.setProgress(75)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100)
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsApp`
    updateNews()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`
    setPage(page + 1)
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }
  return (
    <div className='my-5'>
      <h1 className='text-center'>NewsApp - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
      <InfiniteScroll className='text-center'
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<h4>Loading...</h4>}
      >
        <div className='container my-2'>
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                {/* <NewsItem title={element.title?element.title.slice(0, 45)+"..." : ""} description={element.description?element.description.slice(0, 95)+"..." : ""} imageUrl={element.urlToImage? element.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMtmUnbPD7PZnGd-SCyhHxH1xN0KDlqU1rog&usqp=CAU"} newsUrl={element.url} /> */}
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMtmUnbPD7PZnGd-SCyhHxH1xN0KDlqU1rog&usqp=CAU"} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt ? element.publishedAt : "Not Known"} source={element.source.name ? element.source.name : "Unknown"} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  )
}
News.defaultProps = {
  country: 'in',
  pageSize: 10,
  category: 'general'
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News
