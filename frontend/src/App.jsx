import Form from "./components/Form";
import axios from 'axios';



export default function App() {

  axios.get('http://localhost:8000').then((response) => {
    console.log(response.data);
  });

  return (
    <div className="w-full bg-neutral-900 h-screen flex justify-center items-center">
      <Form />
    </div>
  )
}
