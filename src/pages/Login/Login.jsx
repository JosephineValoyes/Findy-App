import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "../../services/userServices";
import useAppContext from "../../hooks/useAppContext";

const Login = () => {
  const navegate = useNavigate();
  const [showpassword,setShowPassword] = useState(false)
  const { userDispatch } = useAppContext();

  const formik = useFormik({
    initialValues: {email: '', password: ''},
    validationSchema: Yup.object().shape({email: Yup.string().email("Ingrese un email valido").required("Requerido"), password:Yup.string().required("Contraseña Requerida")}),
    onSubmit: async (values) => {
      console.table(values);
      const loggedUser = await login(values);
      console.table(loggedUser);
      if (loggedUser) {
        userDispatch({
          type: "LOGIN",
          payload: loggedUser,
        });
        alert(`${loggedUser.name}, te damos la bienvenida`);
        navegate("/dashboard");
      } else {
        alert(
          "Ha ocurrido un error en el inicio de sesión, por favor verifique sus credenciales"
        );
      }
    },
  });

  const handleShowPassword = () => setShowPassword(!showpassword);

  return (
   <div className="bg-gray-100  w-[430px] h-[932px] mx-auto p-4 rounded-lg shadow-lg" >
      <header >
        <div >
        <p className='text-black font-bold absolute left-2  '>9:41</p>
        <img src="src\assets\common\Icon\cellular.png" alt="cellular bars" className='absolute right-16 ' />
        <img src="src\assets\common\Icon\wi-fi.png" alt="wifi" className='absolute right-11 '/>
        <img src="src\assets\common\Icon\battery.png" alt="batery" className='absolute right-6' />
        
        </div>
      </header>
      <main className="flex  flex-col h-[600px] items-center grow gap-16 mt-8 px-2 absolute top-20 bg-white rounded-10 border-radius-[10]">
      <button onClick={() => navegate(-1)}  className="absolute left-4 mt-4 ">
        <FaArrowLeft />
      </button>
      <h1 className="font-serif text-center mt-4 text-2xl">Iniciar sesión</h1>
      <form className="flex flex-col gap-3" onSubmit={formik.handleSubmit}>
        <label className="font-bold" htmlFor="email">
          Correo electrónico
        </label>
        <input
          className={
            formik.touched.email && formik.errors.email
              ? "p-4 rounded border border-red-400"
              : "p-4 rounded border border-slate-400"
          }
          type="email"
          id="email"
          name="email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <span className="text-red-400">{formik.errors.email}</span>
        ) : null}
        <label className="font-bold" htmlFor="password">
          Contraseña
        </label>
        <div className="flex relative items-center">
          <input
            className={
              formik.touched.password && formik.errors.password
                ? "p-4 grow border rounded border-red-400"
                : "p-4 grow border rounded border-slate-400"
            }
            type={showpassword ? "text" : "password"}
            id="password"
            name="password"
            {...formik.getFieldProps("password")}
          />
          <button
            className={
              formik.touched.password && formik.errors.password
                ? "absolute right-4 text-red-400 "
                : "absolute right-4 text-slate-400 "
            }
            type="button"
            onClick={handleShowPassword}
          >
            {showpassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        {formik.touched.password && formik.errors.password ? (
          <span className="text-red-400">{formik.errors.password}</span>
        ) : null}
        <button
          type="submit"
          className="p-4  bg-[linear-gradient(92.69deg,_#EB5E5C_-0.64%,_#FF7674_101.09%)] text-white rounded mt-3 hover:bg-orange-600"
        >
          Iniciar sesión
        </button>
      </form>
      <p >
        Si aún no tiene una cuenta por favor haga click{" "}
        <Link className="text-sky-900 underline" to={"/register"}>
          aquí!
        </Link>
      </p>
      
    </main>
    <footer className="fixed bottom-0 left-0 right-0 p-8 flex justify-between text-white w-[430px] mx-auto   bg-[linear-gradient(92.69deg,_#EB5E5C_-0.64%,_#FF7674_101.09%)]" >

    </footer>
   </div>
    

  );
};

export default Login;