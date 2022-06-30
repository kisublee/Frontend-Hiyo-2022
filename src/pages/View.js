import React from 'react'
import SearchResult from '../components/searchList/SearchResult'

export default function View({searchInput,setSearchInput}) {
  return (
    <SearchResult searchInput={searchInput} setSearchInput={setSearchInput}/>
  )
}
