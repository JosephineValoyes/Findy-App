//import  "../components/common/Header"
//import "../components/common/Footer"

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen w-[430px] mx-auto p-4 rounded-lg shadow-lg">
      {/* Header */}
      <header className="flex items-center justify-between mb-4">
        <img src="src\assets\common\Icon\LOGOLOGO 3.png" alt="Findy Logo" className="w-24 h-auto"/>
        <div className="flex items-center space-x-4">
          <img src="src\assets\common\img\Ellipse 11.png" alt="Your Story" className="w-10 h-10 rounded-full border-2 border-pink-500" />
          <img src="src\assets\common\img\jennie-blackpink-uhdpaper.com-hd-4 1.png" alt="Jennie Kim" className="w-10 h-10 rounded-full border-2 border-pink-500" />
          <img src="src\assets\common\img\HD-wallpaper-rose-blackpink-korean 1.png" alt="Roseanne Park" className="w-10 h-10 rounded-full border-2 border-pink-500" />
          <img src="src\assets\common\img\Kim-ji-soo.png" alt="Kim Ji-soo" className="w-10 h-10 rounded-full border-2 border-pink-500" />
          <img src="src\assets\common\img\Lalisa_manob.png" alt="Lalisa Manoban" className="w-10 h-10 rounded-full border-2 border-pink-500" />
        </div>
        <div className="flex space-x-4">
          <button>
            <img src="src\assets\common\Icon\VectorL.png" alt="Like" className="w-6 h-6" />
          </button>
          <button>
            <img src="src\assets\common\Icon\VectorMs.png" alt="Comment" className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="space-y-6">
        {/* Post 1 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center space-x-4 mb-4">
            <img src="src\assets\common\img\jennie-blackpink-uhdpaper.com-hd-4 1.png" alt="Jennie Kim" className="w-10 h-10 rounded-full border-2 border-pink-500" />
            <div className="font-semibold text-gray-900">Jennie Kim</div>
          </div>
          <div className="mb-4">
            <img src="src\assets\common\img\Group 11.png" alt="Jennie Kim Post" className=" object-cover rounded-lg" />
          </div>
          <div className="mb-4">
            <p>Jennie Kim</p>
            <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <button className="flex items-center space-x-1">
                <img src="src\assets\common\Icon\VectorL.png" alt="Like" className="w-6 h-6" />
                <span className="text-gray-500">300k</span>
              </button>
              <button className="flex items-center space-x-1">
                <img src="src\assets\common\Icon\VectorC.png" alt="Comment" className="w-6 h-6" />
                <span className="text-gray-500">30k</span>
              </button>
              <button>
                <img src="src\assets\common\Icon\Vector.png" alt="Share" className="w-6 h-6" />
              </button>
            </div>
            <button>
              <img src="src\assets\common\Icon\Vector (2).png" alt="Save" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Post 2 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center space-x-4 mb-4">
            <img src="src\assets\common\img\Kim-ji-soo.png" alt="Kim Ji-soo" className="w-10 h-10 rounded-full border-2 border-pink-500" />
            <div className="font-semibold text-gray-900">Kim Ji-soo</div>
          </div>
          <div className="mb-4">
            <img src="src\assets\common\img\Jisoo-Wallpaper 1.png" alt="Jennie Kim Post" className="object-cover rounded-lg" />
            </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-4 flex justify-between text-white w-[430px] mx-auto" style={{ backgroundColor: '#FF7674' }}>
        <button>
          <img src="src\assets\common\Icon\Vector (3).png" alt="Home" className="w-6 h-6" />
        </button>
        <button>
          <img src="src\assets\common\Icon\Vector (5).png" alt="Search" className="w-6 h-6" />
        </button>
        <button className="bg-white text-pink-500 rounded-full p-4">
          <img src="src\assets\common\Icon\Ellipse 9.png" alt="Add" className="w-6 h-6" />
        </button>
        <button>
          <img src="src\assets\common\Icon\Notifitation.png" alt="Like" className="w-6 h-6" />
        </button>
        <button>
          <img src="src\assets\common\img\Ellipse 11.png" alt="Profile" className="w-6 h-6" />
        </button>
      </footer>
    </div>
          );
        };
        
export default Home