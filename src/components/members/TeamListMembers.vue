<script setup>
defineProps({
  name: String,
  email: String,
  status: String,
});

let avatarName = function (name) {
  return name.split(" ").join("+");
};
</script>

<template>
  <tr>
    <td
      class="bg-gray-200 rounded-md p-5 font-bold text-xl flex items-center gap-3"
    >
      <img
        :src="
          'https://ui-avatars.com/api/?name=' +
          avatarName(name) +
          '&background=0284c7&color=fff'
        "
        class="w-12 h-12 rounded-md"
        alt="avatar"
      />
      {{ name }}
    </td>
    <td class="bg-gray-200 rounded-md p-5 font-semibold text-gray-600">
      {{ email }}
    </td>
    <td class="bg-gray-200 rounded-md p-5 font-semibold text-green-500 text-xl">
      {{ status }}
    </td>
  </tr>
</template>
