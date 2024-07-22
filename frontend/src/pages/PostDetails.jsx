import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const PostDetails = () => {
  return (
    <>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            10 Uses of Artificial Intelligence in Day to Day Life
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              {" "}
              <FaRegEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@muskoneldev</p>
          <div className="flex space-x-2">
            <p>22/07/2024</p>
            <p>16:43</p>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Artificial Intelligence"
          className=" w-full mx-auto mt-8 "
        />
        <p className="mx-auto mt-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
          laborum qui blanditiis magnam maxime quam ipsam, sunt dolor
          laudantium? Sed assumenda reiciendis quos ratione officia corrupti
          debitis, doloribus nihil quis mollitia eius consequatur, laborum
          distinctio facilis odit nam, consequuntur rerum veritatis veniam
          aspernatur sit natus obcaecati dicta! Sint atque ea ad esse aliquam,
          impedit veniam quibusdam. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Quas voluptatem incidunt officiis mollitia, odio
          nemo iste non, praesentium blanditiis vel animi accusamus in!
          Doloremque, unde nihil? Rem ipsum culpa distinctio eaque numquam.{" "}
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories: </p>
          <div className="flex justify-center items-center space-x-2 ">
            <div className="bg-[#E2808A] rounded-lg px-3 py-1 text-white">
              Tech
            </div>
            <div className="bg-[#E2808A] rounded-lg px-3 py-1 text-white">
              AI
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold text-[#2E765E] ">
            Comments :{" "}
          </h3>
          {/* Comments */}
          <div className="px-2 py-2 bg-teal-600 text-white rounded-lg my-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#84e4e5]">@muskoneldev</h3>
              <div className="flex justify-center items-center space-x-4">
                <p className="text-[#84e4e5] text-sm">21/04/2023</p>
                <p className="text-[#84e4e5] text-sm">21/04/2023</p>
                <div className="flex items-center justify-center space-x-2 ">
                  <p>
                    <FaRegEdit />
                  </p>
                  <p>
                    <MdDelete />{" "}
                  </p>
                </div>
              </div>
            </div>
            <p className="px-4 mt-2">Insightful!</p>
          </div>
        </div>
        {/* Write a comment */}
        <div className="flex flex-col mt-4 md:flex-row">
            <input type="text" placeholder="Write a comment" className="border border-teal-500   md:w-[80%] outline-none py-4 px-4 mt-4 md:mt-0"/>
            <button className="bg-teal-700 text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PostDetails;
