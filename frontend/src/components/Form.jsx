
import { useForm } from 'react-hook-form';
import ButtonSpinner from './ButtonSpinner';
import axios from 'axios';
import { useState } from 'react';


export default function Form() {

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [response, setResponse] = useState(null);
  const [responseError, setResponseError] = useState(null);

  const onSubmit = async (data) => {
    try {
      setResponseError(null);
      const response = await axios.post('http://localhost:8000/user/create', data, {
        withCredentials: true
      });
      setResponse(response.data);
      reset();
    } 
    catch (error) {
      setResponse(null);
      setResponseError(error);
    }
  };


  return (
    <div className="bg-white py-8 px-10 rounded-lg flex flex-col justify-center items-center">

      <h1 className="text-2xl text-black font-semibold">Sign Up</h1>

      <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
        <InputBox
          register={{
            ...register("name", {
              required: { value: true, message: "Name is required" },
              minLength: { value: 3, message: "Name must be at least 3 characters" },
              pattern: { value: /^[A-Za-z ]+$/, message: "Name must contain letters only" },
            })
          }}
          placeholder="name"
          type="text"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        <InputBox
          register={{
            ...register("email", {
              required: { value: true, message: "Email is required" },
              pattern: { value: /^\S+@\S+$/, message: "Email is not valid" }
            })
          }}
          placeholder="email"
          type="text"
        />
        {!errors.name && errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        <InputBox
          register={{
            ...register("password", {
              required: { value: true, message: "Password is required" },
              minLength: { value: 6, message: "Password must be at least 6 characters" },
              pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, message: "Password must contain letters and numbers" }
            })
          }}
          placeholder="password"
          type="password"
        />
        {!errors.name && !errors.email && errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

        <button
          disabled={isSubmitting}
          className={`
            ${isSubmitting ? "bg-blue-600" : "bg-blue-500"}
            text-white font-medium cursor-pointer px-5 py-3 rounded-xl
            flex items-center justify-center gap-2
            `}
            >
          {isSubmitting && 
            <ButtonSpinner size={16} color="white" />
          }
          Sign Up
        </button>
        {response && <p className="text-red-500 text-sm text-center">{response}</p>}
        {responseError && <p className="text-red-500 text-sm text-center">{responseError.response.data}</p>}
      </form>

      <div className="text-sm flex mt-4">
        <p className="text-neutral-600">Already have an account?</p>
        <a href="#" className="text-blue-500 ml-2">Login</a>
      </div>
    </div>
  )
}


function InputBox({ register, placeholder, type }) {

  const inputStyle = "border-[2px] border-neutral-300 outline-none px-5 py-3 rounded-xl min-w-80";

  return (
    <input
      {...register}
      type={type}
      placeholder={`Enter your ${placeholder}`}
      className={inputStyle}
      autoComplete="off"
    />
  );
}