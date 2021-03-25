import Head from 'next/head';

function Search (){
  return (
    <>
  <Head>
    <title>National Park News</title>
  </Head>
  <div>
    <h1>Find National Parks to Follow</h1>
  </div>
  <form>
    <fieldset>
      <legend>Find a National Park</legend>
      <div>
        <label>Park Name: </label>
        <input type='text' placeholder='Yellowstone National Park'></input>
      </div>
      <div>
        <button type='submit'>Search</button>
      </div>
    </fieldset>
  </form>
  </>)
}

export default Search;