import { Link } from "react-router-dom";

function Welcome(){
    return(
        <section
  className="relative bg-[url(https://usaccidentlawyer.com/wp-content/uploads/2022/08/car-accident-cerritos.jpg)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-4xl text-red-500">
       Let's see what your incident

        <strong className="block font-extrabold text-green-400"> Forevere Agency </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white sm:text-2xl">
      Report Your incident here and let us do the rest
      </p>

      <div className="mt-8 xl:ml-[90px] flex flex-wrap gap-4 text-center">
        <Link to={"/add-incidents"}
         
          className="block w-full rounded bg-rose-600 px-[50px] py-4   text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </Link>


        <Link to={"/incidents"}
         
         className="block w-full rounded bg-white px-[50px] py-4   text-sm font-medium text-black shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
       >
        View incidents
       </Link>


     
      </div>
    </div>
  </div>
</section>
    );
}

export default Welcome