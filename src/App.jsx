import { Suspense } from 'react';
import './App.css'
import Countries from "./components/Countries/Countries";

const countriesPromis = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json())

function App() {

  return (
    <>
      <Suspense fallback={<h3>On the go loadding...</h3>}>
        <Countries countriesPromis={countriesPromis}></Countries>
      </Suspense>
    </>
  )
}

export default App
