import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section className="container mx-auto my-8 px-4">
        <div className="mx-auto flex justify-center relative">
          <div className="absolute inset-0 w-[55%] h-96 bg-gray-300 z-10">
            <div className="absolute inset-0 flex justify-center items-center">
              <p className="text-white text-lg p-2 sm:p-8 mr-4 sm:mr-20">
                {`\n After years of experience and expertise we have designed a flawless model for our franchise to have seamless day to day operations. \n *Simple raw material requirements & minimal bakery wastage. \n *Long shelf life raw materials. \n *Simple raw material requirements & minimal bakery wastage.`}
              </p>
            </div>
          </div>
          <div className="absolute right-0 w-[50%] h-100 my-auto bg-gray-100 z-0">
            <img
              src={'https://createdinam.in/Puravankara/img/images/Chinese.jpg'}
              alt={`Profile`}
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto my-8 px-4 mt-[30rem]">
        <div className="">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg">
            After years of experience and expertise we have designed a flawless model for our franchise to have seamless day to day operations.
            Simple raw material requirements & minimal bakery wastage. Long shelf life raw materials. Simple raw material requirements & minimal bakery wastage.
            Minimal manpower & machinery requirements for smooth operations. Digitization of various processes Raw material ordering system
          </p>
        </div>
      </section>
      <section className="container mx-auto my-12 px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-4">
          <div className="flex flex-col items-center mb-4">
            <div className="rounded-full bg-gray-300 w-20 sm:w-40 h-20 sm:h-40 flex justify-center items-center mb-2">
              <img
                src={`https://createdinam.in/Puravankara/img/images/BobaBlastLogo.jpg`}
                alt={`Profile`}
                className="rounded-full w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-center mb-4">
            <div className="rounded-full bg-gray-300 w-20 sm:w-40 h-20 sm:h-40 flex justify-center items-center mb-2">
              <img
                src={`https://createdinam.in/Puravankara/img/images/BurgerLogo.jpg`}
                alt={`Profile`}
                className="rounded-full w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-center mb-4">
            <div className="rounded-full bg-gray-300 w-20 sm:w-40 h-20 sm:h-40 flex justify-center items-center mb-2">
              <img
                src={`https://createdinam.in/Puravankara/img/images/YehHaiMumbaiMeriJaanLogo.jpg`}
                alt={`Profile`}
                className="rounded-full w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-center mb-4">
            <div className="rounded-full bg-gray-300 w-20 sm:w-40 h-20 sm:h-40 flex justify-center items-center mb-2">
              <img
                src={`https://createdinam.in/Puravankara/img/images/Meallogo.jpg`}
                alt={`Profile`}
                className="rounded-full w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-center mb-4">
            <div className="rounded-full bg-gray-300 w-20 sm:w-40 h-20 sm:h-40 flex justify-center items-center mb-2">
              <img
                src={`https://createdinam.in/Puravankara/img/images/OverloadedWafflelogotype.png`}
                alt={`Profile`}
                className="rounded-full w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-center mb-4">
            <div className="rounded-full bg-gray-300 w-20 sm:w-40 h-20 sm:h-40 flex justify-center items-center mb-2">
              <img
                src={`https://createdinam.in/Puravankara/img/images/TableTalkLogo.jpg`}
                alt={`Profile`}
                className="rounded-full w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-center mb-4">
            <div className="rounded-full bg-gray-300 w-20 sm:w-40 h-20 sm:h-40 flex justify-center items-center mb-2">
              <img
                src={`https://createdinam.in/Puravankara/img/images/VandanamLogo.jpg`}
                alt={`Profile`}
                className="rounded-full w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto my-12 flex justify-center bg-gray-100 p-4 sm:p-12">
        <div className="container flex flex-col sm:flex-row justify-between sm:p-4">
          <div className="">
            <h2 className="text-3xl font-bold mb-4">For Franchise Inquiry</h2>
            <p className="text-lg mb-4">
              Have questions or need assistance? Feel free to reach out to us!
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-gray-500 text-white py-4 px-4 rounded-sm hover:bg-gray-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
