import Nav from '../../components/Nav';
import Head from 'next/head';

function Home (){
  return (
  <>
    <Head>
      <title>National Park News</title>
    </Head>
    <Nav />
    <div>
      <h1>Get your latest National Parks News</h1>
    </div>
    <div>You do not have any parks right now</div>
  </>)
}

export default Home;