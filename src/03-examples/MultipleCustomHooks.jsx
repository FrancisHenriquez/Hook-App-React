import { useCounter, useFetch } from "../Hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {

const{ counter, increment } = useCounter(1);    
const { data, isLoading, hasError } = useFetch ( `https://www.breakingbadapi.com/api/quotes/${ counter }` )
const {author, quote} = !!data && data[0]
// console.log({ data, isLoading, hasError })

  return (
    <>  
    <h1>Breaking Bad Quotes </h1>
   <hr />
   {
        isLoading
            ? <LoadingQuote/>
            : <Quote author={author} quote = { quote }/>
   }
  
<LoadingQuote/>
   <Quote/>
   <button className="btn btn-primary" onClick={ () => increment() }>
    Next quote
   </button>
    </>
   
  )
}
