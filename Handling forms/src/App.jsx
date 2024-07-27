import { useForm } from "react-hook-form"
import "./App.css"

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {
    await delay(3)
    console.log(data)
    if (data.username == "nikhil"){
        setError("nikErr",{message:"Cnnot set the username nikhil"})
    }
  }

  return (
    <>
      <div className="w container">
        <form className="flex" action="" onSubmit={handleSubmit(onSubmit)}>
          {isSubmitting && <p>Loading...</p>}
          <input id="1" placeholder="username" {...register("username", { required: { value: true, message: "This feild is required" }, minLength: { value: 3, message: "Minimum Length is 3" }, maxLength: { value: 6, message: "Maximum Length is Six" } })} type="text" name="username" />
          {errors.username && <div className="red">{errors.username.message}</div>}
          <input id="2" placeholder="password" {...register("password", { required: { value: true, message: "This feild is required" }, minLength: { value: 3, message: "Minimum Length is 3" }, maxLength: { value: 6, message: "Maximum Length is Six" } })} type="password" name="password" />
          {errors.password && <div className="red">{errors.username.message}</div>}
          <input disabled={isSubmitting} type="submit" value="submit" />
          {errors.nikErr && <p className="red">{errors.nikErr.message}</p>}
        </form>
      </div>
    </>
  )
}

export default App
