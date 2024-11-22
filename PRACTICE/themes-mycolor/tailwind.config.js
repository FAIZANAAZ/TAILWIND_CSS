/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],

  theme: {
    extend: {
      // extend ka matlb hota he ke jo tailwind ke apny colors hen wo bhi rhy or hm apna bhi add kr sky agr hm nhi likhen extend hta den to wo apny colors ya apny properties bhul jata he

      colors: {
        mainColor:"#3f7d3d",
        secondcolor:"#e63946"
      }
    },
  },

  plugins: [],
}

