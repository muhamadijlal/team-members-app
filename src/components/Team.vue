<script setup></script>

<template>
  <section class="w-full">
    <header class="flex justify-between items-center">
      <button
        class="px-3 py-2 bg-gray-400 rounded-md font-medium text-lg text-slate-100"
      >
        Add member (0 spots left)
      </button>

      <div>
        <div class="inline-flex relative pr-7">
          <div class="flex items-center gap-2">
            <img
              src="../assets/image/logo-team.jpg"
              alt="logo-team"
              class="w-10 h-10"
            />
            <h4 class="text-4xl font-semibold">Smiley Team</h4>
          </div>
          <div
            class="top-0 right-0 absolute flex items-center justify-center w-6 h-6 text-slate-100 text-xs font-bold bg-green-400 rounded-full"
          >
            20
          </div>
        </div>
      </div>
    </header>

    <main class="my-10">
      <div class="flex justify-center">
        <table class="border-separate table-fixed border-spacing-4 w-[900px]">
          <thead>
            <th
              class="text-lg w-1/2 font-bold text-slate-800 border border-slate-300 rounded-md p-2"
            >
              Name
            </th>
            <th
              class="text-lg w-1/3 font-bold text-slate-800 border border-slate-300 rounded-md p-2"
            >
              Email
            </th>
            <th
              class="text-lg font-bold text-slate-800 border border-slate-300 rounded-md p-2"
            >
              Status
            </th>
          </thead>

          <tbody>
            <tr>
              <td
                class="bg-gray-200 rounded-md p-5 font-bold text-xl flex items-center gap-3"
              >
                <img
                  src="https://ui-avatars.com/api/?name=haidar+ijlal"
                  class="w-12 h-12 rounded-md"
                  alt="avatar"
                />
                Haidar ijlal
              </td>
              <td
                class="bg-gray-200 rounded-md p-5 font-semibold text-gray-600"
              >
                m.haidarijl@gmail.com
              </td>
              <td
                class="bg-gray-200 rounded-md p-5 font-semibold text-green-500 text-xl"
              >
                Active
              </td>
            </tr>
            <tr>
              <td
                class="bg-gray-200 rounded-md p-5 font-bold text-xl flex items-center gap-3"
              >
                <img
                  src="https://ui-avatars.com/api/?name=jhone+doe"
                  class="w-12 h-12 rounded-md"
                  alt="avatar"
                />
                Jhone Doe
              </td>
              <td
                class="bg-gray-200 rounded-md p-5 font-semibold text-gray-600"
              >
                Jhonedoe@gmail.com
              </td>
              <td
                class="bg-gray-200 rounded-md p-5 font-semibold text-green-500 text-xl"
              >
                Active
              </td>
            </tr>
            <tr>
              <td
                class="bg-gray-200 rounded-md p-5 font-bold text-xl flex items-center gap-3"
              >
                <img
                  src="https://ui-avatars.com/api/?name=chika+syifa"
                  class="w-12 h-12 rounded-md"
                  alt="avatar"
                />
                Chika Syifa
              </td>
              <td
                class="bg-gray-200 rounded-md p-5 font-semibold text-gray-600"
              >
                CSyifa@gmail.com
              </td>
              <td
                class="bg-gray-200 rounded-md p-5 font-semibold text-green-500 text-xl"
              >
                Active
              </td>
            </tr>
            <tr>
              <td
                class="bg-gray-200 rounded-md p-5 font-bold text-xl flex items-center gap-3"
              >
                <img
                  src="https://ui-avatars.com/api/?name=alexa"
                  class="w-12 h-12 rounded-md"
                  alt="avatar"
                />
                Alexa
              </td>
              <td
                class="bg-gray-200 rounded-md p-5 font-semibold text-gray-600"
              >
                alexa@gmail.com
              </td>
              <td
                class="bg-gray-200 rounded-md p-5 font-semibold text-green-500 text-xl"
              >
                Active
              </td>
            </tr>
            <tr>
              <td
                class="bg-gray-200 rounded-md p-5 font-bold text-xl flex items-center gap-3"
              >
                <img
                  src="https://ui-avatars.com/api/?name=Bruno"
                  class="w-12 h-12 rounded-md"
                  alt="avatar"
                />
                Bruno
              </td>
              <td
                class="bg-gray-200 rounded-md p-5 font-semibold text-gray-600"
              >
                Bruno@gmail.com
              </td>
              <td
                class="bg-gray-200 rounded-md p-5 font-semibold text-green-500 text-xl"
              >
                Active
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <span class="text-md font-bold italic flex justify-end text-slate-500"
        >There are no remaining team spots. Upgrade to add more.</span
      >
    </main>

    <footer class="bg-gray-200 rounded-lg p-4 flex justify-center">
      <h5 class="text-lg font-bold text-slate-800">Smiley - 5 Member Team</h5>
    </footer>
  </section>
</template>
