import React, { useState } from "react";
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
  return (
    <div>
      <section>
        <div className="flex justify-center w-full">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              class="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            ></img>
            Flowbite
          </a>
        </div>
        <div className="flex justify-center w-full h-full ">
          <form class="space-y-4 md:space-y-6" action="#">
            <div className="flex justify-between gap-6  w-[60vw]">
              <div>
                <label
                  for="firstName"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  firstname
                </label>
                <input
                  type="text"
                  name="email"
                  id="firstname"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[20vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  value={firstName}
                  onChange={(e) => setfirstName(e.target.value)}
                ></input>
              </div>
              <div>
                <label
                  for="middleName"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  middlename
                </label>
                <input
                  type="text"
                  name="middlename"
                  id="middlename"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[20vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  value={middleName}
                  onChange={(e) => setmiddleName(e.target.value)}
                ></input>
              </div>
              <div>
                <label
                  for="lastNmae"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  lastname
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[20vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="w-full flex gap-10 justify-around  ">
              <div>
                <label
                  for="studentNumber"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Matnumber
                </label>
                <input
                  type="text"
                  name="studentNumber"
                  id="studentNumber"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[20vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  value={Matnumber}
                  onChange={(e) => setmatNumber(e.target.value)}
                ></input>
              </div>
              <div>
                <label
                  for="studentYear"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  studentyear
                </label>
                <input
                  type="text"
                  name="studentYear"
                  id="studentYear"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[20vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  value={studentYear}
                  onChange={(e) => setStudentYear(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="w-full flex gap-10 justify-around  ">
              <div>
                <label
                  for="studentDegre"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  studentdegree
                </label>
                <input
                  type="text"
                  name="studentDegre"
                  id="studentDegree"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[20vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  value={studentDegre}
                  onChange={(e) => setStudentDgre(e.target.value)}
                ></input>
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[20vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="w-full flex gap-10 justify-around  ">
              <div>
                <label
                  for="venue"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Venue
                </label>
                <input
                  type="text"
                  name="venue"
                  id="venue"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[20vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                ></input>
              </div>
              <div>
                <label
                  for="id"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  id
                </label>
                <input
                  type="text"
                  name="id"
                  id="id"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[20vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  value={id}
                  onChange={(e) => setid(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="flex justify-center w-full h-full">
              <label
                for="image"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                image
              </label>
              <input
                type="image"
                name="image"
                src=""
                alt="input images"
              ></input>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
