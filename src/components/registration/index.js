import React, { useContext, useState } from "react";
import UserContext from "../../context/userContext";
import FinishedHeader from "../header/finishedheader";

export default function Registration() {
  const [firstName, setfirstName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [lastName, setlastName] = useState("");
  const [Matnumber, setmatNumber] = useState("");
  const [studentYear, setStudentYear] = useState("");
  const [studentDegre, setStudentDgre] = useState("");
  const [email, setEmail] = useState("");
  const [venue, setVenue] = useState("");
  const [id, setid] = useState("");
  const [image, setImage] = useState("");
  const { setData } = useContext(UserContext);

  function clear() {
    setfirstName("");
    setmiddleName("");
    setlastName("");
    setmatNumber("");
    setStudentYear("");
    setStudentDgre("");
    setEmail("");
    setVenue("");
    setid("");
    setImage("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      firstName,
      middleName,
      lastName,
      Matnumber,
      studentYear,
      studentDegre,
      email,
      venue,
      id,
      image,
    };

    console.log(data);
    setData(data);
    clear();
  }

  return (
    <div className="h-full w-full ">
      <div className="mb-10">
        <FinishedHeader />
      </div>
      <section>
        <div className="flex justify-center w-full h-full">
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div className="flex justify-between gap-6 w-full md:w-[60vw] md:flex-row flex-col">
              <div>
                <label
                  htmlFor="firstname"
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white capitalize"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[20vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  value={firstName}
                  onChange={(e) => setfirstName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="middlename"
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white capitalize"
                >
                  Middle Name
                </label>
                <input
                  type="text"
                  name="middlename"
                  id="middlename"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[20vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  value={middleName}
                  onChange={(e) => setmiddleName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white capitalize"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[20vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full flex md:flex-row flex-col gap-10 justify-around">
              <div>
                <label
                  htmlFor="studentNumber"
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white capitalize"
                >
                  Mat Number
                </label>
                <input
                  type="text"
                  name="studentNumber"
                  id="studentNumber"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[20vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  value={Matnumber}
                  onChange={(e) => setmatNumber(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="studentYear"
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white capitalize"
                >
                  Student Year
                </label>
                <input
                  type="text"
                  name="studentYear"
                  id="studentYear"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[20vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  value={studentYear}
                  onChange={(e) => setStudentYear(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full flex md:flex-row flex-col gap-10 justify-around">
              <div>
                <label
                  htmlFor="studentDegree"
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white capitalize"
                >
                  Student Degree
                </label>
                <input
                  type="text"
                  name="studentDegre"
                  id="studentDegree"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[20vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  value={studentDegre}
                  onChange={(e) => setStudentDgre(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white capitalize"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[20vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full flex gap-10 justify-around">
              <div>
                <label
                  htmlFor="venue"
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white capitalize"
                >
                  Venue
                </label>
                <input
                  type="text"
                  name="venue"
                  id="venue"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[20vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="id"
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white capitalize"
                >
                  ID
                </label>
                <input
                  type="text"
                  name="id"
                  id="id"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[20vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  value={id}
                  onChange={(e) => setid(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-center w-full">
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white capitalize"
              >
                Image
              </label>
              <input
                type="file"
                name="image"
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="block w-full md:w-[20vw] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              />
            </div>
            <div className="flex justify-center w-full h-full">
              <button
                type="submit"
                className="w-1/2 h-14 capitalize text-white bg-green-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-semibold rounded-lg text-sm px-5 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
