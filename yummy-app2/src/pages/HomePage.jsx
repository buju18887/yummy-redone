
const HomePage = () => {
  return (
    <>
     <main className="bg-[url('/background.jpg')] bg-cover bg-no-repeat">
        <header className="flex justify-between">
            <div>
                <img src="/logo 3.png" alt="Yummy" className="w-36 h-16 rounded-md ml-8 mt-5"/>
            </div>
            <ul className="mt-5 mr-8">
                <li className="pt-5">
                <a href="#" className="text-2xl font-extrabold font-burtons px-4 py-2 mt-10 text-yellow-500">Explore</a>
                </li>
            </ul>
        </header>
        <div className="mx-auto mt-32 w-1/2 h-1/3 whitespace-normal items-center">
            <h1 className="text-6xl font-bold italic text-center leading-relaxed text-white">Yummy recipes from all around the world</h1>
            <h6 className="italic text-2xl text-center text-white">Create, Review and Share different recipes of your choice in the food community</h6>
        </div>
        <div className="flex justify-evenly mt-28">
        <a href="/signup" className="px-4 py-2 rounded-md bg-yellow-500 font-semibold ">SignUp</a>
        <a href="/login" className="px-4 py-2 rounded-md bg-yellow-500 font-semibold ">Login</a>
        <a href="/" className="px-4 py-2 rounded-md bg-yellow-500 font-semibold ">About</a>
    </div>
    <footer className="flex justify-center items-center mt-20 pb-2">
        <p className="text-yellow-300">&copy; <span id="date" className="font-semibold">2023</span><span className="font-semibold">
            YummyRecipes
          </span></p>
    </footer>
     </main>
    </>
  )
}

export default HomePage