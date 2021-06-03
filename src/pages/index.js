import React from "react";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      <div>
        <div className="min-w-screen min-h-screen bg-yellow-300 flex items-start md:items-center p-2 lg:p-10 overflow-hidden relative">
          <div className="w-full max-w-6xl rounded bg-white shadow-xl p-2 lg:p-20 mx-auto text-gray-800 relative md:text-left">
            <div className="md:flex items-center -mx-10 space-y-2 md:space-y-0">
              <div className="w-full md:w-1/2 px-10">
                <div className="relative">
                  <img
                    src="/img/raf.jpeg"
                    className="w-full relative z-10 rounded"
                    alt="Rafael Contreras"
                  />
                  <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0" />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-10">
                <div>
                  <h1 className="font-bold text-xl md:text-2xl">
                    Rafael Contreras Rodríguez
                  </h1>
                  <h2 className="font-tight text-base md:text-xl mb-1 md:mb-2">
                    Senior Full-Stack Developer / UX Designer
                  </h2>
                  <p className="text-sm md:text-base">
                    Raf has almost two decades of experience in all aspects of
                    app design, architecture, and development. He has Computer
                    Science Engineering, Graphic Design, and Business Admin
                    backgrounds; which allows him to see the big picture of app
                    development while keeping an eye on the details. He has
                    worked as UI/UX designer and researcher, front-end and
                    mobile developer, and back-end developer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
