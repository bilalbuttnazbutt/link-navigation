"use client"
import {useRouter} from 'next/navigation';
import Link from "next/link"

function Home(){
  const rout = useRouter();
  return <div>
    <h1>Hey everyone this is my nex.js webpage</h1>
    <ul>
      <li><Link href='/'>Home</Link></li>
      <li><Link href='/Navbar'>Navbar</Link></li>
      <li><Link href='/About'>About</Link></li>
      <li><Link href='/Contact'>Contact</Link></li>
      <li><Link href='Footer'>Footer</Link></li>
    </ul>



    <button onClick={() => rout.push('/')}>Go to Home page</button>
    <br/><br/>
    <button onClick={() => rout.push('/Navbar')}>Go to Navbar page</button>
    <br/><br/>
    <button onClick={() => rout.push('/About')}>Go to About page</button>
    <br/><br/>
    <button onClick={() => rout.push('/Contact')}>Go to Contact page</button>
    <br/><br/>
    <button onClick={() => rout.push('/Footer')}>Go to Footer page</button>



    

  </div>
}

export default Home;